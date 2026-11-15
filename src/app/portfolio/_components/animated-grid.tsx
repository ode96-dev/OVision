"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ProjectItem, filterProjects } from "@/lib/agency-logic";
import { ALL_PROJECTS } from "@/app/portfolio/_data/data";

type FilterId = "all" | "web" | "mobile" | "ecommerce" | "branding";

const CATEGORIES: Array<{ id: FilterId; label: string }> = [
  { id: "all", label: "All Works" },
  { id: "web", label: "Web Applications" },
  { id: "mobile", label: "Mobile & Cloud" },
  { id: "ecommerce", label: "eCommerce" },
  { id: "branding", label: "Digital Branding" },
];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const MAX_TAGS = 2;

const categoryLabel = (category: string) =>
  CATEGORIES.find((c) => c.id === category)?.label ?? category;

interface AnimatedGridProps {
  onSelectProject?: (project: ProjectItem) => void;
}

export function AnimatedGrid({ onSelectProject }: AnimatedGridProps) {
  const [activeFilter, setActiveFilter] = useState<FilterId>("all");
  const reduceMotion = useReducedMotion();

  const filtered = filterProjects(activeFilter, ALL_PROJECTS);
  const hiddenScale = reduceMotion ? 1 : 0.94;

  return (
    <div className="w-full">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div
          role="group"
          aria-label="Filter projects"
          className="flex w-full max-w-full items-center justify-center gap-1 overflow-x-auto rounded-full p-1.5 scrollbar-none [&::-webkit-scrollbar]:hidden"
        >
          {CATEGORIES.map((tab) => {
            const isActive = activeFilter === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                aria-pressed={isActive}
                className={`relative flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0084FF] ${
                  isActive
                    ? "text-white"
                    : "text-[#0B2818]/70 hover:text-[#0B2818]"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeFilterBubble"
                    className="absolute inset-0 z-0 rounded-full bg-[#0B2818]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <motion.div
        layout
        className="relative grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout" initial={false}>
          {filtered.map((item, i) => {
            const extraTags = item.tags.length - MAX_TAGS;

            return (
              <motion.article
                layout
                key={item.id}
                initial={{ opacity: 0, scale: hiddenScale }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 0.4,
                    ease: "easeOut",
                    delay: reduceMotion ? 0 : i * 0.05,
                  },
                }}
                exit={{
                  opacity: 0,
                  scale: hiddenScale,
                  transition: { duration: 0.2 },
                }}
                transition={{ layout: { duration: 0.45, ease: EASE } }}
                className="group relative flex flex-col rounded-md border border-[#0A2618]/15 bg-white p-2.5 transition-[translate,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgba(11,40,24,0.45)]"
              >
                <div className="relative aspect-16/10 w-full overflow-hidden rounded-md bg-[#0A2618]/10">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                    referrerPolicy="no-referrer"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between gap-5 p-4 pt-5">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xs font-bold uppercase tracking-widest text-[#0084FF]">
                        {categoryLabel(item.category)}
                      </span>
                      <span className="font-mono text-[11px] text-[#0A2618]/45">
                        {item.year}
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <h4 className="text-lg font-semibold leading-snug tracking-tight text-[#0B2818]">
                        {item.title}
                      </h4>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-[#0A2618]/45">
                        {item.client}
                      </p>
                    </div>

                    <p className="line-clamp-2 text-sm font-medium leading-relaxed text-[#0B2818]/70">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between gap-3 border-t border-[#0A2618]/10 pt-4">
                    <div className="flex flex-wrap items-center gap-2">
                      {item.tags.slice(0, MAX_TAGS).map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-[#0A2618]/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#0B2818]/70"
                        >
                          {t}
                        </span>
                      ))}
                      {extraTags > 0 && (
                        <span className="font-mono text-[10px] text-[#0A2618]/45">
                          +{extraTags}
                        </span>
                      )}
                    </div>

                    <span
                      aria-hidden
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#0A2618]/20 text-[#0B2818] transition-colors duration-300 group-hover:border-[#0B2818] group-hover:bg-[#0B2818] group-hover:text-white"
                    >
                      <ArrowUpRight
                        size={15}
                        strokeWidth={2.5}
                        className="transition-transform duration-300 group-hover:translate-x-px group-hover:-translate-y-px"
                      />
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectProject?.(item)}
                  aria-label={`View ${item.title}`}
                  className="absolute inset-0 z-10 cursor-pointer rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0084FF]"
                />
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="rounded-3xl border border-dashed border-[#0A2618]/20 p-12 text-center font-mono text-xs uppercase tracking-widest text-[#0A2618]/50">
          No projects in this category yet
        </p>
      )}
    </div>
  );
}
