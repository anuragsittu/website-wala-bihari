"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const searchParams = useSearchParams();

  const callbackUrl =
    searchParams.get("callbackUrl") || "/dashboard";

  async function handleGoogleLogin() {
    await signIn("google", {
      callbackUrl: callbackUrl,
    });
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-white via-blue-50 to-white px-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">

        <div className="flex justify-center">
          <Image
            src="/logo.png"
            alt="Website Wala Bihari"
            width={70}
            height={70}
            priority
          />
        </div>

        <h1 className="mt-6 text-center text-3xl font-bold text-slate-900">
          Welcome Back
        </h1>

        <p className="mt-2 text-center text-slate-600">
          Sign in to manage your projects.
        </p>

        <button
          onClick={handleGoogleLogin}
          className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl border border-gray-300 py-3 font-semibold transition hover:bg-gray-50"
        >
          <Image
            src="/google.svg"
            alt="Google"
            width={22}
            height={22}
          />

          Continue with Google
        </button>

        <div className="my-8 flex items-center">
          <div className="h-px flex-1 bg-gray-200" />

          <span className="mx-4 text-sm text-gray-500">
            OR
          </span>

          <div className="h-px flex-1 bg-gray-200" />
        </div>

        <p className="text-center text-sm text-slate-600">
          New to Website Wala Bihari?
        </p>

        <Link
          href={`/register?callbackUrl=${encodeURIComponent(
            callbackUrl
          )}`}
          className="mt-3 block text-center font-semibold text-blue-600 hover:underline"
        >
          Create an Account
        </Link>

        <Link
          href="/"
          className="mt-6 block text-center text-sm text-slate-500 hover:underline"
        >
          ← Back to Homepage
        </Link>
      </div>
    </main>
  );
}