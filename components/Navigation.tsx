"use client";

import Link from "next/link";
import { useState } from "react";

export const CONTACT_EMAIL = "hello@cl-strategy.com";
export const CTA_LINK = `/about`;

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop Nav - Floating, no bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 hidden md:block">
        <div className="flex items-center justify-between px-8 py-6">
          {/* Logo / Name */}
          <Link href="/" className="text-white text-3xl font-bold tracking-tight hover:text-[#00e5ff] transition-colors">
            C&L
          </Link>

          {/* Nav Links */}
          <div className="flex items-center gap-10">
            <Link href="/how-we-work" className="text-white/70 text-lg font-medium hover:text-white transition-colors">
              How We Work
            </Link>
            <Link href="/construction" className="text-white/70 text-lg font-medium hover:text-white transition-colors">
              Construction
            </Link>
            <Link href="/digital" className="text-white/70 text-lg font-medium hover:text-white transition-colors">
              Digital
            </Link>
            <Link href="/case-work" className="text-white/70 text-lg font-medium hover:text-white transition-colors">
              Work
            </Link>
            <Link href="/about" className="text-white/70 text-lg font-medium hover:text-white transition-colors">
              About
            </Link>
            <Link
              href={CTA_LINK}
              className="text-black bg-[#00e5ff] px-6 py-3 text-lg font-semibold rounded-full hover:bg-[#00c8e0] transition-colors"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 md:hidden">
        <div className="flex items-center justify-between px-6 py-5">
          <Link href="/" className="text-white text-xl font-bold tracking-tight">
            C&L
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white text-sm font-medium"
          >
            {mobileOpen ? "Close" : "Menu"}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#0a0a0a] border-t border-white/10 px-6 py-8">
            <div className="flex flex-col gap-6">
              <Link
                href="/how-we-work"
                onClick={() => setMobileOpen(false)}
                className="text-white text-2xl font-semibold"
              >
                How We Work
              </Link>
              <Link
                href="/construction"
                onClick={() => setMobileOpen(false)}
                className="text-white text-2xl font-semibold"
              >
                Construction
              </Link>
              <Link
                href="/digital"
                onClick={() => setMobileOpen(false)}
                className="text-white text-2xl font-semibold"
              >
                Digital
              </Link>
              <Link
                href="/case-work"
                onClick={() => setMobileOpen(false)}
                className="text-white text-2xl font-semibold"
              >
                Work
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileOpen(false)}
                className="text-white text-2xl font-semibold"
              >
                About
              </Link>
              <Link
                href={CTA_LINK}
                onClick={() => setMobileOpen(false)}
                className="text-black bg-[#00e5ff] px-6 py-3 text-lg font-semibold rounded-full text-center mt-4"
              >
                Let's Talk
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
