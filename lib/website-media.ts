export type WebsiteMediaItem = {
  id: number | string;
  section_key: string;
  label?: string | null;
  alt_text?: string | null;
  sort_order?: number | null;
  image_url: string;
};

export type WebsiteMediaMap = Record<string, WebsiteMediaItem[]>;

export type ManagedImage = {
  src: string;
  alt: string;
  label?: string;
};

export async function getWebsiteMedia(): Promise<WebsiteMediaMap> {
  const baseUrl = process.env.LARAVEL_API_URL;
  if (!baseUrl) return {};

  try {
    const res = await fetch(`${baseUrl.replace(/\/$/, "")}/api/website-media`, { cache: "no-store" });
    if (!res.ok) return {};
    const json = (await res.json()) as { media?: WebsiteMediaMap };
    return json.media && typeof json.media === "object" ? json.media : {};
  } catch {
    return {};
  }
}

export function imageFromMedia(media: WebsiteMediaMap, key: string, fallback: ManagedImage): ManagedImage {
  const item = media[key]?.[0];
  if (!item?.image_url) return fallback;

  return {
    src: item.image_url,
    alt: item.alt_text || fallback.alt,
    label: item.label || fallback.label,
  };
}

export function imagesFromMedia(media: WebsiteMediaMap, key: string, fallbacks: ManagedImage[]): ManagedImage[] {
  const items = media[key]?.filter((item) => item.image_url) ?? [];
  if (!items.length) return fallbacks;

  return items.map((item, index) => ({
    src: item.image_url,
    alt: item.alt_text || fallbacks[index]?.alt || item.label || "",
    label: item.label || fallbacks[index]?.label,
  }));
}

