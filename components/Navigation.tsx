"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "./ui/design-system";

export const CONTACT_EMAIL = "hello@cl-strategy.com";
export const CTA_LINK = `/about`;

// Pages with immersive hero backgrounds that need transparent nav
const DARK_NAV_PAGES = [
  "/",
  "/about",
  "/how-we-work",
  "/digital",
  "/fractional",
  "/construction",
  "/what-we-build",
  "/case-work",
];

export default function Navigation() {
  const pathname = usePathname();
  const isDark = DARK_NAV_PAGES.some(p => pathname === p || pathname.startsWith(p + "/"));

  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className={cn(
        "z-50 w-full",
        isDark
          ? "absolute top-0 left-0 border-b border-white/10 bg-transparent"
          : "sticky top-0 border-b border-slate-200/70 bg-white/70 backdrop-blur-md"
      )}
    >
      <div
        className={cn(
          "mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 md:px-6 lg:px-8",
          isDark ? "py-5" : "py-4"
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-14 w-14 transition-transform group-hover:scale-105">
            <Image src="/logo-new.png" alt="C&L Strategy Logo" fill className="object-contain" priority />
          </div>
          <div className="leading-tight">
            <p className={cn("text-sm font-semibold tracking-tight", isDark ? "text-slate-100" : "text-slate-900")}>
              C&L Strategy
            </p>
            <p className={cn("text-xs", isDark ? "text-slate-300/80" : "text-slate-500")}>
              Operator-led consulting & systems design
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 md:flex">
          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={cn(
                "rounded-full px-3 py-2 text-sm transition-colors",
                isDark
                  ? "text-slate-200 hover:bg-white/10 hover:text-white"
                  : "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
              )}
              type="button"
            >
              Services
            </button>
            <div
              className={cn(
                "absolute left-0 top-full w-56 rounded-xl border py-2 shadow-xl transition-all",
                isDark
                  ? "border-white/10 bg-slate-950/95 text-slate-100"
                  : "border-slate-200 bg-white text-slate-900",
                servicesOpen ? "visible opacity-100" : "invisible opacity-0"
              )}
            >
              <Link
                href="/digital"
                className={cn(
                  "block px-4 py-2 text-sm transition-colors",
                  isDark ? "hover:bg-white/10 text-slate-200 hover:text-white" : "hover:bg-slate-50 text-slate-700"
                )}
              >
                Digital Systems
              </Link>
              <Link
                href="/fractional"
                className={cn(
                  "block px-4 py-2 text-sm transition-colors",
                  isDark ? "hover:bg-white/10 text-slate-200 hover:text-white" : "hover:bg-slate-50 text-slate-700"
                )}
              >
                Fractional Ops
              </Link>
              <Link
                href="/construction"
                className={cn(
                  "block px-4 py-2 text-sm transition-colors",
                  isDark ? "hover:bg-white/10 text-slate-200 hover:text-white" : "hover:bg-slate-50 text-slate-700"
                )}
              >
                Construction Ops
              </Link>
              <Link
                href="/what-we-build"
                className={cn(
                  "block px-4 py-2 text-sm transition-colors",
                  isDark ? "hover:bg-white/10 text-slate-200 hover:text-white" : "hover:bg-slate-50 text-slate-700"
                )}
              >
                What We Build
              </Link>
            </div>
          </div>

          <Link
            href="/case-work"
            className={cn(
              "rounded-full px-3 py-2 text-sm transition-colors",
              isDark
                ? "text-slate-200 hover:bg-white/10 hover:text-white"
                : "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
            )}
          >
            Work
          </Link>
          <Link
            href="/how-we-work"
            className={cn(
              "rounded-full px-3 py-2 text-sm transition-colors",
              isDark
                ? "text-slate-200 hover:bg-white/10 hover:text-white"
                : "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
            )}
          >
            How We Work
          </Link>
          <Link
            href="/about"
            className={cn(
              "rounded-full px-3 py-2 text-sm transition-colors",
              isDark
                ? "text-slate-200 hover:bg-white/10 hover:text-white"
                : "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
            )}
          >
            About
          </Link>

          {/* Resources Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setResourcesOpen(true)}
            onMouseLeave={() => setResourcesOpen(false)}
          >
            <button
              className={cn(
                "rounded-full px-3 py-2 text-sm transition-colors",
                isDark
                  ? "text-slate-200 hover:bg-white/10 hover:text-white"
                  : "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
              )}
              type="button"
            >
              Resources
            </button>
            <div
              className={cn(
                "absolute left-0 top-full w-56 rounded-xl border py-2 shadow-xl transition-all",
                isDark
                  ? "border-white/10 bg-slate-950/95 text-slate-100"
                  : "border-slate-200 bg-white text-slate-900",
                resourcesOpen ? "visible opacity-100" : "invisible opacity-0"
              )}
            >
              <Link
                href="/solutions"
                className={cn(
                  "block px-4 py-2 text-sm transition-colors",
                  isDark ? "hover:bg-white/10 text-slate-200 hover:text-white" : "hover:bg-slate-50 text-slate-700"
                )}
              >
                Solutions
              </Link>
              <Link
                href="/industries"
                className={cn(
                  "block px-4 py-2 text-sm transition-colors",
                  isDark ? "hover:bg-white/10 text-slate-200 hover:text-white" : "hover:bg-slate-50 text-slate-700"
                )}
              >
                Industries
              </Link>
              <Link
                href="/locations"
                className={cn(
                  "block px-4 py-2 text-sm transition-colors",
                  isDark ? "hover:bg-white/10 text-slate-200 hover:text-white" : "hover:bg-slate-50 text-slate-700"
                )}
              >
                Locations
              </Link>
              <Link
                href="/insights"
                className={cn(
                  "block px-4 py-2 text-sm transition-colors",
                  isDark ? "hover:bg-white/10 text-slate-200 hover:text-white" : "hover:bg-slate-50 text-slate-700"
                )}
              >
                Insights
              </Link>
              <Link
                href="/templates"
                className={cn(
                  "block px-4 py-2 text-sm transition-colors",
                  isDark ? "hover:bg-white/10 text-slate-200 hover:text-white" : "hover:bg-slate-50 text-slate-700"
                )}
              >
                Templates
              </Link>
              <Link
                href="/compare"
                className={cn(
                  "block px-4 py-2 text-sm transition-colors",
                  isDark ? "hover:bg-white/10 text-slate-200 hover:text-white" : "hover:bg-slate-50 text-slate-700"
                )}
              >
                Compare
              </Link>
              <Link
                href="/glossary"
                className={cn(
                  "block px-4 py-2 text-sm transition-colors",
                  isDark ? "hover:bg-white/10 text-slate-200 hover:text-white" : "hover:bg-slate-50 text-slate-700"
                )}
              >
                Glossary
              </Link>
              <div className={cn("my-2 border-t", isDark ? "border-white/10" : "border-slate-200")} />
              <Link
                href="/jourdanlabs"
                className={cn(
                  "block px-4 py-2 text-sm transition-colors",
                  isDark ? "hover:bg-white/10 text-slate-200 hover:text-white" : "hover:bg-slate-50 text-slate-700"
                )}
              >
                JourdanLabs
              </Link>
            </div>
          </div>

          <Link
            href="/pricing"
            className={cn(
              "rounded-full px-3 py-2 text-sm transition-colors",
              isDark
                ? "text-slate-200 hover:bg-white/10 hover:text-white"
                : "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
            )}
          >
            Pricing
          </Link>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <Link
            href={CTA_LINK}
            className={cn(
              "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              isDark
                ? "border-sky-400/40 bg-sky-500/10 text-sky-100 hover:bg-sky-500/20"
                : "border-sky-200 bg-sky-50 text-sky-700 hover:bg-sky-100"
            )}
          >
            <span>Book a Call</span>
            <span aria-hidden>↗</span>
          </Link>

          {/* Mobile toggle */}
          <button
            type="button"
            className={cn(
              "md:hidden rounded-full border px-3 py-2 text-sm transition-colors",
              isDark
                ? "border-white/10 bg-white/5 text-slate-100 hover:bg-white/10"
                : "border-slate-200 bg-white text-slate-900 hover:bg-slate-50"
            )}
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
          >
            Menu
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className={cn("md:hidden mx-auto w-full max-w-6xl px-4 pb-5", isDark ? "text-slate-100" : "text-slate-900")}>
          <div
            className={cn(
              "rounded-2xl border p-4 grid gap-2",
              isDark ? "border-white/10 bg-slate-950/70" : "border-slate-200 bg-white"
            )}
          >
            <Link
              className={cn(
                "py-2 rounded-full px-3 text-sm transition-colors",
                isDark ? "text-slate-200 hover:bg-white/10 hover:text-white" : "text-slate-700 hover:bg-slate-100"
              )}
              href="/what-we-build"
              onClick={() => setMobileOpen(false)}
            >
              What We Build
            </Link>
            <Link
              className={cn(
                "py-2 rounded-full px-3 text-sm transition-colors",
                isDark ? "text-slate-200 hover:bg-white/10 hover:text-white" : "text-slate-700 hover:bg-slate-100"
              )}
              href="/case-work"
              onClick={() => setMobileOpen(false)}
            >
              Work
            </Link>
            <Link
              className={cn(
                "py-2 rounded-full px-3 text-sm transition-colors",
                isDark ? "text-slate-200 hover:bg-white/10 hover:text-white" : "text-slate-700 hover:bg-slate-100"
              )}
              href="/how-we-work"
              onClick={() => setMobileOpen(false)}
            >
              How We Work
            </Link>
            <Link
              className={cn(
                "py-2 rounded-full px-3 text-sm transition-colors",
                isDark ? "text-slate-200 hover:bg-white/10 hover:text-white" : "text-slate-700 hover:bg-slate-100"
              )}
              href="/pricing"
              onClick={() => setMobileOpen(false)}
            >
              Pricing
            </Link>
            <Link
              className={cn(
                "py-2 rounded-full px-3 text-sm transition-colors",
                isDark ? "text-slate-200 hover:bg-white/10 hover:text-white" : "text-slate-700 hover:bg-slate-100"
              )}
              href="/jourdanlabs"
              onClick={() => setMobileOpen(false)}
            >
              JourdanLabs
            </Link>
            <Link
              className={cn(
                "py-2 rounded-full px-3 text-sm transition-colors",
                isDark ? "text-slate-200 hover:bg-white/10 hover:text-white" : "text-slate-700 hover:bg-slate-100"
              )}
              href="/contact"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
