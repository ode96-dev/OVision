"use client";
import { AboutSection } from "@/components/about-section/about-section";
import { ContactModal } from "@/components/contact/contact-modal";
import { HeroSection } from "@/components/hero-section/hero-section";
import { Navbar } from "@/components/navbar/navbar";
import SmoothScrollProvider from "@/components/smooth-scroll-provider/smooth-scroll-provider";
import { useState } from "react";

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <SmoothScrollProvider>
      <div className="relative min-h-screen bg-[#EAECE6] text-[#111827] overflow-x-hidden selection:bg-[#0084FF] selection:text-white">
        <div className="fixed inset-0 grid-blueprint pointer-events-none opacity-40 z-0" />
        <Navbar onOpenContact={() => setContactOpen(true)} />

        <main className="relative z-10">
          <HeroSection onExploreMore={() => setContactOpen(true)} />
          <AboutSection />
        </main>

        <ContactModal
          isOpen={contactOpen}
          onClose={() => setContactOpen(false)}
        />
      </div>
    </SmoothScrollProvider>
  );
}
