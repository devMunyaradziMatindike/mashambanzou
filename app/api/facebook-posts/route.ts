import { NextResponse } from "next/server";

const FACEBOOK_PAGE_ID =
  process.env.FACEBOOK_PAGE_ID || "mashambanzoucaretrustOrganization";
const FACEBOOK_ACCESS_TOKEN = process.env.FACEBOOK_ACCESS_TOKEN || "";
const LIMIT = 10;

export const dynamic = "force-dynamic";
export const revalidate = 3600; // Cache for 1 hour

interface FacebookPost {
  id: string;
  message?: string;
  created_time: string;
  permalink_url?: string;
  full_picture?: string;
}

interface GraphResponse {
  data?: FacebookPost[];
  error?: { message: string; type: string };
}

export async function GET() {
  if (!FACEBOOK_ACCESS_TOKEN) {
    return NextResponse.json({
      configured: false,
      posts: [],
      message: "Set FACEBOOK_ACCESS_TOKEN in .env.local to enable the feed.",
    });
  }

  try {
    const fields = [
      "message",
      "created_time",
      "permalink_url",
      "full_picture",
    ].join(",");
    const url = `https://graph.facebook.com/v21.0/${FACEBOOK_PAGE_ID}/posts?fields=${fields}&limit=${LIMIT}&access_token=${FACEBOOK_ACCESS_TOKEN}`;

    const res = await fetch(url, {
      next: { revalidate: 3600 },
    });
    const json: GraphResponse = await res.json();

    if (json.error) {
      return NextResponse.json({
        configured: true,
        posts: [],
        error: json.error.message,
      });
    }

    const posts = (json.data || []).map((p) => ({
      id: p.id,
      message: p.message || "",
      created_time: p.created_time,
      permalink_url: p.permalink_url || `https://www.facebook.com/${FACEBOOK_PAGE_ID}`,
      full_picture: p.full_picture,
    }));

    return NextResponse.json({
      configured: true,
      posts,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to fetch Facebook posts";
    return NextResponse.json({
      configured: true,
      posts: [],
      error: message,
    });
  }
}
