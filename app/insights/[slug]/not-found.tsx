import Link from "next/link";
import { Section } from "@/components/site/Section";
import { Button } from "@/components/site/Button";

export default function NotFound() {
  return (
    <main className="flex-1 w-full">
      <Section className="bg-[#070A12] border-t border-slate-900">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl font-semibold text-slate-50">Insight Not Found</h1>
          <p className="mt-4 text-slate-300">
            The insight page you're looking for doesn't exist or has been moved.
          </p>
          <div className="mt-8">
            <Button href="/insights">View All Insights</Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
