import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { promises as fs } from "fs";
import path from "path";
import { randomUUID } from "crypto";

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

const POSTS_PATH = path.join(process.cwd(), "data", "posts.json");
const UPLOADS_DIR = path.join(process.cwd(), "public", "uploads");

async function readPosts(): Promise<Post[]> {
  try {
    const raw = await fs.readFile(POSTS_PATH, "utf8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as Post[]) : [];
  } catch {
    return [];
  }
}

async function writePosts(posts: Post[]) {
  await fs.mkdir(path.dirname(POSTS_PATH), { recursive: true });
  await fs.writeFile(POSTS_PATH, JSON.stringify(posts, null, 2) + "\n", "utf8");
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

  const extFromName = path.extname(file.name || "").slice(0, 12);
  const safeExt = extFromName && /^[.\w]+$/.test(extFromName) ? extFromName : "";
  const id = randomUUID();
  const filename = `${id}${safeExt}`;

  await fs.mkdir(UPLOADS_DIR, { recursive: true });
  const bytes = Buffer.from(await file.arrayBuffer());
  await fs.writeFile(path.join(UPLOADS_DIR, filename), bytes);

  const newPost: Post = {
    id,
    title,
    caption,
    mediaType,
    mediaUrl: `/uploads/${filename}`,
    createdAt: new Date().toISOString(),
  };

  const posts = await readPosts();
  posts.unshift(newPost);
  await writePosts(posts);

  return NextResponse.json({ post: newPost }, { status: 201 });
}

