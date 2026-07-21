"use client";

import Image from "next/image";
import Link from "next/link";
import { Suspense, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";

function LoginForm() {
  const searchParams = useSearchParams();

  const projectCode = searchParams.get("projectCode");

  async function handleGoogleLogin() {
    await signIn("google", {
      callbackUrl: projectCode
        ? `/dashboard?projectCode=${encodeURIComponent(projectCode)}`
        : "/dashboard",
    });
  }

  const registerUrl = projectCode
    ? `/register?projectCode=${encodeURIComponent(projectCode)}`
    : "/register";

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-white via-blue-50 to-white px-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">

        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src="/logo.png"
            alt="Website Wala Bihari"
            width={70}
            height={70}
            priority
          />
        </div>

        {/* Heading */}
        <h1 className="mt-6 text-center text-3xl font-bold text-slate-900">
          Welcome Back
        </h1>

        <p className="mt-2 text-center text-slate-600">
          Sign in to manage your projects.
        </p>

        {/* Project Tracking Information */}
        {projectCode && (
          <div className="mt-5 rounded-xl bg-blue-50 p-4 text-center">
            <p className="text-sm text-slate-600">
              You are signing in to track:
            </p>

            <p className="mt-1 font-bold text-blue-600">
              {projectCode}
            </p>
          </div>
        )}

        {/* Google Login */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl border border-gray-300 bg-white py-3 font-semibold text-slate-700 transition hover:bg-gray-50"
        >
          <Image
            src="/google.svg"
            alt="Google"
            width={22}
            height={22}
          />

          Continue with Google
        </button>

        {/* Divider */}
        <div className="my-8 flex items-center">
          <div className="h-px flex-1 bg-gray-200" />

          <span className="mx-4 text-sm text-gray-500">
            OR
          </span>

          <div className="h-px flex-1 bg-gray-200" />
        </div>

        {/* Register */}
        <p className="text-center text-sm text-slate-600">
          New to Website Wala Bihari?
        </p>

        <Link
          href={registerUrl}
          className="mt-3 block text-center font-semibold text-blue-600 hover:underline"
        >
          Create an Account
        </Link>

        {/* Back Home */}
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

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-white via-blue-50 to-white px-6">
          <div className="text-center">
            <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
            <p className="mt-4 text-sm text-slate-600">
              Loading login...
            </p>
          </div>
        </main>
      }
    >
      <LoginForm />
    </Suspense>
  );
}