
"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

import Container from "@/components/ui/Container";
import { SITE } from "@/constants/site";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#services" },
  { name: "Why Us", href: "#why-us" },
  { name: "Process", href: "#process" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
  { name: "Start Project", href: "#start-project" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <Container>
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-blue-600"
          >
            {SITE.name}
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-medium text-slate-700 transition hover:text-blue-600"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Button */}
          <Link
            href="#start-project"
            className="hidden rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 md:block"
          >
            Start Project
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-slate-700 md:hidden"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="border-t border-gray-200 bg-white md:hidden">
            <nav className="flex flex-col py-4">

              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
                >
                  {item.name}
                </Link>
              ))}

            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}