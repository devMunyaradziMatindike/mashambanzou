"use client";

import { useEffect, useState } from "react";
import type { WebsiteMediaMap } from "./website-media";

export function useWebsiteMedia(section?: string) {
  const [media, setMedia] = useState<WebsiteMediaMap>({});

  useEffect(() => {
    let cancelled = false;
    const query = section ? `?section=${encodeURIComponent(section)}` : "";

    async function load() {
      try {
        const res = await fetch(`/api/website-media${query}`, { cache: "no-store" });
        if (!res.ok) return;
        const json = (await res.json()) as { media?: WebsiteMediaMap };
        if (!cancelled) setMedia(json.media && typeof json.media === "object" ? json.media : {});
      } catch {
        if (!cancelled) setMedia({});
      }
    }

    void load();

    return () => {
      cancelled = true;
    };
  }, [section]);

  return media;
}

