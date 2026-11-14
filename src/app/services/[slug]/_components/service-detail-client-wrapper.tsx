"use client";

import React, { useState, useEffect } from "react";
import SmoothScrollProvider from "@/components/smooth-scroll-provider/smooth-scroll-provider";
import { ContactModal } from "@/components/contact/contact-modal";
import { ServiceDetail } from "../../_data/data";

export default function ServiceDetailClientWrapper({
  children,
}: {
  children: React.ReactNode;
  service: ServiceDetail;
}) {
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const handleButtonClick = (e: MouseEvent) => {
      if (
        e.target instanceof Element &&
        e.target.closest('[data-action="open-contact"]')
      ) {
        setContactOpen(true);
      }
    };
    document.addEventListener("click", handleButtonClick);
    return () => document.removeEventListener("click", handleButtonClick);
  }, []);

  return (
    <SmoothScrollProvider>
      <div className="relative min-h-screen bg-[#EAECE6] text-[#0B2818] overflow-x-hidden selection:bg-[#0084FF] selection:text-white">
        <div className="fixed inset-0 grid-blueprint pointer-events-none opacity-40 z-0" />

        {children}

        <ContactModal
          isOpen={contactOpen}
          onClose={() => setContactOpen(false)}
        />
      </div>
    </SmoothScrollProvider>
  );
}
