"use client";

import Slash from "@/components/slash/slash";
import SmoothScrollProvider from "@/components/smooth-scroll-provider/smooth-scroll-provider";
import { ProjectItem } from "@/lib/agency-logic";
import React, { useState } from "react";
import Reveal from "./reveal";
import { FLAGSHIP_STUDY, HERO_FACTS, METRICS, OUTCOMES } from "../_data/data";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { AnimatedGrid } from "./animated-grid";
import { ProjectDetailModal } from "@/components/project-detail-modal/project-detail-modal";
import { ContactModal } from "@/components/contact/contact-modal";

const pad = (n: number) => String(n).padStart(2, "0");

const PortfolioView = () => {
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null,
  );

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
                  Engineered with Craft. Proven in Production.
                </h1>
              </Reveal>

              <Reveal delay={0.1} className="max-w-md space-y-5">
                <p className="text-sm md:text-base text-[#0B2818]/70 leading-relaxed font-medium">
                  Explore our curated archive of enterprise web platforms,
                  headless commerce flagships, and high-frequency mobile
                  applications shipped for global innovators.
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
            <Reveal className="flex items-end justify-between gap-6 mb-10">
              <div className="space-y-3">
                <h2 className="text-3xl sm:text-4xl font-normal text-[#0B2818] tracking-tight">
                  Spotlight: Aura Botanica Digital Atelier
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setSelectedProject(FLAGSHIP_STUDY)}
                className="group hidden sm:inline-flex shrink-0 items-center gap-3 text-xs font-bold uppercase tracking-wider text-[#0B2818] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0084FF]"
              >
                <span>Read Full Case Study</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#0A2618]/25 transition-colors duration-300 group-hover:border-[#0B2818] group-hover:bg-[#0B2818] group-hover:text-white">
                  <ArrowUpRight size={15} strokeWidth={2.5} />
                </span>
              </button>
            </Reveal>

            <Reveal>
              <article className="group grid grid-cols-1 lg:grid-cols-12 items-stretch overflow-hidden rounded-md border border-[#0A2618]/15 bg-white">
                <div className="relative lg:col-span-7 min-h-95 lg:min-h-135 overflow-hidden bg-[#0A2618]/10">
                  <Image
                    src={FLAGSHIP_STUDY.image}
                    alt={FLAGSHIP_STUDY.title}
                    fill
                    priority
                    sizes="(min-width: 1024px) 58vw, 100vw"
                    referrerPolicy="no-referrer"
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-[#0B2818]/40 to-transparent"
                  />
                  <button
                    type="button"
                    onClick={() => setSelectedProject(FLAGSHIP_STUDY)}
                    aria-label="Open case study"
                    className="absolute inset-0 z-10 cursor-pointer focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-[#0084FF]"
                  >
                    <span className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#0B2818] shadow-lg opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0">
                      <ArrowUpRight size={18} strokeWidth={2.5} />
                    </span>
                  </button>
                </div>

                <div className="lg:col-span-5 flex flex-col justify-between gap-8 p-8 md:p-12">
                  <div className="space-y-6">
                    <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#0B2818] leading-snug">
                      {FLAGSHIP_STUDY.title}
                    </h3>

                    <dl className="grid grid-cols-2 divide-x divide-[#0A2618]/10 border-y border-[#0A2618]/10">
                      <div className="py-3 pr-4">
                        <dt className="font-mono text-[10px] uppercase tracking-widest text-[#0A2618]/45">
                          Client
                        </dt>
                        <dd className="mt-1 text-sm font-semibold text-[#0B2818]">
                          {FLAGSHIP_STUDY.client}
                        </dd>
                      </div>
                      <div className="py-3 pl-4">
                        <dt className="font-mono text-[10px] uppercase tracking-widest text-[#0A2618]/45">
                          Year
                        </dt>
                        <dd className="mt-1 text-sm font-semibold text-[#0B2818]">
                          {FLAGSHIP_STUDY.year}
                        </dd>
                      </div>
                    </dl>

                    <p className="text-sm md:text-base text-[#0B2818]/70 leading-relaxed font-medium">
                      {FLAGSHIP_STUDY.description}
                    </p>

                    <div className="space-y-3">
                      <span className="block font-mono text-[10px] uppercase tracking-widest text-[#0A2618]/45">
                        Measurable Business Outcomes
                      </span>
                      <ul className="divide-y divide-[#0A2618]/10 border-y border-[#0A2618]/10">
                        {OUTCOMES.map((outcome, i) => (
                          <li
                            key={outcome}
                            className="flex items-center gap-3 py-3 text-sm font-medium text-[#0B2818]/85"
                          >
                            <span className="font-mono text-[11px] text-[#0A2618]/35">
                              {pad(i + 1)}
                            </span>
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-5 pt-6 border-t border-[#0A2618]/10">
                    <div className="flex flex-wrap gap-2">
                      {FLAGSHIP_STUDY.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[#0A2618]/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#0B2818]/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          </section>

          <section className="py-16 px-6 md:px-12">
            <Reveal className="space-y-3 mb-12">
              <h2 className="text-4xl sm:text-5xl font-normal text-[#0B2818] tracking-tight">
                Selected Works
              </h2>
              <p className="text-sm md:text-base text-[#0B2818]/70 max-w-xl leading-relaxed font-medium">
                Filter by technical discipline to explore real architectures,
                technology stacks, and engineering benchmarks.
              </p>
            </Reveal>

            <Reveal>
              <AnimatedGrid
                onSelectProject={(project) => setSelectedProject(project)}
              />
            </Reveal>
          </section>
        </main>

        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

        <ContactModal
          isOpen={contactOpen}
          onClose={() => setContactOpen(false)}
        />
      </div>
    </SmoothScrollProvider>
  );
};

export default PortfolioView;
