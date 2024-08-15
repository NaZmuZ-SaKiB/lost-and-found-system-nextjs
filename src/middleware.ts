import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("jwt");

  if (!token) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }
}

export const config = {
  matcher: [
    "/report-lost-item",
    "/report-found-item",
    "/user/:path*",
    "/admin/:path*",
  ],
};
