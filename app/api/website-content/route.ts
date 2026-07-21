import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const baseUrl = process.env.LARAVEL_API_URL;
  if (!baseUrl) {
    return NextResponse.json({ content: {} });
  }

  try {
    const res = await fetch(`${baseUrl.replace(/\/$/, "")}/api/website-content`, { cache: "no-store" });
    if (!res.ok) throw new Error(`Laravel content request failed (${res.status})`);
    const json = (await res.json()) as { content?: Record<string, string> };
    return NextResponse.json({ content: json.content ?? {} });
  } catch (error) {
    console.error("Failed to read Laravel website content", error);
    return NextResponse.json({ content: {} });
  }
}
