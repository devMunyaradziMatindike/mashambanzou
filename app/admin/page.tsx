"use client";

import { useMemo, useState } from "react";

type Post = {
  id: string;
  title: string;
  caption: string;
  mediaType: "image" | "video";
  mediaUrl: string;
  createdAt: string;
};

export default function AdminPage() {
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [posted, setPosted] = useState<Post | null>(null);
  const [signingOut, setSigningOut] = useState(false);

  const canSubmit = useMemo(() => Boolean(title.trim() && caption.trim() && file), [title, caption, file]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setPosted(null);

    if (!file) {
      setError("Please choose an image or video file.");
      return;
    }

    try {
      setSubmitting(true);
      const form = new FormData();
      form.set("title", title.trim());
      form.set("caption", caption.trim());
      form.set("file", file);

      const res = await fetch("/api/posts", { method: "POST", body: form });
      const json = (await res.json()) as { post?: Post; error?: string };
      if (!res.ok) throw new Error(json.error || `Failed to post (${res.status})`);

      setPosted(json.post ?? null);
      setTitle("");
      setCaption("");
      setFile(null);
      setSuccess("Posted successfully. It’s now visible on the homepage and Latest stories page.");
      const input = document.getElementById("media") as HTMLInputElement | null;
      if (input) input.value = "";
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to post.");
    } finally {
      setSubmitting(false);
    }
  }

  async function onSignOut() {
    try {
      setSigningOut(true);
      await fetch("/api/admin/logout", { method: "POST" });
    } finally {
      window.location.href = "/admin/login";
    }
  }

  return (
    <div className="min-h-[calc(100vh-120px)] bg-slate-50 pb-24 pt-28 sm:pt-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="rounded-[2rem] border border-slate-200 bg-white shadow-sm overflow-hidden">
          <div className="p-8 sm:p-10 border-b border-slate-200 flex items-start justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-heading font-semibold text-brand-dark">Admin — Post a story</h1>
            <p className="text-brand-dark/70 mt-2">
              Upload a photo or video with a heading and caption. It will show on “Latest stories” and on the homepage.
            </p>
            </div>
            <button
              type="button"
              onClick={onSignOut}
              disabled={signingOut}
              className="shrink-0 inline-flex items-center justify-center rounded-full border-2 border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:border-brand-green/30 hover:shadow-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {signingOut ? "Signing out…" : "Sign out"}
            </button>
          </div>

          <form onSubmit={onSubmit} className="p-8 sm:p-10 space-y-6">
            {error && <div className="rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-red-700">{error}</div>}
            {success && (
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-emerald-800">
                {success}
              </div>
            )}

            <div className="grid gap-2">
              <label htmlFor="title" className="text-sm font-semibold text-brand-dark">
                Heading
              </label>
              <input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Community outreach in Nyabira"
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-brand-dark outline-none focus:ring-4 focus:ring-brand-sunlight/25"
              />
            </div>

            <div className="grid gap-2">
              <label htmlFor="caption" className="text-sm font-semibold text-brand-dark">
                Caption
              </label>
              <textarea
                id="caption"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                placeholder="Write a short caption (1–3 sentences)."
                rows={4}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-brand-dark outline-none focus:ring-4 focus:ring-brand-sunlight/25"
              />
            </div>

            <div className="grid gap-2">
              <label htmlFor="media" className="text-sm font-semibold text-brand-dark">
                Photo or video
              </label>
              <input
                id="media"
                type="file"
                accept="image/*,video/*"
                onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3"
              />
              <p className="text-xs text-brand-dark/60">Accepted: images and videos. Bigger videos may take longer to upload.</p>
            </div>

            <button
              type="submit"
              disabled={!canSubmit || submitting}
              className="inline-flex items-center justify-center rounded-2xl bg-brand-green px-6 py-3 text-white font-semibold shadow-sm hover:bg-brand-green/90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? "Posting…" : "Post story"}
            </button>
          </form>
        </div>

        {posted && (
          <div className="mt-8 rounded-[2rem] border border-slate-200 bg-white shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-200">
              <h2 className="text-xl font-heading font-semibold text-brand-dark">Preview</h2>
              <p className="text-brand-dark/70 mt-1">This is how it will appear to visitors.</p>
            </div>
            <div className="p-6">
              <div className="text-sm font-semibold text-brand-green">{new Date(posted.createdAt).toLocaleString()}</div>
              <div className="mt-2 text-2xl font-heading font-semibold text-brand-dark">{posted.title}</div>
              <div className="mt-2 text-brand-dark/80">{posted.caption}</div>
              <div className="mt-5 rounded-3xl overflow-hidden border border-slate-200 bg-slate-100">
                {posted.mediaType === "video" ? (
                  <video controls preload="metadata" className="w-full">
                    <source src={posted.mediaUrl} />
                  </video>
                ) : (
                  // Use plain img here to keep this client page lightweight (no next/image config needed for dynamic sizing).
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={posted.mediaUrl} alt={posted.title} className="w-full h-auto" />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

