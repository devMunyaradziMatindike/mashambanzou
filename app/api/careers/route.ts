import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const baseUrl = process.env.LARAVEL_API_URL;
  if (!baseUrl) {
    return NextResponse.json({ careers: [] });
  }

  try {
    const res = await fetch(`${baseUrl.replace(/\/$/, "")}/api/careers`, { cache: "no-store" });
    if (!res.ok) {
      throw new Error(`Laravel careers request failed (${res.status})`);
    }

    return NextResponse.json(await res.json());
  } catch (error) {
    console.error("Failed to read Laravel careers", error);
    return NextResponse.json({ careers: [] });
  }
}
