import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET(req: Request) {
  const baseUrl = process.env.LARAVEL_API_URL;
  const headers = { "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0" };

  if (!baseUrl) {
    return NextResponse.json({ media: {} }, { headers });
  }

  try {
    const url = new URL(req.url);
    const section = url.searchParams.get("section");
    const res = await fetch(`${baseUrl.replace(/\/$/, "")}/api/website-media`, { cache: "no-store" });

    if (!res.ok) {
      throw new Error(`Laravel media request failed (${res.status})`);
    }

    const json = (await res.json()) as { media?: Record<string, unknown[]> };
    const media = json.media && typeof json.media === "object" ? json.media : {};

    if (section) {
      return NextResponse.json({ media: { [section]: media[section] ?? [] } }, { headers });
    }

    return NextResponse.json({ media }, { headers });
  } catch (error) {
    console.error("Failed to read Laravel website media", error);
    return NextResponse.json({ media: {} }, { headers });
  }
}
