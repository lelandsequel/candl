import { Container } from "./Container";
import { SectionKicker } from "@/components/ui/design-system";
import { Button } from "./Button";

export function CtaBlock({
  kicker = "Ready to get started?",
  title,
  description,
  ctaText,
  ctaHref,
}: {
  kicker?: string;
  title: string;
  description?: string;
  ctaText: string;
  ctaHref: string;
}) {
  return (
    <section className="bg-[#0B1121] py-24 border-t border-slate-800/50">
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          <SectionKicker>{kicker}</SectionKicker>
          <h2 className="mt-4 text-3xl font-semibold text-slate-50 md:text-5xl">{title}</h2>
          {description && (
            <p className="mt-6 text-lg leading-relaxed text-slate-300">{description}</p>
          )}
          <div className="mt-10 flex justify-center">
            <Button href={ctaHref}>{ctaText}</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
