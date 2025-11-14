import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const publicRoutes = ["/login"];
  const isAuthenticated = request.cookies.get("authjs.session-token")?.value;

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

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|.well-known|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};