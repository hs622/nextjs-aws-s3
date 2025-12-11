import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const publicRoutes = ["/login"];
  const isAuthenticated = request.cookies.get("sys-session-token")?.value;

  const isPublicRoute: boolean = publicRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  if (!isAuthenticated && !isPublicRoute) {
    const loginUrl = new URL("/login", request.url);

    loginUrl.searchParams.set("redirect", encodeURI(request.nextUrl.pathname));
    return NextResponse.redirect(loginUrl);
  }

  if(isAuthenticated && isPublicRoute) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  const requestHeader = new Headers(request.headers);
  requestHeader.set("x-url", request.url)
  requestHeader.set("x-pathname", request.nextUrl.pathname)
  requestHeader.set("x-search", request.nextUrl.search)

  return NextResponse.next({
    request: {
      headers: requestHeader
    }
  });
}

export const config = {
  matcher: [
    "/((?!api|.well-known|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};