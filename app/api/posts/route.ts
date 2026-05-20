import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { randomUUID } from "crypto";
import { put } from "@vercel/blob";
import { kv } from "@vercel/kv";

export const runtime = "nodejs";

type MediaType = "image" | "video";

type Post = {
  id: string;
  title: string;
  caption: string;
  mediaType: MediaType;
  mediaUrl: string;
  createdAt: string;
};

const POSTS_KEY = "mct:posts:v1";

type LaravelStory = {
  id: string | number;
  title: string;
  excerpt?: string | null;
  body?: string | null;
  published_at?: string | null;
  image_url?: string | null;
};

async function readPosts(): Promise<Post[]> {
  const posts = (await kv.get(POSTS_KEY)) as unknown;
  return Array.isArray(posts) ? (posts as Post[]) : [];
}

async function writePosts(posts: Post[]) {
  await kv.set(POSTS_KEY, posts);
}

function getMediaType(mime: string): MediaType | null {
  if (mime.startsWith("image/")) return "image";
  if (mime.startsWith("video/")) return "video";
  return null;
}

async function readLaravelStories(): Promise<Post[] | null> {
  const baseUrl = process.env.LARAVEL_API_URL;
  if (!baseUrl) return null;

  const res = await fetch(`${baseUrl.replace(/\/$/, "")}/api/success-stories`, { cache: "no-store" });
  if (!res.ok) throw new Error(`Laravel stories request failed (${res.status})`);

  const json = (await res.json()) as { stories?: LaravelStory[] };
  if (!Array.isArray(json.stories)) return [];

  return json.stories
    .filter((story) => story.image_url)
    .map((story) => ({
      id: String(story.id),
      title: story.title,
      caption: story.excerpt || story.body || "",
      mediaType: "image",
      mediaUrl: story.image_url as string,
      createdAt: story.published_at || new Date().toISOString(),
    }));
}

export async function GET() {
  try {
    const laravelStories = await readLaravelStories();
    if (laravelStories) {
      return NextResponse.json({ posts: laravelStories });
    }
  } catch (error) {
    console.error("Failed to read Laravel success stories", error);
  }

  const posts = await readPosts();
  posts.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
  return NextResponse.json({ posts });
}

export async function POST(req: Request) {
  const authed = (await cookies()).get("mct_admin")?.value === "1";
  if (!authed) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const form = await req.formData();
  const title = String(form.get("title") ?? "").trim();
  const caption = String(form.get("caption") ?? "").trim();
  const file = form.get("file");

  if (!title) {
    return NextResponse.json({ error: "Title is required." }, { status: 400 });
  }
  if (!caption) {
    return NextResponse.json({ error: "Caption is required." }, { status: 400 });
  }
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "Media file is required." }, { status: 400 });
  }

  const mediaType = getMediaType(file.type);
  if (!mediaType) {
    return NextResponse.json({ error: "Unsupported media type." }, { status: 400 });
  }

  const id = randomUUID();
  const safeName = (file.name || "upload").replace(/[^\w.\-]/g, "_").slice(0, 80);
  const blob = await put(`latest-stories/${id}-${safeName}`, file, { access: "public" });

  const newPost: Post = {
    id,
    title,
    caption,
    mediaType,
    mediaUrl: blob.url,
    createdAt: new Date().toISOString(),
  };

  const posts = await readPosts();
  posts.unshift(newPost);
  await writePosts(posts);

  return NextResponse.json({ post: newPost }, { status: 201 });
}

