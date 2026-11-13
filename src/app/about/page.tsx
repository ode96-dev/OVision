"use client";

import React, { useState } from "react";
import { MapPin } from "lucide-react";
import SmoothScrollProvider from "@/components/smooth-scroll-provider/smooth-scroll-provider";
import { SpringTiltCard } from "@/components/magnetic-button/magnetic-button";
import { ContactModal } from "@/components/contact/contact-modal";
import { CLIENTS, HUBS, LOCATIONS, METRICS, TENETS } from "./_data/data";
import Reveal from "./_components/reveal";
import Slash from "./_components/slash";
import PhotoFrame from "./_components/photo-frame";

export default function AboutPage() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <SmoothScrollProvider>
      <div className="relative min-h-screen bg-[#EAECE6] text-[#0B2818] overflow-x-hidden selection:bg-[#0084FF] selection:text-white">
        <div className="fixed inset-0 grid-blueprint pointer-events-none opacity-40 z-0" />

        <main className="relative z-10 max-w-360 mx-auto border-x border-[#0A2618]/10 bg-[#EAECE6]">
          <section className="relative overflow-hidden pt-16 pb-16 px-6 md:px-12 border-b border-[#0A2618]/10">
            <Slash className="-right-10 -top-24 text-[34rem] text-[#0A2618]/4" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
              <Reveal className="space-y-4 max-w-3xl">
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#0B2818] leading-[1.05]">
                  We Bridge Creative Vision and Systems Engineering.
                </h1>
              </Reveal>

              <Reveal delay={0.1} className="max-w-md space-y-5">
                <p className="text-sm md:text-base text-[#0B2818]/70 leading-relaxed font-medium">
                  Founded in 2009, OVision is an independent digital studio of
                  senior architects, designers, and creative engineers crafting
                  world-class digital experiences for global enterprises.
                </p>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-widest text-[#0B2818]/60">
                  {LOCATIONS.map((place, i) => (
                    <React.Fragment key={place}>
                      {i > 0 && (
                        <span aria-hidden className="text-[#0A2618]/25">
                          /
                        </span>
                      )}
                      <span>{place}</span>
                    </React.Fragment>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.15} className="relative z-10 mt-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-3xl border border-[#0A2618]/15 bg-[#0A2618]/10">
                {METRICS.map((metric) => (
                  <div
                    key={metric.label}
                    className="space-y-2 bg-[#EAECE6] p-6 md:p-8 transition-colors duration-300 hover:bg-white"
                  >
                    <span
                      className={`block text-4xl md:text-5xl font-normal tracking-tight tabular-nums ${metric.tone}`}
                    >
                      {metric.value}
                    </span>
                    <span className="block font-mono text-[10px] uppercase tracking-widest text-[#0A2618]/50">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </section>

          <section className="py-16 px-6 md:px-12 border-b border-[#0A2618]/10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <Reveal className="lg:col-span-6 space-y-6">
                <h2 className="text-4xl sm:text-5xl font-normal text-[#0B2818] tracking-tight">
                  Sixteen Years of Continuous Craft
                </h2>
                <div className="space-y-4 text-sm md:text-base text-[#0B2818]/70 leading-relaxed font-medium">
                  <p>
                    What started in 2009 as an experimental collective of
                    digital architects has matured into an internationally
                    recognized engineering studio. We believe software should be
                    as resilient under the hood as it is breathtaking on the
                    surface.
                  </p>
                  <p>
                    We maintain deliberately small, senior-only project squads.
                    When you collaborate with OVision, you work directly with
                    our lead architects—never an offshore layer or junior
                    handoff. This intimacy ensures clear decisions, zero
                    friction, and uncompromising execution.
                  </p>
                </div>

                <div className="pt-6 border-t border-[#0A2618]/10 space-y-4">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-[#0A2618]/50">
                    Trusted By Industry Leaders
                  </p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-base font-bold text-[#0B2818]/60">
                    {CLIENTS.map((client, i) => (
                      <React.Fragment key={client}>
                        {i > 0 && (
                          <span
                            aria-hidden
                            className="font-mono text-sm font-normal text-[#0A2618]/25"
                          >
                            /
                          </span>
                        )}
                        <span>{client}</span>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </Reveal>

              <div className="lg:col-span-6 grid grid-cols-2 gap-4 md:gap-6">
                <Reveal delay={0.1}>
                  <SpringTiltCard maxTilt={6}>
                    <PhotoFrame
                      src="/images/about_1.jpg"
                      alt="OVision Studio Environment"
                      sizes="(min-width: 1024px) 24vw, 45vw"
                    />
                  </SpringTiltCard>
                </Reveal>

                <Reveal delay={0.2}>
                  <SpringTiltCard maxTilt={6} className="mt-8">
                    <PhotoFrame
                      src="/images/team_meeting.jpg"
                      alt="Engineering Collaboration"
                      sizes="(min-width: 1024px) 24vw, 45vw"
                    />
                  </SpringTiltCard>
                </Reveal>
              </div>
            </div>
          </section>

          <section className="py-16 px-6 md:px-12 border-b border-[#0A2618]/10 bg-white">
            <Reveal className="space-y-3 mb-12">
              <h2 className="text-4xl sm:text-5xl font-normal text-[#0B2818] tracking-tight">
                Principles That Guide Every Commit
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {TENETS.map(({ title, body }, i) => (
                <Reveal key={title} delay={i * 0.08} className="h-full">
                  <div className="cursor-pointer group h-full space-y-4 rounded-md border border-[#0A2618]/85 bg-[#EAECE6]/72 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-[#EAECE6] hover:shadow-sm">
                    <h3 className="text-lg font-semibold tracking-tight text-[#0B2818]">
                      {title}
                    </h3>
                    <p className="text-sm text-[#0B2818]/70 leading-relaxed font-medium">
                      {body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          <section className="py-16 px-6 md:px-12">
            <Reveal>
              <div className="relative overflow-hidden rounded-md bg-[#0D3B24]/85 p-8 md:p-14 text-white shadow-sm space-y-8">
                <Slash className="-right-6 -bottom-32 text-[26rem] text-white/4" />

                <div className="relative z-10 max-w-2xl space-y-3">
                  <h3 className="text-3xl sm:text-4xl font-normal tracking-tight">
                    Collaborating with Clients Across 32 Countries
                  </h3>
                  <p className="text-sm md:text-base text-white/75 leading-relaxed font-normal">
                    With studios in Connecticut, Zurich, and Tokyo, our teams
                    operate across overlapping timezones to provide
                    round-the-clock delivery velocity.
                  </p>
                </div>

                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10 border-t border-white/10">
                  {HUBS.map((hub) => (
                    <div
                      key={hub.city}
                      className="space-y-3 py-6 sm:px-6 sm:first:pl-0 sm:last:pr-0"
                    >
                      <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#4EBD68]">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15">
                          <MapPin size={13} />
                        </span>
                        {hub.region}
                      </span>
                      <h4 className="text-xl font-normal tracking-tight text-white">
                        {hub.city}
                      </h4>
                      <p className="text-sm text-white/60">{hub.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </section>
        </main>

        <ContactModal
          isOpen={contactOpen}
          onClose={() => setContactOpen(false)}
        />
      </div>
    </SmoothScrollProvider>
  );
}
