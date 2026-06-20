export type Notice = {
  id: number | string;
  title: string;
  slug?: string;
  published_at?: string | null;
  excerpt?: string | null;
  body?: string | null;
  image_url?: string | null;
};

export function formatNoticeDate(value?: string | null) {
  if (!value) return "Notice";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

export async function getNotices(): Promise<Notice[]> {
  const baseUrl = process.env.LARAVEL_API_URL;
  if (!baseUrl) return [];

  try {
    const res = await fetch(`${baseUrl.replace(/\/$/, "")}/api/notices`, { cache: "no-store" });
    if (!res.ok) return [];
    const json = (await res.json()) as { notices?: Notice[] };
    return Array.isArray(json.notices) ? json.notices : [];
  } catch {
    return [];
  }
}
