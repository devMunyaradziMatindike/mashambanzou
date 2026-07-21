export type ContentField = {
  page: string;
  type: string;
  label: string;
  default: string;
};

export type ContentMap = Record<string, string>;
export type ContentCatalog = Record<string, ContentField>;

import catalogJson from "@/data/website-content.json";

const catalog = catalogJson as { fields: ContentCatalog };

export const CONTENT_DEFAULTS: ContentMap = Object.fromEntries(
  Object.entries(catalog.fields).map(([key, field]) => [key, field.default])
);

export const CONTENT_FIELD_TYPES: Record<string, string> = Object.fromEntries(
  Object.entries(catalog.fields).map(([key, field]) => [key, field.type])
);

export function isRichContentKey(key: string): boolean {
  const type = CONTENT_FIELD_TYPES[key];
  return type === "paragraph" || type === "rich";
}

export async function getWebsiteContent(): Promise<ContentMap> {
  const baseUrl = process.env.LARAVEL_API_URL;
  if (!baseUrl) return { ...CONTENT_DEFAULTS };

  try {
    const res = await fetch(`${baseUrl.replace(/\/$/, "")}/api/website-content`, { cache: "no-store" });
    if (!res.ok) return { ...CONTENT_DEFAULTS };
    const json = (await res.json()) as { content?: ContentMap };
    return mergeContent(json.content);
  } catch {
    return { ...CONTENT_DEFAULTS };
  }
}

export function mergeContent(overrides?: ContentMap | null): ContentMap {
  return { ...CONTENT_DEFAULTS, ...(overrides && typeof overrides === "object" ? overrides : {}) };
}

export function textFromContent(content: ContentMap, key: string, fallback?: string): string {
  const value = content[key];
  if (typeof value === "string" && value.trim()) return value;
  if (fallback) return fallback;
  return CONTENT_DEFAULTS[key] ?? "";
}

export function createContentTranslator(content: ContentMap) {
  return (key: string, fallback?: string) => textFromContent(content, key, fallback);
}
