"use server";

import { signIn, signOut } from "@/auth";

export async function SignInWithGoogle(searchParams: string | null) {
  const redirectionPath = searchParams || "/console";
  await signIn("google", { redirectTo: redirectionPath });
}

export async function SignInWithCredentials(data: FormData) {
  const email = data.get("email") as string;
  const password = data.get("password") as string;

  if (!email || !password) {
    throw new Error("Email and password are required");
  }

  await signIn("credentials", {
    email,
    password,
    redirect: false,
  });
}

export async function SignOut() {
  await signOut({
    redirect: true,
    redirectTo: "/login",
  });
}

export async function SignUp(data: FormData) {
  const email = data.get("email") as string;
  const password = data.get("password") as string;

  if (!email || !password) {
    throw new Error("Email and password are required");
  }

  // Implement your sign-up logic here
  // For example, you might want to create a new user in your database
}

export async function ResetPassword(data: FormData) {
  const email = data.get("email") as string;

  if (!email) {
    throw new Error("Email is required");
  }

  // Implement your password reset logic here
  // For example, you might want to send a password reset email
}

export async function UpdateProfile(data: FormData) {
  const name = data.get("name") as string;
  const email = data.get("email") as string;

  if (!name || !email) {
    throw new Error("Name and email are required");
  }

  // Implement your profile update logic here
  // For example, you might want to update the user's profile in your database
}

export async function DeleteAccount() {
  // Implement your account deletion logic here
  // For example, you might want to delete the user's account from your database
}

