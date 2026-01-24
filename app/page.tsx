import Link from "next/link";
import { CTA_LINK, CONTACT_EMAIL } from "@/components/Navigation";
import { JsonLd } from "@/components/site/JsonLd";

export default function Page() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "C&L Strategy",
    description:
      "Operator-led consulting and systems design: process improvement, software architecture, supply chain, finance, accounting, and construction.",
    url: "https://cl-strategy.com",
    logo: "https://cl-strategy.com/logo-new.png",
    contactPoint: {
      "@type": "ContactPoint",
      email: CONTACT_EMAIL,
      contactType: "Customer Service",
    },
    sameAs: [],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "C&L Strategy",
    url: "https://cl-strategy.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://cl-strategy.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />

      <main className="bg-[#0a0a0a]">
        {/* HERO */}
        <section className="relative h-screen flex items-end pb-20 overflow-hidden">
          {/* Video */}
          <video
            src="/CL%20BG.mov"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ transform: "scale(1.1)" }}
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />

          <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6">
            <h1 className="text-[12vw] md:text-[8vw] font-bold text-white leading-[0.85] tracking-[-0.03em]">
              We build<br />
              <span className="text-[#00e5ff]">systems.</span>
            </h1>
            <p className="mt-8 text-xl md:text-2xl text-white/60 max-w-xl font-light">
              Operations. Process. Finance. Software.<br />
              Built to run, not to present.
            </p>
          </div>
        </section>

        {/* WHAT WE DO - Just text, no cards */}
        <section className="py-32 px-6">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-20">
              <div>
                <p className="text-[#00e5ff] text-sm tracking-[0.2em] uppercase mb-8">What we do</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
                  We fix operations by building the systems that should have existed in the first place.
                </h2>
              </div>
              <div className="lg:pt-20">
                <p className="text-xl text-white/50 leading-relaxed">
                  Most consultants hand you a deck and leave. We embed in your operation,
                  figure out what's actually broken, build the tools to fix it, and leave
                  you with something your team can run without us.
                </p>
                <p className="mt-6 text-xl text-white/50 leading-relaxed">
                  Process improvement. Software architecture. Financial controls.
                  Supply chain. Construction. Whatever it takes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES - Horizontal scroll feel */}
        <section className="py-20 border-t border-white/10">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-px bg-white/10">
              {[
                { title: "Operations", desc: "Process design, workflow systems, operational infrastructure", href: "/how-we-work" },
                { title: "Finance", desc: "Controls, reporting, capital project finance", href: "/about" },
                { title: "Construction", desc: "Site prep, GC, turnkey residential, government contracts", href: "/construction" },
                { title: "Digital", desc: "Websites as infrastructure, SEO OS™, search systems", href: "/digital" },
              ].map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group bg-[#0a0a0a] p-8 md:p-10 hover:bg-[#111] transition-colors"
                >
                  <h3 className="text-2xl font-semibold text-white group-hover:text-[#00e5ff] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-white/40 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="mt-8 text-white/20 group-hover:text-[#00e5ff] transition-colors">
                    →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* THE DIFFERENCE - Full bleed text */}
        <section className="py-32 px-6 bg-[#0c0c0c]">
          <div className="max-w-[900px] mx-auto">
            <p className="text-[#00e5ff] text-sm tracking-[0.2em] uppercase mb-8">The difference</p>
            <p className="text-3xl md:text-4xl text-white font-light leading-relaxed">
              We're not career consultants. We've run operations in oil fields,
              terminals, logistics networks, and construction sites. We've built
              the financial controls that keep companies from blowing up.
            </p>
            <p className="mt-8 text-3xl md:text-4xl text-white/40 font-light leading-relaxed">
              We might hand you a deck, but it comes with the system already built
              and the process already running.
            </p>
          </div>
        </section>

        {/* CASE LINK - Simple */}
        <section className="border-t border-white/10">
          <Link
            href="/case-work"
            className="group block py-20 px-6 hover:bg-[#111] transition-colors"
          >
            <div className="max-w-[1400px] mx-auto flex items-center justify-between">
              <div>
                <p className="text-white/40 text-sm uppercase tracking-wider mb-2">See the work</p>
                <p className="text-4xl md:text-5xl font-bold text-white group-hover:text-[#00e5ff] transition-colors">
                  Case Studies
                </p>
              </div>
              <div className="text-6xl text-white/20 group-hover:text-[#00e5ff] group-hover:translate-x-4 transition-all">
                →
              </div>
            </div>
          </Link>
        </section>

        {/* JOURDANLABS - The weird one */}
        <section className="py-32 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#0a0812]">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-violet-400 text-sm tracking-[0.2em] uppercase mb-4">Side project</p>
                <h2 className="text-4xl md:text-5xl font-bold text-white">JourdanLabs</h2>
                <p className="mt-6 text-xl text-white/50">
                  Experimental dashboards, internal tools, and open source projects.
                  Where we test ideas before they become client work.
                </p>
                <Link
                  href="/jourdanlabs"
                  className="inline-flex items-center gap-3 mt-8 text-violet-400 font-medium hover:text-violet-300 transition-colors group"
                >
                  <span>Explore the lab</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-violet-500/20 to-transparent border border-violet-500/20" />
            </div>
          </div>
        </section>

        {/* CTA - Dead simple */}
        <section className="py-40 px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-white max-w-4xl mx-auto leading-[1.1]">
            Got a mess that needs a system?
          </h2>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              href={CTA_LINK}
              className="px-10 py-5 bg-[#00e5ff] text-black font-semibold rounded-full hover:bg-[#00c8e0] transition-colors"
            >
              Let's talk
            </Link>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="px-10 py-5 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-colors"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
