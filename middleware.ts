import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { REDIRECTS } from "./app/links";

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  const destination = REDIRECTS[pathname];
  if (destination) {
    const url = req.nextUrl.clone();
    url.pathname = destination;
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

// Only run middleware on real pages (ignore next internals/assets)
export const config = {
  matcher: ["/((?!_next|api|favicon.ico|robots.txt|sitemap.xml).*)"],
};
