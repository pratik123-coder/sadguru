import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Block access to /courses/blocked by rewriting to homepage
  if (pathname.startsWith("/courses/blocked")) {
    return NextResponse.rewrite(new URL("/", req.url));
  }

  // Allow all other paths to continue
  return NextResponse.next();
}
