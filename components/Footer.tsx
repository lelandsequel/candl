import { CONTACT_EMAIL } from "./Navigation";

export default function Footer() {
    return (
        <footer className="mt-auto flex flex-col items-start justify-between gap-3 border-t border-slate-800/50 pt-8 pb-8 text-xs text-slate-500 md:flex-row md:items-center">
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
        </footer>
    );
}
