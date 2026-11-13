"use client";
import { AboutSection } from "@/components/about-section/about-section";
import { ContactModal } from "@/components/contact/contact-modal";
import { HeroSection } from "@/components/hero-section/hero-section";
import { Navbar } from "@/components/navbar/navbar";
import { ProjectDetailModal } from "@/components/project-detail-modal/project-detail-modal";
import { ServicesSection } from "@/components/services-section/services-section";
import { PinnedShowcase } from "@/components/showcase/showcase";
import SmoothScrollProvider from "@/components/smooth-scroll-provider/smooth-scroll-provider";
import { TestimonialsSection } from "@/components/testimonial/testimonial";
import { ProjectItem } from "@/lib/agency-logic";
import { useState } from "react";

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null,
  );

  return (
    <SmoothScrollProvider>
      <div className="relative min-h-screen bg-[#EAECE6] text-[#111827] overflow-x-hidden selection:bg-[#0084FF] selection:text-white">
        <div className="fixed inset-0 grid-blueprint pointer-events-none opacity-40 z-0" />
        <Navbar onOpenContact={() => setContactOpen(true)} />

        <main className="relative z-10">
          <HeroSection onExploreMore={() => setContactOpen(true)} />

          <AboutSection />

          <ServicesSection onExploreServices={() => setContactOpen(true)} />

          <PinnedShowcase
            onSelectProject={(project) => setSelectedProject(project)}
          />

          <TestimonialsSection />
        </main>

        <ContactModal
          isOpen={contactOpen}
          onClose={() => setContactOpen(false)}
        />

        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </SmoothScrollProvider>
  );
}
