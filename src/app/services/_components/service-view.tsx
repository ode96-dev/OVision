"use client";

import Reveal from "@/components/reveal/reveal";
import Slash from "@/components/slash/slash";
import SmoothScrollProvider from "@/components/smooth-scroll-provider/smooth-scroll-provider";
import React, { useState } from "react";
import { HERO_FACTS, PILLARS, ServiceDetail } from "../_data/data";
import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import { ContactModal } from "@/components/contact/contact-modal";

const pad = (n: number) => String(n).padStart(2, "0");

const ServiceView = ({ services }: { services: ServiceDetail[] }) => {
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
                  Full-Spectrum Digital Engineering Solutions
                </h1>
              </Reveal>

              <Reveal delay={0.1} className="max-w-md space-y-5">
                <p className="text-sm md:text-base text-[#0B2818]/70 leading-relaxed font-medium">
                  From high-concurrency cloud backends to immersive 3D eCommerce
                  storefronts, our multidisciplinary teams architect systems
                  that scale with your ambition.
                </p>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-widest text-[#0B2818]/60">
                  {HERO_FACTS.map((fact, i) => (
                    <React.Fragment key={fact}>
                      {i > 0 && (
                        <span aria-hidden className="text-[#0A2618]/25">
                          /
                        </span>
                      )}
                      <span>{fact}</span>
                    </React.Fragment>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>

          <section className="py-16 px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Reveal
                  key={service.slug}
                  delay={(index % 2) * 0.1}
                  className="h-full"
                >
                  <article className="group flex h-full flex-col rounded-md border border-[#0A2618]/15 bg-white p-2.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgba(11,40,24,0.45)]">
                    <div className="relative aspect-video w-full overflow-hidden rounded-md bg-[#0A2618]/10">
                      <Image
                        src={service.heroImage}
                        alt={service.title}
                        fill
                        sizes="(min-width: 768px) 45vw, 100vw"
                        referrerPolicy="no-referrer"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>

                    <div className="flex flex-1 flex-col justify-between gap-8 p-6 md:p-8">
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#0B2818]">
                            {service.title}
                          </h2>
                          <p className="text-sm text-[#0B2818]/70 leading-relaxed font-medium">
                            {service.subtitle}
                          </p>
                        </div>

                        <div className="space-y-3">
                          <span className="block font-mono text-[10px] uppercase tracking-widest text-[#0A2618]/45">
                            Primary Deliverables
                          </span>
                          <ul className="divide-y divide-[#0A2618]/10 border-y border-[#0A2618]/10">
                            {service.deliverables.slice(0, 3).map((d) => (
                              <li
                                key={d}
                                className="flex items-start gap-3 py-3 text-sm font-medium text-[#0B2818]/80"
                              >
                                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0084FF]/10 text-[#0084FF]">
                                  <Check size={12} strokeWidth={3} />
                                </span>
                                <span>{d}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center justify-center gap-4">
                        <Link
                          href={`/services/${service.slug}`}
                          className="group/btn inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#0B2818] hover:bg-[#0D3B24] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0084FF]"
                        >
                          <span>Explore Service</span>
                          <div className="w-5 h-5 rounded-full bg-white/20 group-hover/btn:bg-white text-white group-hover/btn:text-[#0B2818] flex items-center justify-center transition-colors">
                            <ArrowUpRight
                              size={13}
                              strokeWidth={2.5}
                              className="transition-transform duration-300 group-hover/btn:translate-x-px group-hover/btn:-translate-y-px"
                            />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          <section className="py-16 px-6 md:px-12">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl bg-[#0D3B24] p-8 md:p-14 text-white shadow-[0_30px_60px_-30px_rgba(11,40,24,0.55)] space-y-12">
                <Slash className="-right-6 -bottom-32 text-[26rem] text-white/4" />

                <div className="relative z-10 max-w-3xl space-y-4">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight">
                    Built on Relentless Technical Discipline
                  </h2>
                  <p className="text-sm md:text-base text-white/75 leading-relaxed font-normal">
                    We reject bloated templates and fragile abstractions. Every
                    application is handcrafted with strict type-safety, verified
                    performance budgets, and observable cloud runtimes.
                  </p>
                </div>

                <div className="relative z-10 overflow-hidden rounded-2xl border border-white/10">
                  <div className="-mb-px -mr-px grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {PILLARS.map(({ icon: Icon, title, body }, i) => (
                      <div
                        key={title}
                        className="group space-y-4 border-b border-r border-white/10 p-6 transition-colors duration-300 hover:bg-white/5"
                      >
                        <div className="flex items-start justify-between">
                          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-[#4EBD68] transition-colors duration-300 group-hover:border-white group-hover:bg-white group-hover:text-[#0D3B24]">
                            <Icon size={20} />
                          </span>
                          <span className="font-mono text-xs text-white/35">
                            {pad(i + 1)}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold tracking-tight text-white">
                          {title}
                        </h3>
                        <p className="text-sm text-white/65 leading-relaxed">
                          {body}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
                  <p className="text-sm text-white/80">
                    Ready to scope your engineering engagement with our
                    technical leads?
                  </p>
                  <button
                    type="button"
                    onClick={() => setContactOpen(true)}
                    className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white hover:bg-[#4EBD68] text-[#0B2818] text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4EBD68]"
                  >
                    <span>Schedule Technical Consultation</span>
                    <div className="w-5 h-5 rounded-full bg-[#0B2818]/10 group-hover:bg-[#0B2818] text-[#0B2818] group-hover:text-white flex items-center justify-center transition-colors">
                      <ArrowUpRight size={13} strokeWidth={2.5} />
                    </div>
                  </button>
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
};

export default ServiceView;
