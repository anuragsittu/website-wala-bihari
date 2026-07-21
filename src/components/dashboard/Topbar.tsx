"use client";

import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { Bell } from "lucide-react";

export default function Topbar() {
  const { data: session } = useSession();

  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-8">

      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          Dashboard
        </h2>

        <p className="text-sm text-slate-500">
          Welcome back, {session?.user?.name?.split(" ")[0]} 
        </p>
      </div>

      <div className="flex items-center gap-6">

        <button className="relative rounded-full p-2 transition hover:bg-slate-100">
          <Bell size={22} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        <div className="flex items-center gap-3">

          <Image
            src={session?.user?.image || "/logo.png"}
            alt="Profile"
            width={44}
            height={44}
            className="rounded-full border"
          />

          <div className="hidden md:block">
            <h4 className="font-semibold text-slate-900">
              {session?.user?.name}
            </h4>

            <p className="text-sm text-slate-500">
              {session?.user?.email}
            </p>
          </div>

        </div>

        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="rounded-xl bg-red-500 px-4 py-2 font-medium text-white transition hover:bg-red-600"
        >
          Logout
        </button>

      </div>

    </header>
  );
}