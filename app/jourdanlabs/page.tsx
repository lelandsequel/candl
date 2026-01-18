import Link from "next/link";
import { LINKS } from "../links";

export default function JourdanLabsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight">JourdanLabs</h1>
      <p className="mt-4 text-lg opacity-80 max-w-2xl">
        A living portfolio of systems, case studies, and product experiments.
        We're consolidating old links and rebuilding the best pieces into a clean, navigable hub.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <Link className="rounded-2xl border p-6 hover:opacity-90" href={LINKS.caseStudies}>
          <div className="text-xl font-semibold">Case Studies</div>
          <div className="mt-2 opacity-80">Proof, outcomes, and what we built.</div>
        </Link>

        <Link className="rounded-2xl border p-6 hover:opacity-90" href={LINKS.labs}>
          <div className="text-xl font-semibold">Labs</div>
          <div className="mt-2 opacity-80">Tools, experiments, and engines.</div>
        </Link>

        <Link className="rounded-2xl border p-6 hover:opacity-90" href={LINKS.apps}>
          <div className="text-xl font-semibold">Apps</div>
          <div className="mt-2 opacity-80">Deployed demos & prototypes.</div>
        </Link>

        <Link className="rounded-2xl border p-6 hover:opacity-90" href={LINKS.home}>
          <div className="text-xl font-semibold">Back to C&amp;L</div>
          <div className="mt-2 opacity-80">Services, case work, contact.</div>
        </Link>
      </div>
    </main>
  );
}
