"use client";

import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { Bell, Menu } from "lucide-react";

type TopbarProps = {
  onMenuClick: () => void;
};

export default function Topbar({ onMenuClick }: TopbarProps) {
  const { data: session } = useSession();

  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-6 lg:px-8">

      {/* Left Side */}
      <div className="flex items-center gap-3">

        {/* Mobile Menu Button */}
        <button
          onClick={onMenuClick}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition hover:bg-slate-100 lg:hidden"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>

        {/* Dashboard Title */}
        <div>
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
            Dashboard
          </h2>

          <p className="text-sm text-slate-500">
            Welcome back,{" "}
            {session?.user?.name?.split(" ")[0] || "User"}
          </p>
        </div>

      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3 sm:gap-6">

        {/* Notifications */}
        <button
          className="relative rounded-full p-2 transition hover:bg-slate-100"
          aria-label="Notifications"
        >
          <Bell size={22} />

          {/* Notification Dot */}
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3">

          <Image
            src={session?.user?.image || "/logo.png"}
            alt="Profile"
            width={44}
            height={44}
            className="rounded-full border"
          />

          {/* User Details - Hidden on Mobile */}
          <div className="hidden md:block">
            <h4 className="font-semibold text-slate-900">
              {session?.user?.name}
            </h4>

            <p className="text-sm text-slate-500">
              {session?.user?.email}
            </p>
          </div>

        </div>

        {/* Logout */}
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="rounded-xl bg-red-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-red-600 sm:px-4 sm:text-base"
        >
          Logout
        </button>

      </div>

    </header>
  );
}