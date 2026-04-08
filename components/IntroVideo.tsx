"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

const VIDEO_URL =
  process.env.NEXT_PUBLIC_INTRO_VIDEO_URL || "https://www.youtube.com/watch?v=mhkWCOrjKlE";
const POSTER_URL = process.env.NEXT_PUBLIC_INTRO_VIDEO_POSTER || "";

function getYoutubeVideoId(url: string): string | null {
  if (!url) return null;
  try {
    const u = new URL(url);
    const host = u.hostname.toLowerCase();
    if (host.includes("youtube.com") && u.searchParams.get("v")) {
      return u.searchParams.get("v");
    }
    if (host.includes("youtu.be")) {
      return u.pathname.slice(1).split("?")[0] || null;
    }
  } catch {
    return null;
  }
  return null;
}

function getPosterUrl(): string {
  if (POSTER_URL) return POSTER_URL;
  const id = getYoutubeVideoId(VIDEO_URL);
  if (id) return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
  return "";
}

function getEmbedUrl(
  url: string,
  options?: { autoplay?: boolean; mute?: boolean }
): { type: "youtube" | "vimeo" | "direct"; embed: string } | null {
  if (!url) return null;
  try {
    const u = new URL(url);
    const host = u.hostname.toLowerCase();
    const params = new URLSearchParams();
    if (options?.autoplay) params.set("autoplay", "1");
    if (options?.mute) params.set("mute", "1");
    const query = params.toString();

    if (host.includes("youtube.com") && u.searchParams.get("v")) {
      const id = u.searchParams.get("v");
      const embed = `https://www.youtube-nocookie.com/embed/${id}${query ? `?${query}` : ""}`;
      return { type: "youtube", embed };
    }
    if (host.includes("youtu.be")) {
      const id = u.pathname.slice(1).split("?")[0];
      const embed = `https://www.youtube-nocookie.com/embed/${id}${query ? `?${query}` : ""}`;
      return { type: "youtube", embed };
    }
    if (host.includes("vimeo.com")) {
      const id = u.pathname.replace(/^\//, "").split("/")[0];
      const embed = `https://player.vimeo.com/video/${id}${query ? `?${query}` : ""}`;
      return { type: "vimeo", embed };
    }
    return { type: "direct", embed: url };
  } catch {
    return null;
  }
}

export function IntroVideo() {
  const [playing, setPlaying] = useState(false);
  const [inView, setInView] = useState(false);
  const [mutedHintVisible, setMutedHintVisible] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const posterUrl = getPosterUrl();
  const embed = VIDEO_URL
    ? getEmbedUrl(VIDEO_URL, playing ? { autoplay: true } : undefined)
    : null;
  const embedMuted = VIDEO_URL
    ? getEmbedUrl(VIDEO_URL, { autoplay: true, mute: true })
    : null;
  const userClickedPlay = useRef(false);

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    if (entry?.isIntersecting) setInView(true);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "100px",
      threshold: 0.3,
    });
    io.observe(el);
    return () => io.disconnect();
  }, [handleIntersection]);

  useEffect(() => {
    if (inView && !playing && !userClickedPlay.current && embed?.type === "youtube") {
      setPlaying(true);
    }
  }, [inView, playing, embed?.type]);

  useEffect(() => {
    if (playing) {
      const t = setTimeout(() => setMutedHintVisible(false), 4000);
      return () => clearTimeout(t);
    } else {
      setMutedHintVisible(true);
    }
  }, [playing]);

  const handlePlayClick = () => {
    userClickedPlay.current = true;
    setPlaying(true);
  };

  if (!VIDEO_URL) {
    return (
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-brand-dark mb-2">
            Watch our story
          </h2>
          <p className="text-slate-500 mb-8">
            Set <code className="text-sm bg-slate-200 px-1 rounded">NEXT_PUBLIC_INTRO_VIDEO_URL</code> (and optionally{" "}
            <code className="text-sm bg-slate-200 px-1 rounded">NEXT_PUBLIC_INTRO_VIDEO_POSTER</code>) to show the intro video.
          </p>
          <div className="aspect-video rounded-2xl bg-slate-200 flex items-center justify-center text-slate-400">
            Video URL not configured
          </div>
        </div>
      </section>
    );
  }

  const isYoutube = embed?.type === "youtube";
  const wasAutoplayed = inView && isYoutube && !userClickedPlay.current;
  const showMutedHint = playing && wasAutoplayed && mutedHintVisible;

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-brand-dark mb-2 text-center">
          Watch our story
        </h2>
        <p className="text-slate-500 text-center mb-10">
          See how Mashambanzou Care Trust is building AIDS-free, resilient communities.
        </p>
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 shadow-xl">
          {!playing ? (
            <>
              {posterUrl ? (
                <Image
                  src={posterUrl}
                  alt="Play intro video"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 896px"
                  priority={false}
                  unoptimized={posterUrl.startsWith("https://img.youtube.com")}
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-brand-green/80 to-brand-dark" />
              )}
              <button
                type="button"
                onClick={handlePlayClick}
                className="absolute inset-0 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-brand-sunlight focus:ring-offset-4 focus:ring-offset-slate-50 rounded-2xl"
                aria-label="Play intro video"
              >
                <span className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-brand-sunlight flex items-center justify-center text-brand-dark shadow-lg hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 ml-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </button>
            </>
          ) : embed ? (
            <>
              {embed.type === "youtube" || embed.type === "vimeo" ? (
                <iframe
                  src={wasAutoplayed ? embedMuted?.embed : embed.embed}
                  title="Mashambanzou Care Trust intro video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              ) : (
                <video
                  src={embed.embed}
                  controls
                  autoPlay
                  className="absolute inset-0 w-full h-full"
                  poster={posterUrl || undefined}
                />
              )}
              {showMutedHint && (
                <div
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/60 text-white text-sm font-medium backdrop-blur-sm transition-opacity duration-500"
                  aria-hidden
                >
                  Sound off — click video to unmute
                </div>
              )}
            </>
          ) : null}
        </div>
      </div>
    </section>
  );
}
