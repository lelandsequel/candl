import Link from "next/link";
import { Container } from "./Container";
import { SectionKicker } from "@/components/ui/design-system";

export function RelatedLinks({
  links,
  title = "Related Resources",
}: {
  links: { slug: string; title: string; category: string }[];
  title?: string;
}) {
  if (!links || links.length === 0) return null;

  return (
    <section className="bg-[#070A12] py-24 border-t border-slate-900">
      <Container>
        <SectionKicker>Explore More</SectionKicker>
        <h2 className="mt-3 text-2xl font-semibold text-slate-50">{title}</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <Link
              key={link.slug}
              href={`/${link.category}/${link.slug}`}
              className="block rounded-xl border border-slate-800 bg-slate-950/40 p-4 hover:border-slate-700 transition-colors"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-sky-400">
                {link.category}
              </span>
              <h3 className="mt-2 text-base font-semibold text-slate-50">{link.title}</h3>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
