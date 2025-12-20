import { CONTACT_EMAIL } from "./Navigation";

export default function Footer() {
    return (
        <footer className="border-t border-slate-800/50 bg-[#070A12]">
            <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-3 px-4 py-8 text-xs text-slate-500 md:flex-row md:items-center md:px-6 lg:px-8">
                <p>© {new Date().getFullYear()} C&L Strategy. Operator-led consulting & systems design.</p>
                <div className="flex flex-wrap gap-3">
                    <a className="hover:text-slate-300" href={`mailto:${CONTACT_EMAIL}`}>
                        {CONTACT_EMAIL}
                    </a>
                    <span className="text-slate-700">·</span>
                    <a className="hover:text-slate-300" href="/what-we-build">
                        What we build
                    </a>
                    <span className="text-slate-700">·</span>
                    <a className="hover:text-slate-300" href="/about">
                        About
                    </a>
                </div>
            </div>
        </footer>
    );
}
