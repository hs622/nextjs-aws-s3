import NextAuth from "next-auth";
import GoogleProvider from "./app/api/auth/providers/google-provider";

export const { handlers, auth, signIn, signOut } = NextAuth({
  cookies: {
    sessionToken: {
      name: "sys-session-token",
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
      },
    },
    callbackUrl: {
      name: "sys-cb-url",
      options: {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        path: "/",
      },
    },
    csrfToken: {
      name: "sys-csrf-token",
      options: {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        path: "/",
      },
    },
  },
  providers: [GoogleProvider],
  pages: {
    signIn: "/login",
    signOut: "/login",
    error: "/login",
  },
});

