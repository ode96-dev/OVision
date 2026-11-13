"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUp, ArrowUpRight, MapPin, Mail } from "lucide-react";
import { useSmoothScroll } from "../smooth-scroll-provider/smooth-scroll-provider";

interface FooterSectionProps {
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
}

const ROW_CLASS =
  "group flex items-center gap-5 border-b border-white/10 py-4 cursor-pointer focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#4EBD68]";

const POLICY_BUTTON_CLASS =
  "hover:text-white transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4EBD68]";

function NavRowContent({ index, label }: { index: string; label: string }) {
  return (
    <>
      <span className="w-6 font-mono text-xs text-white/30 transition-colors group-hover:text-[#4EBD68]">
        {index}
      </span>

      <span className="flex-1 text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-white/80 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white">
        {label}
      </span>

      <span
        aria-hidden
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 text-white/60 opacity-60 transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-[#121512] group-hover:opacity-100 group-focus-visible:opacity-100 lg:scale-75 lg:opacity-0 lg:group-hover:scale-100 lg:group-focus-visible:scale-100"
      >
        <ArrowUpRight size={15} strokeWidth={2.5} />
      </span>
    </>
  );
}

export function FooterSection({
  onOpenPrivacy,
  onOpenTerms,
}: FooterSectionProps) {
  const pathname = usePathname();
  const { scrollTo } = useSmoothScroll();
  const reduceMotion = useReducedMotion();
  const isHome = pathname === "/";

  const dy = reduceMotion ? 0 : 20;

  return (
    <footer
      id="footer"
      className="relative w-full bg-[#121512] text-white pt-0 overflow-hidden"
    >
      <div className="relative w-full flex justify-center -mt-px pointer-events-auto">
        <div className="relative">
          <div className="w-56 sm:w-72 h-16 sm:h-20 bg-[#121512] rounded-t-[36px] sm:rounded-t-[48px] flex flex-col items-center justify-center pt-2 border-t border-x border-white/10 shadow-2xl">
            <button
              onClick={() => scrollTo(0)}
              className="group flex flex-col items-center gap-1 text-white/80 hover:text-white transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4EBD68]"
              aria-label="Scroll back to top"
            >
              <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#4EBD68] group-hover:text-white transition-colors">
                <span>Click</span>
                <span>+</span>
                <span>Top</span>
              </div>
              <div className="w-6 h-6 rounded-full border border-white/20 group-hover:border-white group-hover:bg-white group-hover:text-[#121512] flex items-center justify-center transition-all duration-300">
                <ArrowUp
                  size={12}
                  strokeWidth={2.5}
                  className="transition-transform duration-300 group-hover:-translate-y-px"
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-360 mx-auto px-6 md:px-12 pt-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: dy }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-6 space-y-8"
          >
            <p className="text-sm md:text-base text-white/70 max-w-md leading-relaxed font-normal">
              Our core skills focus on website design, mobile app development,
              eCommerce website development, search engine optimization and
              website maintenance.
            </p>

            <div className="space-y-4 pt-4">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#4EBD68]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4EBD68]" />
                Contact
              </span>

              <ul className="space-y-3 text-sm text-white/80">
                <li className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-[#0084FF]">
                    <MapPin size={15} />
                  </span>
                  <span>Syracuse, Connecticut</span>
                </li>
                <li>
                  <a
                    href="mailto:OVision@com"
                    className="group inline-flex items-center gap-3 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4EBD68]"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-[#0084FF] transition-colors group-hover:border-white group-hover:bg-white">
                      <Mail size={15} />
                    </span>
                    <span className="underline-offset-4 group-hover:underline">
                      ovision@com
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: dy }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-6 w-full"
          >
            <nav aria-label="Footer" className="border-t border-white/10">
              <Link href="/services" className={ROW_CLASS}>
                <NavRowContent index="01" label="Our Services" />
              </Link>
              <Link href="/portfolio" className={ROW_CLASS}>
                <NavRowContent index="02" label="Portfolio" />
              </Link>
              {isHome ? (
                <a
                  href="#team"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo("#team");
                  }}
                  className={ROW_CLASS}
                >
                  <NavRowContent index="03" label="Blog" />
                </a>
              ) : (
                <Link href="/#team" className={ROW_CLASS}>
                  <NavRowContent index="03" label="Blog" />
                </Link>
              )}
              <Link href="/about" className={ROW_CLASS}>
                <NavRowContent index="04" label="About Us" />
              </Link>
            </nav>
          </motion.div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50 font-normal">
          <p>© 2025 OVision all rights reserved. Made by Fatema Tuz Sultana</p>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] font-semibold tracking-wider uppercase">
            <button
              type="button"
              onClick={onOpenPrivacy}
              className={POLICY_BUTTON_CLASS}
            >
              Cookies
            </button>
            <span aria-hidden className="font-mono text-white/25">
              /
            </span>
            <button
              type="button"
              onClick={onOpenPrivacy}
              className={POLICY_BUTTON_CLASS}
            >
              Privacy Policy
            </button>
            <span aria-hidden className="font-mono text-white/25">
              /
            </span>
            <button
              type="button"
              onClick={onOpenTerms}
              className={POLICY_BUTTON_CLASS}
            >
              Terms &amp; Conditions
            </button>
          </div>
        </div>

        <motion.div
          aria-hidden
          initial={{ opacity: 0, y: dy * 3 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="w-full flex justify-center overflow-hidden select-none pointer-events-none mt-8 -mb-10 mask-[linear-gradient(to_bottom,black_30%,transparent_100%)]"
        >
          <span
            className="text-[100px] sm:text-[180px] md:text-[240px] lg:text-[280px] font-black tracking-tighter uppercase text-transparent stroke-text opacity-15"
            style={{ WebkitTextStroke: "2px rgba(255, 255, 255, 0.4)" }}
          >
            OVision
          </span>
        </motion.div>
      </div>
    </footer>
  );
}
