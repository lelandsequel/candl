import { CONTACT_EMAIL } from "./Navigation";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-slate-800/50 bg-[#070A12]">
            <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-3 px-4 py-8 text-xs text-slate-500 md:flex-row md:items-center md:px-6 lg:px-8">
                <p>© {new Date().getFullYear()} C&L Strategy. Operator-led consulting & systems design.</p>
                <div className="flex flex-wrap gap-3">
                    <Link href="/what-we-build" className="text-sm text-slate-400 hover:text-slate-200">
                        Build
                    </Link>
                    <Link href="/how-we-work" className="text-sm text-slate-400 hover:text-slate-200">
                        Work
                    </Link>
                    <Link href="/case-work" className="text-sm text-slate-400 hover:text-slate-200">
                        Cases
                    </Link>
                    <Link href="/construction" className="text-sm text-slate-400 hover:text-slate-200">
                        Construction
                    </Link>
                    <Link href="/about" className="text-sm text-slate-400 hover:text-slate-200">
                        About
                    </Link>
                </div>
            </div>
        </footer>
    );
}

