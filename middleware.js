import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("admin_token")?.value;
  const expected = process.env.ADMIN_TOKEN;

  // If ADMIN_TOKEN isn't configured or cookie doesn't match, block access
  if (!expected || !token || token !== expected) {
    return NextResponse.redirect(new URL("/admin-login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin"],
};
