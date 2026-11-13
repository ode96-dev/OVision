"use client";
import { ContactModal } from "@/components/contact/contact-modal";
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

        <ContactModal
          isOpen={contactOpen}
          onClose={() => setContactOpen(false)}
        />
      </div>
    </SmoothScrollProvider>
  );
}
