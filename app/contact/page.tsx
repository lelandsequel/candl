import { Metadata } from "next";
import { Section } from "@/components/site/Section";
import { SectionKicker } from "@/components/ui/design-system";
import { CONTACT_EMAIL } from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Contact Us | C&L Strategy",
  description: "Get in touch with C&L Strategy. Discuss your project, get a quote, or ask questions.",
};

export default function ContactPage() {
  return (
    <main className="flex-1 w-full">
      <Section className="bg-[#070A12] border-t border-slate-900">
        <SectionKicker>Contact</SectionKicker>
        <h1 className="mt-3 text-3xl font-semibold text-slate-50 md:text-5xl">
          Get in Touch
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 md:text-lg">
          Ready to discuss your project? Get in touch and we'll respond within 24 hours.
        </p>
      </Section>

      <Section className="bg-[#0B1121] border-t border-slate-800">
        <div className="max-w-2xl mx-auto">
          <form
            action={`mailto:${CONTACT_EMAIL}`}
            method="post"
            encType="text/plain"
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full rounded-lg border border-slate-700 bg-slate-900/50 px-4 py-3 text-slate-100 placeholder-slate-500 focus:border-sky-500 focus:outline-none"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full rounded-lg border border-slate-700 bg-slate-900/50 px-4 py-3 text-slate-100 placeholder-slate-500 focus:border-sky-500 focus:outline-none"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full rounded-lg border border-slate-700 bg-slate-900/50 px-4 py-3 text-slate-100 placeholder-slate-500 focus:border-sky-500 focus:outline-none"
                placeholder="Your company"
              />
            </div>

            <div>
              <label htmlFor="need" className="block text-sm font-medium text-slate-300 mb-2">
                What do you need?
              </label>
              <textarea
                id="need"
                name="need"
                rows={4}
                required
                className="w-full rounded-lg border border-slate-700 bg-slate-900/50 px-4 py-3 text-slate-100 placeholder-slate-500 focus:border-sky-500 focus:outline-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-slate-300 mb-2">
                Budget Range
              </label>
              <select
                id="budget"
                name="budget"
                className="w-full rounded-lg border border-slate-700 bg-slate-900/50 px-4 py-3 text-slate-100 focus:border-sky-500 focus:outline-none"
              >
                <option value="">Select a range</option>
                <option value="under-10k">Under $10,000</option>
                <option value="10k-25k">$10,000 - $25,000</option>
                <option value="25k-50k">$25,000 - $50,000</option>
                <option value="50k-100k">$50,000 - $100,000</option>
                <option value="100k-plus">$100,000+</option>
              </select>
            </div>

            <div>
              <button
                type="submit"
                className="w-full rounded-full border border-sky-500/50 bg-sky-500/10 px-8 py-4 text-sm font-medium text-sky-100 hover:bg-sky-500/20 transition-colors shadow-lg shadow-sky-900/20"
              >
                Send Message
              </button>
            </div>
          </form>

          <div className="mt-8 pt-8 border-t border-slate-800">
            <p className="text-sm text-slate-400 text-center">
              Or email us directly at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-sky-400 hover:text-sky-300">
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
}
