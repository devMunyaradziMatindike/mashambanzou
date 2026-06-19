export type CareerOpening = {
  id: number | string;
  title: string;
  slug?: string;
  application_deadline?: string | null;
  image_url?: string | null;
  is_expired?: boolean;
};

export type TenderInvitation = {
  id: number | string;
  title: string;
  slug?: string;
  application_deadline?: string | null;
  file_url?: string | null;
  original_filename?: string | null;
  file_size?: number | null;
  file_size_label?: string | null;
  uploaded_at?: string | null;
  uploaded_label?: string | null;
  is_expired?: boolean;
};

export function formatDeadline(value?: string | null) {
  if (!value) return "Deadline not set";
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

export async function getCareers(): Promise<CareerOpening[]> {
  const baseUrl = process.env.LARAVEL_API_URL;
  if (!baseUrl) return [];

  try {
    const res = await fetch(`${baseUrl.replace(/\/$/, "")}/api/careers`, { cache: "no-store" });
    if (!res.ok) return [];
    const json = (await res.json()) as { careers?: CareerOpening[] };
    return Array.isArray(json.careers) ? json.careers : [];
  } catch {
    return [];
  }
}

export async function getTenders(): Promise<TenderInvitation[]> {
  const baseUrl = process.env.LARAVEL_API_URL;
  if (!baseUrl) return [];

  try {
    const res = await fetch(`${baseUrl.replace(/\/$/, "")}/api/tenders`, { cache: "no-store" });
    if (!res.ok) return [];
    const json = (await res.json()) as { tenders?: TenderInvitation[] };
    return Array.isArray(json.tenders) ? json.tenders : [];
  } catch {
    return [];
  }
}
