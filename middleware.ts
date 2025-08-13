// import { NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
// console.log(`Host IP: ${request.headers.get("Host")}`);

// const browserName = request.headers.get("sec-ch-ua")
// ?.split(";")
// ?.map(item => item.trim().replace(/"/g, ''))
// // i at the end of the regex makes it case-insensitive
// ?.find(item => item.search(/Google Chrome|Firefox|Safari|Edge/i) !== -1);

// console.log(`Browser: ${browserName}`);
// console.log(`System: ${request.headers.get("sec-ch-ua-platform")}`);

// console.log(`user ip: ${request.headers.get("x-forwarded-for")}`);
// console.log(`protocol: ${request.headers.get("x-forwarded-proto")}`);

// request.headers.forEach((value, key) => console.log(`${key}: ${value}`));

// console.log(`Cookie: ${request.headers.get("Cookie")}`);
// console.log(`Cookie: ${request.headers.get("Cookie")}`);

//   return NextResponse.redirect(new URL("/login", request.url));
// }

export { auth as middleware } from "./auth";

export const config = {
  matcher: [
    "/console/:path", 
  ]
};

