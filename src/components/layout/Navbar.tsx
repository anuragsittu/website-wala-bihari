"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Website Wala Bihari"
            width={45}
            height={45}
            priority
          />

          <span className="ml-2 hidden text-xl font-bold text-slate-900 sm:block">
            Website Wala Bihari
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="font-medium text-slate-700 transition hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            href="/#services"
            className="font-medium text-slate-700 transition hover:text-blue-600"
          >
            Services
          </Link>

          <Link
            href="/#pricing"
            className="font-medium text-slate-700 transition hover:text-blue-600"
          >
            Pricing
          </Link>

          <Link
            href="/#process"
            className="font-medium text-slate-700 transition hover:text-blue-600"
          >
            Process
          </Link>

          <Link
            href="/#faq"
            className="font-medium text-slate-700 transition hover:text-blue-600"
          >
            FAQ
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Login - Visible on Desktop and Mobile */}
          <Link
            href="/login"
            className="rounded-xl border border-blue-600 px-4 py-2 font-semibold text-blue-600 transition hover:bg-blue-50 md:px-5 md:py-2.5"
          >
            Login
          </Link>

          {/* Start Project - Desktop Only */}
          <Link
            href="/#start-project"
            className="hidden rounded-xl bg-blue-600 px-5 py-2.5 font-semibold text-white transition hover:bg-blue-700 md:block"
          >
            Start Project
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-slate-700 transition hover:bg-gray-50 md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <span className="text-2xl">✕</span>
            ) : (
              <span className="text-2xl">☰</span>
            )}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-gray-100 bg-white px-6 py-5 md:hidden">

          <div className="flex flex-col gap-4">

            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="font-medium text-slate-700"
            >
              Home
            </Link>

            <Link
              href="/#services"
              onClick={() => setIsOpen(false)}
              className="font-medium text-slate-700"
            >
              Services
            </Link>

            <Link
              href="/#pricing"
              onClick={() => setIsOpen(false)}
              className="font-medium text-slate-700"
            >
              Pricing
            </Link>

            <Link
              href="/#process"
              onClick={() => setIsOpen(false)}
              className="font-medium text-slate-700"
            >
              Process
            </Link>

            <Link
              href="/#faq"
              onClick={() => setIsOpen(false)}
              className="font-medium text-slate-700"
            >
              FAQ
            </Link>

            {/* Mobile Start Project */}
            <Link
              href="/#start-project"
              onClick={() => setIsOpen(false)}
              className="rounded-xl bg-blue-600 px-5 py-3 text-center font-semibold text-white"
            >
              Start Project
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}