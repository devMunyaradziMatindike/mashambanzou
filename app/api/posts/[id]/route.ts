import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { promises as fs } from "fs";
import path from "path";

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

function getIdFromUrl(req: Request) {
  const url = new URL(req.url);
  const parts = url.pathname.split("/").filter(Boolean);
  return parts[parts.length - 1] || "";
}

export async function PATCH(req: Request) {
  const authed = (await cookies()).get("mct_admin")?.value === "1";
  if (!authed) return NextResponse.json({ error: "Unauthorized." }, { status: 401 });

  const id = getIdFromUrl(req);
  if (!id) return NextResponse.json({ error: "Missing id." }, { status: 400 });

  const body = (await req.json().catch(() => ({}))) as { title?: string; caption?: string };
  const title = String(body.title ?? "").trim();
  const caption = String(body.caption ?? "").trim();

  if (!title) return NextResponse.json({ error: "Title is required." }, { status: 400 });
  if (!caption) return NextResponse.json({ error: "Caption is required." }, { status: 400 });

  const posts = await readPosts();
  const idx = posts.findIndex((p) => p.id === id);
  if (idx === -1) return NextResponse.json({ error: "Not found." }, { status: 404 });

  const updated: Post = { ...posts[idx], title, caption };
  posts[idx] = updated;
  await writePosts(posts);

  return NextResponse.json({ post: updated });
}

export async function DELETE(req: Request) {
  const authed = (await cookies()).get("mct_admin")?.value === "1";
  if (!authed) return NextResponse.json({ error: "Unauthorized." }, { status: 401 });

  const id = getIdFromUrl(req);
  if (!id) return NextResponse.json({ error: "Missing id." }, { status: 400 });

  const posts = await readPosts();
  const idx = posts.findIndex((p) => p.id === id);
  if (idx === -1) return NextResponse.json({ error: "Not found." }, { status: 404 });

  const [removed] = posts.splice(idx, 1);
  await writePosts(posts);

  // Best-effort delete uploaded file if it lives under /public/uploads
  try {
    if (removed?.mediaUrl?.startsWith("/uploads/")) {
      const filename = removed.mediaUrl.replace("/uploads/", "");
      const filePath = path.join(process.cwd(), "public", "uploads", filename);
      await fs.unlink(filePath);
    }
  } catch {
    // ignore
  }

  return NextResponse.json({ ok: true });
}

