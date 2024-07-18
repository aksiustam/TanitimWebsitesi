import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl.clone();

  // Root path '/' ziyaret edilirse
  if (url.pathname === "/") {
    url.pathname = "/en";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
