import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "C&L Strategy — Operator-Led Consulting & Systems Design",
  description:
    "Operator-led consulting and systems design: process improvement, software architecture, supply chain, finance, accounting, and construction. Built in the field — shipped in production."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-[#070A12] text-slate-100 antialiased pt-8 px-4 md:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
          <Navigation />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
