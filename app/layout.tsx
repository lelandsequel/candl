import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import Loader from "@/components/Loader";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "C&L Strategy — Operator-Led Consulting & Systems Design",
  description:
    "Operator-led consulting and systems design: process improvement, software architecture, supply chain, finance, accounting, and construction. Built in the field — shipped in production."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-slate-50 text-slate-900 antialiased">
        <Loader />
        <CustomCursor />
        <SmoothScroll>
          <Navigation />
          <main className="flex-1 w-full">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
