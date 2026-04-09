"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Post = {
  id: string;
  title: string;
  caption: string;
  mediaType: "image" | "video";
  mediaUrl: string;
  createdAt: string;
};

function formatDate(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}

export function LatestStories({ limit }: { limit?: number }) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const shown = useMemo(() => (typeof limit === "number" ? posts.slice(0, limit) : posts), [posts, limit]);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch("/api/posts", { cache: "no-store" });
        if (!res.ok) throw new Error(`Failed to load posts (${res.status})`);
        const json = (await res.json()) as { posts: Post[] };
        if (!cancelled) setPosts(Array.isArray(json.posts) ? json.posts : []);
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : "Failed to load posts.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    void load();
    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) {
    return <p className="text-brand-dark/70">Loading latest stories…</p>;
  }

  if (error) {
    return <p className="text-red-600">Couldn’t load stories. {error}</p>;
  }

  if (!shown.length) {
    return <p className="text-brand-dark/70">No stories posted yet.</p>;
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {shown.map((post) => (
        <article
          key={post.id}
          className="rounded-[2rem] border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
        >
          <div className="relative aspect-[16/10] bg-slate-100">
            {post.mediaType === "image" ? (
              <Image
                src={post.mediaUrl}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            ) : (
              <video controls preload="metadata" className="w-full h-full object-cover">
                <source src={post.mediaUrl} />
              </video>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0 pointer-events-none" />
          </div>
          <div className="p-6">
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-green mb-2">
              {formatDate(post.createdAt)}
            </div>
            <h3 className="font-heading text-xl font-semibold text-brand-dark mb-2">{post.title}</h3>
            <p className="text-brand-dark/80 leading-relaxed">{post.caption}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

