"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { getNextIndex, getPrevIndex, ProjectItem } from "@/lib/agency-logic";
import { FEATURED_PROJECTS } from "./data";

gsap.registerPlugin(ScrollTrigger);

interface PinnedShowcaseProps {
  onSelectProject?: (project: ProjectItem) => void;
}

const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];
const pad = (n: number) => String(n).padStart(2, "0");

export function PinnedShowcase({ onSelectProject }: PinnedShowcaseProps) {
  const total = FEATURED_PROJECTS.length;
  const reduceMotion = useReducedMotion();

  const [[index, direction], setPage] = useState<[number, number]>([0, 1]);
  const [, setPinned] = useState(false);

  const stageRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<ScrollTrigger | null>(null);
  const indexRef = useRef(0);

  const currentProject = FEATURED_PROJECTS[index];

  const goTo = useCallback((next: number, dir?: number) => {
    if (next === indexRef.current) return;
    const resolved = dir ?? (next > indexRef.current ? 1 : -1);
    indexRef.current = next;
    setPage([next, resolved]);
  }, []);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage || total < 2) return;

    const mm = gsap.matchMedia();

    mm.add(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
      () => {
        const st = ScrollTrigger.create({
          trigger: stage,
          start: "top top+=80",
          end: () => `+=${window.innerHeight * 0.6 * (total - 1)}`,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          snap: {
            snapTo: 1 / (total - 1),
            duration: { min: 0.2, max: 0.5 },
            delay: 0.1,
            ease: "power1.inOut",
          },
          onUpdate: (self) => {
            goTo(Math.round(self.progress * (total - 1)));
          },
        });

        triggerRef.current = st;
        setPinned(true);

        return () => {
          triggerRef.current = null;
          setPinned(false);
        };
      },
    );

    return () => mm.revert();
  }, [total, goTo]);

  const jumpTo = (target: number, dir: 1 | -1) => {
    const st = triggerRef.current;
    if (!st) {
      goTo(target, dir);
      return;
    }
    const span = st.end - st.start;
    const top = st.start + (target / (total - 1)) * span;
    const wrapped =
      (dir === 1 && target < indexRef.current) ||
      (dir === -1 && target > indexRef.current);
    window.scrollTo({ top, behavior: wrapped ? "auto" : "smooth" });
  };

  const handleNext = () => jumpTo(getNextIndex(indexRef.current, total), 1);
  const handlePrev = () => jumpTo(getPrevIndex(indexRef.current, total), -1);

  if (!currentProject) return null;

  const dy = reduceMotion ? 0 : 14;

  const textContainer: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
    exit: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
  };

  const textItem: Variants = {
    hidden: { opacity: 0, y: dy },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
    exit: { opacity: 0, y: -dy, transition: { duration: 0.2 } },
  };

  const digitVariants: Variants = {
    enter: (d: number) =>
      reduceMotion
        ? { opacity: 0 }
        : { y: d > 0 ? "100%" : "-100%", opacity: 0 },
    center: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: EASE },
    },
    exit: (d: number) =>
      reduceMotion
        ? { opacity: 0 }
        : {
            y: d > 0 ? "-100%" : "100%",
            opacity: 0,
            transition: { duration: 0.4, ease: EASE },
          },
  };

  const imageVariants: Variants = {
    enter: (d: number) =>
      reduceMotion
        ? { opacity: 0, zIndex: 2 }
        : {
            clipPath: d > 0 ? "inset(100% 0% 0% 0%)" : "inset(0% 0% 100% 0%)",
            scale: 1.12,
            zIndex: 2,
          },
    center: {
      clipPath: "inset(0% 0% 0% 0%)",
      opacity: 1,
      scale: 1,
      zIndex: 2,
      transition: { duration: 0.85, ease: EASE },
    },
    exit: {
      opacity: reduceMotion ? 0 : 0.5,
      scale: reduceMotion ? 1 : 0.94,
      zIndex: 1,
      transition: { duration: 0.85, ease: EASE },
    },
  };

  return (
    <section
      id="recent-work"
      className="relative w-full py-20 px-6 md:px-12 max-w-360 mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
      >
        <div className="space-y-3">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#0B2818]">
            Our Recent Work
          </h2>
        </div>

        <p className="text-xs md:text-sm text-[#0B2818]/70 max-w-sm leading-relaxed font-medium">
          Since our formation in 2009, we have been committed to delivering
          innovative digital projects completed to the highest possible
          standards.
        </p>
      </motion.div>

      <div
        ref={stageRef}
        className="relative overflow-hidden w-full bg-[#EAECE6] p-6 md:p-10 lg:h-[calc(100svh-7rem)] lg:min-h-150 lg:max-h-180"
      >
        <span
          aria-hidden
          className="pointer-events-none select-none absolute -bottom-28 -left-4 text-[24rem] leading-none font-light text-[#0A2618]/4"
        >
          /
        </span>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 lg:h-full">
          <div className="lg:col-span-5 flex flex-col justify-between gap-8 lg:h-full">
            <div className="flex items-start justify-between">
              <div className="flex items-baseline gap-3">
                <div className="relative h-[1em] overflow-hidden text-6xl md:text-7xl font-normal tracking-tight leading-none tabular-nums text-[#0B2818]">
                  <AnimatePresence
                    mode="popLayout"
                    initial={false}
                    custom={direction}
                  >
                    <motion.span
                      key={index}
                      custom={direction}
                      variants={digitVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      className="block"
                    >
                      {pad(index + 1)}
                    </motion.span>
                  </AnimatePresence>
                </div>
                <span className="text-xs font-mono text-[#0A2618]/40">
                  / {pad(total)}
                </span>
              </div>
            </div>

            <div className="lg:min-h-48" aria-live="polite">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProject.id}
                  variants={textContainer}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="space-y-4"
                >
                  <motion.h3
                    variants={textItem}
                    className="text-2xl md:text-3xl font-semibold tracking-tight text-[#0B2818]"
                  >
                    {currentProject.title}
                  </motion.h3>
                  <motion.p
                    variants={textItem}
                    className="text-sm md:text-base text-[#0B2818]/70 leading-relaxed font-medium max-w-md"
                  >
                    {currentProject.description}
                  </motion.p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  {FEATURED_PROJECTS.map((project, i) => (
                    <button
                      key={project.id}
                      type="button"
                      onClick={() => jumpTo(i, i > index ? 1 : -1)}
                      aria-label={`Go to project ${i + 1}: ${project.title}`}
                      aria-current={i === index}
                      className={`font-mono text-[11px] tracking-wider transition-colors cursor-pointer ${
                        i === index
                          ? "text-[#0B2818]"
                          : "text-[#0A2618]/35 hover:text-[#0B2818]/70"
                      }`}
                    >
                      {pad(i + 1)}
                    </button>
                  ))}
                </div>
                <div className="relative h-0.5 w-full bg-[#0A2618]/15">
                  <motion.div
                    className="absolute inset-y-0 left-0 w-full origin-left bg-[#0B2818]"
                    initial={false}
                    animate={{ scaleX: (index + 1) / total }}
                    transition={{ duration: 0.6, ease: EASE }}
                  />
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <button
                  onClick={() => {
                    if (onSelectProject) onSelectProject(currentProject);
                  }}
                  className="group inline-flex items-center gap-3 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-xs hover:shadow-sm cursor-pointer"
                >
                  <span>View Projects</span>
                  <div className="w-5 h-5 rounded-full bg-white/20 group-hover:bg-white text-white group-hover:text-[#0B2818] flex items-center justify-center transition-colors">
                    <ArrowUpRight
                      size={13}
                      strokeWidth={2.5}
                      className="transition-transform duration-300 group-hover:translate-x-px group-hover:-translate-y-px"
                    />
                  </div>
                </button>

                <div className="flex items-center gap-3">
                  <button
                    onClick={handlePrev}
                    className="w-11 h-11 rounded-full border border-[#0A2618]/25 hover:border-[#0B2818] hover:bg-[#0B2818] hover:text-white flex items-center justify-center text-[#0B2818] transition-colors cursor-pointer"
                    aria-label="Previous project"
                  >
                    <ChevronLeft size={18} />
                  </button>

                  <span className="text-xs font-mono text-[#0A2618]/40">/</span>

                  <button
                    onClick={handleNext}
                    className="w-11 h-11 rounded-full border border-[#0A2618]/25 hover:border-[#0B2818] hover:bg-[#0B2818] hover:text-white flex items-center justify-center text-[#0B2818] transition-colors cursor-pointer"
                    aria-label="Next project"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="order-first lg:order-0 lg:col-span-7 min-h-0 lg:h-full">
            <div className="w-full pr-4 pb-4 md:pr-8 md:pb-8 lg:h-full">
              <div className="relative w-full lg:h-full">
                <div
                  aria-hidden
                  className="absolute inset-0 translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4 rounded-[1.75rem] border border-[#0A2618]/15 bg-[#0A2618]/3"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 translate-x-4 translate-y-4 md:translate-x-8 md:translate-y-8 rounded-[1.75rem] border border-[#0A2618]/10"
                />

                <div className="relative w-full aspect-4/3 lg:aspect-auto lg:h-full rounded-[1.75rem]">
                  <div className="absolute top-1 md:top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white/25" />

                  <div className="group/screen relative w-full h-full rounded-2xl overflow-hidden">
                    <AnimatePresence initial={false} custom={direction}>
                      <motion.div
                        key={currentProject.id}
                        custom={direction}
                        variants={imageVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="absolute inset-0"
                      >
                        <Image
                          src={currentProject.image}
                          alt={currentProject.title}
                          fill
                          sizes="(min-width: 1024px) 58vw, 100vw"
                          referrerPolicy="no-referrer"
                          className="object-cover transition-transform duration-700 ease-out group-hover/screen:scale-[1.03]"
                        />
                      </motion.div>
                    </AnimatePresence>

                    <button
                      type="button"
                      onClick={() => {
                        if (onSelectProject) onSelectProject(currentProject);
                      }}
                      aria-label={`View ${currentProject.title}`}
                      className="absolute inset-0 z-20 cursor-pointer focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-[#0084FF]"
                    >
                      <span className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#0B2818] shadow-lg opacity-0 translate-y-2 transition-all duration-300 group-hover/screen:opacity-100 group-hover/screen:translate-y-0 group-focus-within/screen:opacity-100 group-focus-within/screen:translate-y-0">
                        <ArrowUpRight size={18} strokeWidth={2.5} />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
