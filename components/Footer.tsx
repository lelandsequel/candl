import { CONTACT_EMAIL } from "./Navigation";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative border-t border-cyan-500/10 bg-[#0a0a0f] overflow-hidden">
            {/* Grid background */}
            <div className="absolute inset-0 grid-bg opacity-20" />

            {/* Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full bg-cyan-500/5 blur-[80px]" />

            <div className="relative mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 px-4 py-12 text-xs md:flex-row md:items-center md:px-6 lg:px-8">
                <div>
                    <p className="text-slate-400">© {new Date().getFullYear()} C&L Strategy</p>
                    <p className="mt-1 text-slate-500">Operator-led consulting & systems design.</p>
                </div>
                <div className="flex flex-wrap gap-4">
                    <Link href="/what-we-build" className="text-sm text-slate-400 hover:text-cyan-300 transition-colors">
                        Build
                    </Link>
                    <Link href="/how-we-work" className="text-sm text-slate-400 hover:text-cyan-300 transition-colors">
                        Work
                    </Link>
                    <Link href="/case-work" className="text-sm text-slate-400 hover:text-cyan-300 transition-colors">
                        Cases
                    </Link>
                    <Link href="/construction" className="text-sm text-slate-400 hover:text-cyan-300 transition-colors">
                        Construction
                    </Link>
                    <Link href="/about" className="text-sm text-slate-400 hover:text-cyan-300 transition-colors">
                        About
                    </Link>
                </div>
                <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-2 text-sm text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-all"
                >
                    <span>{CONTACT_EMAIL}</span>
                </a>
            </div>
        </footer>
    );
}
