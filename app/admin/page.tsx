"use client";

import { useEffect, useMemo, useState } from "react";

type Post = {
  id: string;
  title: string;
  caption: string;
  mediaType: "image" | "video";
  mediaUrl: string;
  createdAt: string;
};

export default function AdminPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [posted, setPosted] = useState<Post | null>(null);
  const [signingOut, setSigningOut] = useState(false);
  const [editing, setEditing] = useState<Post | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editCaption, setEditCaption] = useState("");
  const [savingEdit, setSavingEdit] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const canSubmit = useMemo(() => Boolean(title.trim() && caption.trim() && file), [title, caption, file]);
  const canSaveEdit = useMemo(() => Boolean(editTitle.trim() && editCaption.trim()), [editTitle, editCaption]);

  async function refreshPosts() {
    try {
      setLoadingPosts(true);
      const res = await fetch("/api/posts", { cache: "no-store" });
      const json = (await res.json()) as { posts?: Post[] };
      if (!res.ok) throw new Error((json as any)?.error || `Failed to load posts (${res.status})`);
      setPosts(Array.isArray(json.posts) ? json.posts : []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load posts.");
    } finally {
      setLoadingPosts(false);
    }
  }

  useEffect(() => {
    void refreshPosts();
  }, []);

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
      await refreshPosts();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to post.");
    } finally {
      setSubmitting(false);
    }
  }

  function startEdit(p: Post) {
    setEditing(p);
    setEditTitle(p.title);
    setEditCaption(p.caption);
    setError(null);
    setSuccess(null);
  }

  function cancelEdit() {
    setEditing(null);
    setEditTitle("");
    setEditCaption("");
  }

  async function saveEdit() {
    if (!editing) return;
    try {
      setSavingEdit(true);
      setError(null);
      const res = await fetch(`/api/posts/${editing.id}`, {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ title: editTitle.trim(), caption: editCaption.trim() }),
      });
      const json = (await res.json()) as { post?: Post; error?: string };
      if (!res.ok) throw new Error(json.error || `Failed to save (${res.status})`);
      setSuccess("Post updated.");
      cancelEdit();
      await refreshPosts();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update post.");
    } finally {
      setSavingEdit(false);
    }
  }

  async function deletePost(p: Post) {
    const ok = window.confirm(`Delete this post?\n\n"${p.title}"`);
    if (!ok) return;

    try {
      setDeletingId(p.id);
      setError(null);
      const res = await fetch(`/api/posts/${p.id}`, { method: "DELETE" });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok) throw new Error(json.error || `Failed to delete (${res.status})`);
      setSuccess("Post deleted.");
      await refreshPosts();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete post.");
    } finally {
      setDeletingId(null);
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
    <div className="min-h-[calc(100vh-120px)] bg-brand-dark/10 backdrop-blur pb-24 pt-28 sm:pt-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="rounded-[2rem] border border-white/10 bg-brand-dark/20 backdrop-blur shadow-sm shadow-brand-dark/20 overflow-hidden">
          <div className="p-8 sm:p-10 border-b border-white/10 flex items-start justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-heading font-semibold text-white">Seller — Post a story</h1>
            <p className="text-white/80 mt-2">
              Upload a photo or video with a heading and caption. It will show on “Latest stories” and on the homepage.
              This area is for sellers only; supporters and visitors do not register.
            </p>
            </div>
            <button
              type="button"
              onClick={onSignOut}
              disabled={signingOut}
              className="shrink-0 inline-flex items-center justify-center rounded-full border-2 border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/15 hover:border-white/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {signingOut ? "Signing out…" : "Sign out"}
            </button>
          </div>

          <form onSubmit={onSubmit} className="p-8 sm:p-10 space-y-6">
            {error && (
              <div className="rounded-2xl border border-red-200/30 bg-red-500/15 px-5 py-4 text-red-50">{error}</div>
            )}
            {success && (
              <div className="rounded-2xl border border-emerald-200/30 bg-emerald-500/15 px-5 py-4 text-emerald-50">
                {success}
              </div>
            )}

            <div className="grid gap-2">
              <label htmlFor="title" className="text-sm font-semibold text-white">
                Heading
              </label>
              <input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Community outreach in Nyabira"
                className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 outline-none focus:ring-4 focus:ring-brand-sunlight/25"
              />
            </div>

            <div className="grid gap-2">
              <label htmlFor="caption" className="text-sm font-semibold text-white">
                Caption
              </label>
              <textarea
                id="caption"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                placeholder="Write a short caption (1–3 sentences)."
                rows={4}
                className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 outline-none focus:ring-4 focus:ring-brand-sunlight/25"
              />
            </div>

            <div className="grid gap-2">
              <label htmlFor="media" className="text-sm font-semibold text-white">
                Photo or video
              </label>
              <input
                id="media"
                type="file"
                accept="image/*,video/*"
                onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white file:text-white file:bg-white/10 file:border-0 file:rounded-lg file:px-3 file:py-1.5"
              />
              <p className="text-xs text-white/70">Accepted: images and videos. Bigger videos may take longer to upload.</p>
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
          <div className="mt-8 rounded-[2rem] border border-white/10 bg-brand-dark/20 backdrop-blur shadow-sm shadow-brand-dark/20 overflow-hidden">
            <div className="p-6 border-b border-white/10">
              <h2 className="text-xl font-heading font-semibold text-white">Preview</h2>
              <p className="text-white/80 mt-1">This is how it will appear to visitors.</p>
            </div>
            <div className="p-6">
              <div className="text-sm font-semibold text-brand-sunlight">{new Date(posted.createdAt).toLocaleString()}</div>
              <div className="mt-2 text-2xl font-heading font-semibold text-white">{posted.title}</div>
              <div className="mt-2 text-white/80">{posted.caption}</div>
              <div className="mt-5 rounded-3xl overflow-hidden border border-white/10 bg-white/10">
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

        <div className="mt-10 rounded-[2rem] border border-white/10 bg-brand-dark/20 backdrop-blur shadow-sm shadow-brand-dark/20 overflow-hidden">
          <div className="p-6 sm:p-8 border-b border-white/10 flex items-center justify-between gap-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-heading font-semibold text-white">Manage posts</h2>
              <p className="text-white/80 mt-1 text-sm">Edit headings/captions or delete posts.</p>
            </div>
            <button
              type="button"
              onClick={() => refreshPosts()}
              className="shrink-0 inline-flex items-center justify-center rounded-full border-2 border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/15 hover:border-white/30 transition-all"
            >
              Refresh
            </button>
          </div>

          <div className="p-6 sm:p-8">
            {loadingPosts ? (
              <p className="text-white/80">Loading posts…</p>
            ) : posts.length ? (
              <div className="space-y-4">
                {posts.map((p) => (
                  <div
                    key={p.id}
                    className="rounded-3xl border border-white/10 bg-white/10 p-4 sm:p-5 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-24 h-16 rounded-2xl overflow-hidden border border-white/10 bg-brand-dark/15 flex items-center justify-center">
                        {p.mediaType === "image" ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={p.mediaUrl} alt={p.title} className="w-full h-full object-cover" />
                        ) : (
                          <span className="text-xs font-semibold text-white/80">Video</span>
                        )}
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-widest text-brand-sunlight">
                          {new Date(p.createdAt).toLocaleString()}
                        </div>
                        <div className="mt-1 font-heading font-semibold text-white">{p.title}</div>
                        <div className="mt-1 text-sm text-white/80 line-clamp-2">{p.caption}</div>
                      </div>
                    </div>

                    <div className="flex gap-3 sm:justify-end">
                      <button
                        type="button"
                        onClick={() => startEdit(p)}
                        className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/10 border-2 border-white/20 text-white text-sm font-semibold hover:bg-white/15 hover:border-white/30 transition-colors"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => deletePost(p)}
                        disabled={deletingId === p.id}
                        className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/10 border-2 border-red-200/40 text-red-50 text-sm font-semibold hover:bg-red-500/15 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {deletingId === p.id ? "Deleting…" : "Delete"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-white/80">No posts yet.</p>
            )}
          </div>
        </div>
      </div>

      {editing && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 px-4"
          role="dialog"
          aria-modal="true"
          aria-label="Edit post"
        >
          <div className="w-full max-w-2xl rounded-[2rem] border border-white/10 bg-brand-dark/25 backdrop-blur shadow-xl shadow-brand-dark/25 overflow-hidden">
            <div className="p-6 sm:p-8 border-b border-white/10 flex items-start justify-between gap-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-heading font-semibold text-white">Edit post</h3>
                <p className="text-sm text-white/80 mt-1">Update the heading and caption.</p>
              </div>
              <button
                type="button"
                onClick={cancelEdit}
                className="inline-flex items-center justify-center rounded-full border-2 border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/15 hover:border-white/30 transition-all"
              >
                Close
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-5">
              <div className="grid gap-2">
                <label htmlFor="editTitle" className="text-sm font-semibold text-white">
                  Heading
                </label>
                <input
                  id="editTitle"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none focus:ring-4 focus:ring-brand-sunlight/25"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="editCaption" className="text-sm font-semibold text-white">
                  Caption
                </label>
                <textarea
                  id="editCaption"
                  value={editCaption}
                  onChange={(e) => setEditCaption(e.target.value)}
                  rows={4}
                  className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none focus:ring-4 focus:ring-brand-sunlight/25"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
                <button
                  type="button"
                  onClick={cancelEdit}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-white/10 border-2 border-white/20 text-white font-semibold hover:bg-white/15 transition-all"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={saveEdit}
                  disabled={!canSaveEdit || savingEdit}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-brand-green text-white font-semibold shadow-sm hover:bg-brand-green/90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {savingEdit ? "Saving…" : "Save changes"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

