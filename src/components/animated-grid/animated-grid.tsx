"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ProjectItem, filterProjects } from "@/lib/agency-logic";
import { ALL_PROJECTS } from "@/app/portfolio/_data/data";

interface AnimatedGridProps {
  onSelectProject?: (project: ProjectItem) => void;
}

export function AnimatedGrid({ onSelectProject }: AnimatedGridProps) {
  const [activeFilter, setActiveFilter] = useState<
    "all" | "web" | "mobile" | "ecommerce" | "branding"
  >("all");

  const filtered = filterProjects(activeFilter, ALL_PROJECTS);

  const categories: Array<{
    id: "all" | "web" | "mobile" | "ecommerce" | "branding";
    label: string;
  }> = [
    { id: "all", label: "All Works" },
    { id: "web", label: "Web Applications" },
    { id: "mobile", label: "Mobile & Cloud" },
    { id: "ecommerce", label: "eCommerce" },
    { id: "branding", label: "Digital Branding" },
  ];

  return (
    <div className="w-full mt-12">
      <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#0A2618]/5 rounded-2xl w-fit mb-8 border border-[#0A2618]/10">
        {categories.map((tab) => {
          const isActive = activeFilter === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`relative px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer ${
                isActive
                  ? "text-white"
                  : "text-[#0B2818]/70 hover:text-[#0B2818]"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeFilterBubble"
                  className="absolute inset-0 bg-[#0B2818] rounded-xl z-0"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          );
        })}
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filtered.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35 }}
              onClick={() => onSelectProject && onSelectProject(item)}
              className="group cursor-pointer bg-[#EAECE6] rounded-2xl overflow-hidden border border-[#0A2618]/15 hover:border-[#0B2818] transition-all duration-300 hover:shadow-xl flex flex-col"
            >
              <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-200">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  referrerPolicy="no-referrer"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#0B2818]/80 backdrop-blur-xs text-white text-[11px] font-mono px-2 py-0.5 rounded-md">
                  {item.indexStr}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs text-[#0B2818]/60 font-semibold uppercase tracking-wider">
                    <span>{item.client}</span>
                    <span>{item.year}</span>
                  </div>
                  <h4 className="text-base font-bold text-[#0B2818] group-hover:text-[#0084FF] transition-colors leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#0B2818]/70 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#0A2618]/10 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {item.tags.slice(0, 2).map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-medium bg-[#0A2618]/5 text-[#0B2818]/70 px-2 py-0.5 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="w-7 h-7 rounded-full bg-[#0A2618]/5 group-hover:bg-[#0B2818] text-[#0B2818] group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
