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

export async function GET() {
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

