import Link from "next/link";
import Image from "next/image";
import { cn } from "./ui/design-system";

export const CONTACT_EMAIL = "hello@cl-strategy.com";
export const CTA_LINK = `mailto:${CONTACT_EMAIL}?subject=C%26L%20Strategy%20Intro`;

export default function Navigation() {
    return (
        <header className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-6 md:px-6 lg:px-8">
            <Link href="/" className="flex items-center gap-3 group">
                <div className="relative h-10 w-10 transition-transform group-hover:scale-105">
                    <Image
                        src="/logo-new.png"
                        alt="C&L Strategy Logo"
                        fill
                        className="object-contain"
                    />
                </div>
                <div>
                    <p className="text-sm font-semibold tracking-tight text-slate-50">
                        C&L Strategy
                    </p>
                    <p className="text-xs text-slate-400">
                        Operator-led consulting & systems design
                    </p>
                </div>
            </Link>

            <nav className="hidden items-center gap-2 md:flex">
                <Link
                    href="/what-we-build"
                    className="rounded-full px-3 py-2 text-sm text-slate-300 hover:bg-slate-900/60 hover:text-slate-100 transition-colors"
                >
                    What We Build
                </Link>
                <Link
                    href="/how-we-work"
                    className="rounded-full px-3 py-2 text-sm text-slate-300 hover:bg-slate-900/60 hover:text-slate-100 transition-colors"
                >
                    How We Work
                </Link>
                <Link
                    href="/digital"
                    className="rounded-full px-3 py-2 text-sm text-slate-300 hover:bg-slate-900/60 hover:text-slate-100 transition-colors"
                >
                    Digital
                </Link>
                <Link
                    href="/case-work"
                    className="rounded-full px-3 py-2 text-sm text-slate-300 hover:bg-slate-900/60 hover:text-slate-100 transition-colors"
                >
                    Case Work
                </Link>
                <Link
                    href="/construction"
                    className="rounded-full px-3 py-2 text-sm text-slate-300 hover:bg-slate-900/60 hover:text-slate-100 transition-colors"
                >
                    Construction
                </Link>
                <Link
                    href="/fractional"
                    className="rounded-full px-3 py-2 text-sm text-slate-300 hover:bg-slate-900/60 hover:text-slate-100 transition-colors"
                >
                    Fractional
                </Link>
                <Link
                    href="/about"
                    className="rounded-full px-3 py-2 text-sm text-slate-300 hover:bg-slate-900/60 hover:text-slate-100 transition-colors"
                >
                    About
                </Link>
            </nav>

            <div className="flex items-center gap-2">
                <a
                    href={CTA_LINK}
                    className={cn(
                        "inline-flex items-center gap-2 rounded-full border border-sky-400/60 bg-sky-400/10 px-4 py-2 text-sm font-medium text-sky-100",
                        "hover:bg-sky-400/20 transition-colors"
                    )}
                >
                    <span>Contact</span>
                    <span aria-hidden>↗</span>
                </a>
            </div>
        </header>
    );
}
