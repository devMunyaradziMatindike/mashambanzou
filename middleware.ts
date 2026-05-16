import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Seller-only routes: buyers / public visitors never register; sign-in is for authorized publishers only.
  if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
    const authed = req.cookies.get("mct_admin")?.value === "1";
    if (!authed) {
      const url = req.nextUrl.clone();
      url.pathname = "/admin/login";
      url.searchParams.set("next", pathname);
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};

