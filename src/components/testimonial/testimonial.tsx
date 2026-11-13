"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { getNextIndex, getPrevIndex } from "@/lib/agency-logic";
import { TESTIMONIALS } from "./data";

const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

export function TestimonialsSection() {
  const total = TESTIMONIALS.length;
  const reduceMotion = useReducedMotion();

  const [[index, direction], setPage] = useState<[number, number]>([0, 1]);

  const current = TESTIMONIALS[index];

  const goTo = (next: number, dir: number) => {
    if (next === index) return;
    setPage([next, dir]);
  };

  const handleNext = () => goTo(getNextIndex(index, total), 1);
  const handlePrev = () => goTo(getPrevIndex(index, total), -1);

  const dx = reduceMotion ? 0 : 24;
  const dy = reduceMotion ? 0 : 10;

  const nameVariants: Variants = {
    hidden: { opacity: 0, y: dy },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, y: -dy, transition: { duration: 0.2 } },
  };

  const quoteVariants: Variants = {
    hidden: (d: number) => ({ opacity: 0, x: d * dx }),
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.45, ease: "easeOut", staggerChildren: 0.07 },
    },
    exit: (d: number) => ({
      opacity: 0,
      x: -d * dx,
      transition: { duration: 0.25 },
    }),
  };

  const quoteItem: Variants = {
    hidden: { opacity: 0, y: dy },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <section
      id="feedback"
      className="relative w-full py-20 px-6 md:px-12 max-w-360 mx-auto border-x border-b border-[#0A2618]/10"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
      >
        <div className="space-y-3">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#0B2818] flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span>What Our</span>
            <span className="text-[#0084FF] font-semibold">11k+</span>
            <span>Clients Say</span>
          </h2>
        </div>

        <p className="text-xs md:text-sm text-[#0B2818]/70 max-w-sm leading-relaxed font-medium">
          The overall count of clients across the globe.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="grid grid-cols-1 lg:grid-cols-12 rounded-lg overflow-hidden  bg-[#0D3B24] shadow-[0_30px_60px_-30px_rgba(11,40,24,0.45)]"
      >
        <div className="lg:col-span-5 relative min-h-85 lg:min-h-120 overflow-hidden">
          <motion.div
            className="absolute inset-0"
            initial={{ scale: reduceMotion ? 1 : 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: EASE }}
          >
            <Image
              src="/images/testimonial_handshake.jpg"
              alt="Business partnership handshake at OVision"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              referrerPolicy="no-referrer"
              className="object-cover"
            />
          </motion.div>

          <div
            aria-hidden
            className="absolute inset-0 bg-linear-to-t from-[#0B2818]/60 via-[#0B2818]/10 to-transparent"
          />
        </div>

        <div className="relative lg:col-span-7 overflow-hidden p-8 md:p-14 text-white flex flex-col justify-between gap-8">
          <span
            aria-hidden
            className="pointer-events-none select-none absolute -right-6 -bottom-32 text-[26rem] leading-none font-light text-white/4"
          >
            /
          </span>

          <div className="relative z-10 flex items-start justify-between gap-6">
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  variants={nameVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                >
                  <h3 className="text-3xl md:text-4xl font-normal tracking-tight text-white">
                    {current.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#4EBD68] mt-1.5 uppercase tracking-widest">
                    {current.role}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="w-11 h-11 rounded-full border border-white/20 hover:border-white hover:bg-white hover:text-[#0D3B24] flex items-center justify-center text-white transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4EBD68]"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <span className="text-xs font-mono text-white/40">/</span>
              <button
                onClick={handleNext}
                className="w-11 h-11 rounded-full border border-white/20 hover:border-white hover:bg-white hover:text-[#0D3B24] flex items-center justify-center text-white transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4EBD68]"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="relative z-10 lg:min-h-56" aria-live="polite">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current.id}
                custom={direction}
                variants={quoteVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                className="space-y-5"
              >
                <motion.div
                  variants={quoteItem}
                  role="img"
                  aria-label={`Rated ${current.rating} out of 5`}
                  className="flex items-center gap-1 text-[#4EBD68]"
                >
                  {Array.from({ length: current.rating }, (_, i) => (
                    <Star
                      key={i}
                      size={14}
                      aria-hidden
                      className="fill-current"
                    />
                  ))}
                </motion.div>

                <motion.h4
                  variants={quoteItem}
                  className="text-2xl md:text-3xl font-normal tracking-tight text-white leading-snug"
                >
                  {current.quoteTitle}
                </motion.h4>

                <motion.p
                  variants={quoteItem}
                  className="text-sm md:text-base text-white/75 leading-relaxed font-normal max-w-xl"
                >
                  {current.quoteBody}
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative z-10 space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                {TESTIMONIALS.map((t, i) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => goTo(i, i > index ? 1 : -1)}
                    aria-label={`Go to testimonial ${i + 1}: ${t.name}`}
                    aria-current={i === index}
                    className={`font-mono text-[11px] tracking-wider transition-colors cursor-pointer ${
                      i === index
                        ? "text-white"
                        : "text-white/35 hover:text-white/70"
                    }`}
                  >
                    {t.indexStr}
                  </button>
                ))}
              </div>
              <div className="relative h-0.5 w-full bg-white/15">
                <motion.div
                  className="absolute inset-y-0 left-0 w-full origin-left bg-[#4EBD68]"
                  initial={false}
                  animate={{ scaleX: (index + 1) / total }}
                  transition={{ duration: 0.6, ease: EASE }}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
