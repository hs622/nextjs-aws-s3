import NextAuth from "next-auth";
import GoogleProvider from "./app/api/auth/providers/google-provider";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GoogleProvider],
  pages: {
    signIn: "/login",
    signOut: "/login",
    error: "/login",
  },
});

