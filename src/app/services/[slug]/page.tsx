import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import Reveal from "@/components/reveal/reveal";
import { getAllServices, getServiceBySlug } from "../_data/data";
import ServiceDetailClientWrapper from "./_components/service-detail-client-wrapper";
import Slash from "@/components/slash/slash";

const INVARIANTS = [
  "Strict TypeScript strict mode (no `any`)",
  "Automated continuous test suites in CI",
  "Comprehensive OpenAPI/GraphQL documentation",
];

export async function generateStaticParams() {
  const services = getAllServices();
  return services.map((s) => ({ slug: s.slug }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <ServiceDetailClientWrapper service={service}>
      <main className="relative z-10 max-w-360 mx-auto border-x border-[#0A2618]/10 bg-[#EAECE6]">
        <div className="pt-8 px-6 md:px-12 flex items-center justify-between gap-6">
          <Link
            href="/services"
            className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-[#0B2818]/70 transition-colors hover:text-[#0B2818] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0084FF]"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#0A2618]/25 transition-colors duration-300 group-hover:border-[#0B2818] group-hover:bg-[#0B2818] group-hover:text-white">
              <ArrowLeft
                size={15}
                strokeWidth={2.5}
                className="transition-transform duration-300 group-hover:-translate-x-px"
              />
            </span>
            <span>Back to All Services</span>
          </Link>
        </div>

        <section className="relative overflow-hidden pt-10 pb-16 px-6 md:px-12 border-b border-[#0A2618]/10">
          <Slash className="-right-10 -top-24 text-[34rem] text-[#0A2618]/4" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <Reveal className="lg:col-span-8 space-y-5">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#0B2818] leading-[1.05]">
                {service.title}
              </h1>
              <p className="text-base sm:text-lg text-[#0B2818]/70 leading-relaxed font-medium max-w-2xl">
                {service.subtitle}
              </p>
            </Reveal>

            <Reveal
              delay={0.1}
              className="lg:col-span-4 flex flex-col justify-end space-y-5"
            >
              <p className="text-sm md:text-base text-[#0B2818]/70 leading-relaxed font-medium">
                {service.description}
              </p>
              <div>
                <a
                  href="#contact-lead"
                  className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#0B2818] hover:bg-[#0D3B24] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0084FF]"
                >
                  <span>Request Proposal</span>
                  <div className="w-5 h-5 rounded-full bg-white/20 group-hover:bg-white text-white group-hover:text-[#0B2818] flex items-center justify-center transition-colors">
                    <ArrowUpRight
                      size={13}
                      strokeWidth={2.5}
                      className="transition-transform duration-300 group-hover:translate-x-px group-hover:-translate-y-px"
                    />
                  </div>
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="relative z-10 mt-12">
            <div className="overflow-hidden rounded-3xl border border-[#0A2618]/15">
              <div className="-mb-px -mr-px grid grid-cols-2 md:grid-flow-col md:grid-cols-none md:auto-cols-fr">
                {service.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="space-y-2 border-b border-r border-[#0A2618]/10 bg-[#EAECE6] p-6 transition-colors duration-300 hover:bg-white"
                  >
                    <span className="block text-3xl md:text-4xl font-normal tracking-tight tabular-nums text-[#0B2818]">
                      {m.value}
                    </span>
                    <span className="block font-mono text-[10px] uppercase tracking-widest text-[#0A2618]/50">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <section className="px-6 md:px-12 py-12">
          <Reveal>
            <div className="relative rounded-md p-2.5 md:p-2">
              <span
                aria-hidden
                className="absolute top-1 md:top-1.5 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-white/25"
              />
              <div className="relative aspect-video md:aspect-21/9 w-full overflow-hidden rounded-md bg-[#0A2618]/10">
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  fill
                  priority
                  sizes="(min-width: 1440px) 1296px, 100vw"
                  referrerPolicy="no-referrer"
                  className="object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-linear-to-t from-[#0B2818]/50 via-transparent to-transparent"
                />
              </div>
            </div>
          </Reveal>
        </section>

        <section className="py-12 px-6 md:px-12 border-b border-[#0A2618]/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-8">
              <Reveal className="space-y-3">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#0B2818] tracking-tight">
                  Comprehensive Project Scope
                </h2>
              </Reveal>

              <ul className="space-y-3">
                {service.deliverables.map((item, idx) => (
                  <li key={item}>
                    <Reveal delay={Math.min(idx, 4) * 0.05}>
                      <div className="group flex items-center gap-4 rounded-md border border-[#0A2618]/10 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0B2818]">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#0A2618]/15 text-[#0084FF] transition-colors duration-300 group-hover:border-[#0B2818] group-hover:bg-[#0B2818] group-hover:text-white">
                          <Check size={16} strokeWidth={2.5} />
                        </span>
                        <p className="flex-1 text-sm md:text-base font-semibold text-[#0B2818]">
                          {item}
                        </p>
                      </div>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>

            <Reveal delay={0.1} className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="space-y-6 rounded-md border border-[#0A2618]/15 bg-white p-8">
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-[#0B2818] tracking-tight">
                    Production-Proven Tech
                  </h3>
                  <p className="text-sm text-[#0B2818]/70 leading-relaxed font-medium">
                    Every library and framework is evaluated for long-term
                    maintainability, community governance, and runtime
                    performance.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {service.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[#0A2618]/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#0B2818]/70 transition-colors hover:border-[#0B2818] hover:bg-[#0B2818] hover:text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="space-y-3 border-t border-[#0A2618]/10 pt-6">
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-[#0A2618]/45">
                    Delivery Invariants
                  </span>
                  <ul className="space-y-2.5 text-sm font-medium text-[#0B2818]/80">
                    {INVARIANTS.map((invariant) => (
                      <li key={invariant} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4EBD68]" />
                        <span>{invariant}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="py-16 px-6 md:px-12 border-b border-[#0A2618]/10">
          <Reveal className="space-y-3 mb-12">
            <h2 className="text-3xl sm:text-5xl font-normal text-[#0B2818] tracking-tight">
              Our 4-Stage Delivery Pipeline
            </h2>
            <p className="text-sm md:text-base text-[#0B2818]/70 max-w-xl leading-relaxed font-medium">
              From architectural discovery to zero-downtime deployment, our
              process guarantees transparent visibility and uncompromising
              velocity.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.processSteps.map((s, i) => (
              <Reveal key={s.step} delay={i * 0.08} className="h-full">
                <article className="group h-full space-y-5 rounded-md border border-[#0A2618]/15 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgba(11,40,24,0.45)]">
                  <div className="flex items-start justify-between">
                    <span className="text-4xl font-normal tracking-tight tabular-nums text-[#0084FF]">
                      {s.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-[#0B2818]">
                    {s.title}
                  </h3>
                  <p className="text-sm text-[#0B2818]/70 leading-relaxed font-medium">
                    {s.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="py-16 px-6 md:px-12 border-b border-[#0A2618]/10">
          <Reveal className="space-y-3 mb-12">
            <h2 className="text-3xl sm:text-5xl font-normal text-[#0B2818] tracking-tight">
              Frequently Asked Questions
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.faqs.map((faq, i) => (
              <Reveal
                key={faq.question}
                delay={(i % 2) * 0.08}
                className="h-full"
              >
                <article className="h-full space-y-4 rounded-md border border-[#0A2618]/15 bg-white p-6 md:p-8 transition-shadow duration-300 hover:shadow-[0_24px_48px_-28px_rgba(11,40,24,0.35)]">
                  <div className="flex items-start gap-4">
                    <h4 className="text-lg font-semibold tracking-tight text-[#0B2818]">
                      {faq.question}
                    </h4>
                  </div>
                  <p className="border-t border-[#0A2618]/10 pt-4 text-sm md:text-base text-[#0B2818]/70 leading-relaxed font-medium">
                    {faq.answer}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="contact-lead" className="scroll-mt-24 py-16 px-6 md:px-12">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-[#0D3B24] p-8 md:p-14 text-white shadow-[0_30px_60px_-30px_rgba(11,40,24,0.55)] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <Slash className="-right-6 -bottom-32 text-[26rem] text-white/4" />

              <div className="relative z-10 space-y-4 max-w-xl">
                <h3 className="text-3xl sm:text-4xl font-normal tracking-tight">
                  Ready to Architect with OVision?
                </h3>
                <p className="text-sm md:text-base text-white/75 leading-relaxed font-normal">
                  Schedule a confidential 45-minute technical discovery session
                  with our systems leads. We will review your requirements,
                  explore architecture trade-offs, and outline a delivery
                  roadmap.
                </p>
              </div>

              <div className="relative z-10 shrink-0">
                <button
                  type="button"
                  data-action="open-contact"
                  className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white hover:bg-[#4EBD68] text-[#0B2818] text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4EBD68]"
                >
                  <span>Book Discovery Session</span>
                  <div className="w-5 h-5 rounded-full bg-[#0B2818]/10 group-hover:bg-[#0B2818] text-[#0B2818] group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowUpRight size={13} strokeWidth={2.5} />
                  </div>
                </button>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
    </ServiceDetailClientWrapper>
  );
}
