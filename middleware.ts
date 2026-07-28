import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const comingSoon = process.env.COMING_SOON === "true";

function isStaticAsset(pathname: string): boolean {
  return (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api/") ||
    pathname === "/favicon.ico" ||
    pathname === "/logo.png" ||
    /\.(png|jpe?g|gif|webp|svg|ico|woff2?)$/i.test(pathname)
  );
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (comingSoon) {
    if (!isStaticAsset(pathname) && pathname !== "/coming-soon") {
      const url = req.nextUrl.clone();
      url.pathname = "/coming-soon";
      return NextResponse.rewrite(url);
    }

    return NextResponse.next();
  }

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
  matcher: ["/((?!_next/static|_next/image).*)"],
};
