import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Don't block public routes, static assets, or API routes
  if (
    pathname.startsWith("/unlock") ||
    pathname.startsWith("/coming-soon") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") // static files (favicon.ico, images, etc.)
  ) {
    return NextResponse.next();
  }

  const cookie = request.cookies.get("site-auth");
  if (cookie?.value === "authenticated") {
    return NextResponse.next();
  }

  // Rewrite to /coming-soon (URL stays the same, content changes)
  return NextResponse.rewrite(new URL("/coming-soon", request.url));
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon\\.ico).*)"],
};
