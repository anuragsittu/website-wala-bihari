"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

export default function GoogleSignInButton() {
  return (
    <button
      type="button"
      onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
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
  );
}