import { NextRequest, NextResponse } from "next/server";

const authRoutes = ["/report-lost-item", "/report-found-item"];

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const token = request.cookies.get("jwt");

  if (token && (path === "/sign-in" || path === "/sign-up")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!token && authRoutes.includes(path)) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }
}

export const config = {
  matcher: ["/sign-in", "/sign-up", "/report-lost-item", "/report-found-item"],
};
