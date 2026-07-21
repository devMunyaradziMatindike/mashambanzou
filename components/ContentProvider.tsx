"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  CONTENT_DEFAULTS,
  createContentTranslator,
  mergeContent,
  type ContentMap,
} from "@/lib/website-content";

type SiteContentContextValue = {
  content: ContentMap;
  t: (key: string, fallback?: string) => string;
  ready: boolean;
};

const SiteContentContext = createContext<SiteContentContextValue>({
  content: CONTENT_DEFAULTS,
  t: (key, fallback) => fallback ?? CONTENT_DEFAULTS[key] ?? "",
  ready: false,
});

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState<ContentMap>(CONTENT_DEFAULTS);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch("/api/website-content", { cache: "no-store" });
        if (!res.ok) return;
        const json = (await res.json()) as { content?: ContentMap };
        if (!cancelled) {
          setContent(mergeContent(json.content));
          setReady(true);
        }
      } catch {
        if (!cancelled) setReady(true);
      }
    }

    void load();
    return () => {
      cancelled = true;
    };
  }, []);

  const value = useMemo(
    () => ({
      content,
      t: createContentTranslator(content),
      ready,
    }),
    [content, ready]
  );

  return <SiteContentContext.Provider value={value}>{children}</SiteContentContext.Provider>;
}

export function useSiteContent() {
  return useContext(SiteContentContext);
}
