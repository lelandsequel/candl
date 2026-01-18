"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "./ui/design-system";
import { useState } from "react";

export const CONTACT_EMAIL = "hello@cl-strategy.com";
export const CTA_LINK = `/about`; // Book a Call links to /about for now

export default function Navigation() {
    const [servicesOpen, setServicesOpen] = useState(false);
    const [solutionsOpen, setSolutionsOpen] = useState(false);

    return (
        <header className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-6 md:px-6 lg:px-8 relative">
            <Link href="/" className="flex items-center gap-3 group">
                <div className="relative h-20 w-20 transition-transform group-hover:scale-105">
                    <Image
                        src="/logo-new.png"
                        alt="C&L Strategy Logo"
                        fill
                        className="object-contain"
                    />
                </div>
                <div>
                    <p className="text-sm font-semibold tracking-tight text-slate-900">
                        C&L Strategy
                    </p>
                    <p className="text-xs text-slate-500">
                        Operator-led consulting & systems design
                    </p>
                </div>
            </Link>

            <nav className="hidden items-center gap-2 md:flex">
                {/* Services Dropdown */}
                <div
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                >
                    <button className="rounded-full px-3 py-2 text-sm text-slate-600 hover:bg-slate-200/60 hover:text-slate-900 transition-colors">
                        Services
                    </button>
                    {servicesOpen && (
                        <div className="absolute top-full left-0 mt-2 w-48 rounded-lg border border-slate-200 bg-white shadow-lg py-2 z-50">
                            <Link
                                href="/digital"
                                className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
                            >
                                Digital Growth
                            </Link>
                            <Link
                                href="/fractional"
                                className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
                            >
                                Fractional Ops
                            </Link>
                            <Link
                                href="/construction"
                                className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
                            >
                                Construction Ops
                            </Link>
                        </div>
                    )}
                </div>

                <Link
                    href="/case-work"
                    className="rounded-full px-3 py-2 text-sm text-slate-600 hover:bg-slate-200/60 hover:text-slate-900 transition-colors"
                >
                    Work
                </Link>
                <Link
                    href="/how-we-work"
                    className="rounded-full px-3 py-2 text-sm text-slate-600 hover:bg-slate-200/60 hover:text-slate-900 transition-colors"
                >
                    How We Work
                </Link>
                <Link
                    href="/about"
                    className="rounded-full px-3 py-2 text-sm text-slate-600 hover:bg-slate-200/60 hover:text-slate-900 transition-colors"
                >
                    About
                </Link>

                {/* Solutions Hub Dropdown */}
                <div
                    className="relative"
                    onMouseEnter={() => setSolutionsOpen(true)}
                    onMouseLeave={() => setSolutionsOpen(false)}
                >
                    <button className="rounded-full px-3 py-2 text-sm text-slate-600 hover:bg-slate-200/60 hover:text-slate-900 transition-colors">
                        Resources
                    </button>
                    {solutionsOpen && (
                        <div className="absolute top-full left-0 mt-2 w-56 rounded-lg border border-slate-200 bg-white shadow-lg py-2 z-50">
                            <Link
                                href="/solutions"
                                className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
                            >
                                Solutions
                            </Link>
                            <Link
                                href="/industries"
                                className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
                            >
                                Industries
                            </Link>
                            <Link
                                href="/locations"
                                className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
                            >
                                Locations
                            </Link>
                            <Link
                                href="/insights"
                                className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
                            >
                                Insights
                            </Link>
                            <Link
                                href="/templates"
                                className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
                            >
                                Templates
                            </Link>
                            <Link
                                href="/compare"
                                className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
                            >
                                Compare
                            </Link>
                            <Link
                                href="/glossary"
                                className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
                            >
                                Glossary
                            </Link>
                        </div>
                    )}
                </div>
                <Link
                    href="/pricing"
                    className="rounded-full px-3 py-2 text-sm text-slate-600 hover:bg-slate-200/60 hover:text-slate-900 transition-colors"
                >
                    Pricing
                </Link>
            </nav>

            <div className="flex items-center gap-2">
                <Link
                    href={CTA_LINK}
                    className={cn(
                        "inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-medium text-sky-700",
                        "hover:bg-sky-100 transition-colors"
                    )}
                >
                    <span>Book a Call</span>
                    <span aria-hidden>↗</span>
                </Link>
            </div>
        </header>
    );
}
