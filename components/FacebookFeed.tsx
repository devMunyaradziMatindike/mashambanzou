"use client";

import { useState, useEffect } from "react";

const FACEBOOK_PAGE_URL = "https://www.facebook.com/mashambanzoucaretrustOrganization";

interface Post {
  id: string;
  message: string;
  created_time: string;
  permalink_url: string;
  full_picture?: string;
}

interface ApiResponse {
  configured: boolean;
  posts: Post[];
  error?: string;
  message?: string;
}

function formatDate(iso: string): string {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}

function truncate(str: string, max: number): string {
  if (str.length <= max) return str;
  return str.slice(0, max).trimEnd() + "…";
}

export function FacebookFeed() {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/facebook-posts")
      .then((r) => r.json())
      .then((res: ApiResponse) => {
        setData(res);
      })
      .catch(() => setData({ configured: false, posts: [] }))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-brand-dark/10 backdrop-blur">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white text-center mb-10">
            Latest from Facebook
          </h2>
          <div className="flex justify-center py-16">
            <div className="w-8 h-8 border-2 border-brand-sunlight border-t-transparent rounded-full animate-spin" />
          </div>
        </div>
      </section>
    );
  }

  if (!data?.configured || data.posts.length === 0) {
    return (
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-brand-dark/10 backdrop-blur">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white mb-4">Latest from Facebook</h2>
          <p className="text-white/80 mb-6">
            Follow Mashambanzou Care Trust on Facebook for updates, stories and news.
          </p>
          <a
            href={FACEBOOK_PAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1877F2] text-white rounded-full font-medium hover:opacity-90 transition-opacity"
            aria-label="Follow Mashambanzou Care Trust on Facebook"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Follow us on Facebook
          </a>
          {!data?.configured && (
            <p className="text-white/70 text-sm mt-6">
              Set <code className="bg-white/10 px-1 rounded">FACEBOOK_ACCESS_TOKEN</code> in .env.local to show the latest posts here.
            </p>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-brand-dark/10 backdrop-blur">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white">Latest from Facebook</h2>
          <a
            href={FACEBOOK_PAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white font-medium hover:text-brand-sunlight transition-colors"
          >
            View all on Facebook
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {data.posts.slice(0, 10).map((post) => (
            <a
              key={post.id}
              href={post.permalink_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl overflow-hidden border border-white/10 bg-brand-dark/15 backdrop-blur shadow-sm shadow-brand-dark/15 hover:shadow-lg hover:shadow-brand-dark/25 hover:border-white/20 transition-all"
            >
              <div className="aspect-[16/10] sm:aspect-[4/3] bg-white/10 relative overflow-hidden">
                {post.full_picture ? (
                  <img
                    src={post.full_picture}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-white/60 text-4xl">
                    📘
                  </div>
                )}
              </div>
              <div className="p-4">
                <time
                  dateTime={post.created_time}
                  className="text-xs font-medium text-white/70 uppercase tracking-wide"
                >
                  {formatDate(post.created_time)}
                </time>
                {post.message && (
                  <p className="mt-2 text-white/85 text-sm line-clamp-3">
                    {truncate(post.message, 120)}
                  </p>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
