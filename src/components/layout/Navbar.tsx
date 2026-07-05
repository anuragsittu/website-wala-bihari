"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import { SITE } from "@/constants/site";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur-md">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            {SITE.name}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-medium text-gray-700 transition-colors duration-300 hover:text-blue-600"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <button className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white transition-all duration-300 hover:bg-blue-700">
            Get Quote
          </button>
        </div>
      </Container>
    </header>
  );
}