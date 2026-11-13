"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useSmoothScroll } from "../smooth-scroll-provider/smooth-scroll-provider";
import { SpringTiltCard } from "../magnetic-button/magnetic-button";

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollTo } = useSmoothScroll();

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative w-full py-20 px-6 md:px-12 max-w-360 mx-auto border-x border-b border-[#0A2618]/10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-12">
          <div className="space-y-4">
            <span className="text-xs font-bold tracking-widest uppercase text-[#0084FF]">
              About Us
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#0B2818] leading-[1.1]">
              We Are A Highly Experienced Agency
            </h2>
          </div>

          <div className="pt-8 border-t border-[#0A2618]/10">
            <p className="text-[11px] font-semibold tracking-wider uppercase text-[#0B2818]/60 mb-6">
              Trusted by global industry pioneers
            </p>
            <div className="grid grid-cols-3 gap-y-6 gap-x-8 items-center text-[#0B2818]/70">
              <div className="flex items-center gap-1 font-bold text-xl tracking-tighter opacity-80 hover:opacity-100 transition-opacity">
                <span>amazon</span>
              </div>

              <div className="flex items-center gap-1 font-black text-xl tracking-tight opacity-80 hover:opacity-100 transition-opacity">
                <span>AMD</span>
                <span className="text-xs text-[#0084FF]">▾</span>
              </div>

              <div className="flex items-center gap-1 font-semibold text-lg tracking-wider opacity-80 hover:opacity-100 transition-opacity">
                <span className="text-xs">ıllıl</span>
                <span>CISCO</span>
              </div>

              <div className="flex items-center gap-1.5 font-medium text-lg tracking-tight opacity-80 hover:opacity-100 transition-opacity">
                <div className="w-4 h-4 rounded-full border-2 border-current flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-current" />
                </div>
                <span>dropcam</span>
              </div>

              <div className="flex items-center gap-1 font-bold text-lg tracking-tight opacity-80 hover:opacity-100 transition-opacity">
                <span>logitech</span>
              </div>

              <div className="flex items-center gap-1.5 font-bold text-lg tracking-tight opacity-80 hover:opacity-100 transition-opacity">
                <div className="w-4 h-4 rounded-full bg-current flex items-center justify-center text-[#EAECE6] text-[9px]">
                  ●
                </div>
                <span>Spotify</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col items-end space-y-8">
          <div className="grid grid-cols-3 gap-3 md:gap-4 w-full">
            <SpringTiltCard maxTilt={8} className="w-full">
              <div className="relative aspect-3/4 w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-lg border border-[#0A2618]/10 group">
                <Image
                  src="/images/about_1.jpg"
                  alt="Senior Software Architect at OVision"
                  fill
                  referrerPolicy="no-referrer"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </SpringTiltCard>

            <SpringTiltCard maxTilt={8} className="w-full mt-4 md:mt-8">
              <div className="relative aspect-3/4 w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-lg border border-[#0A2618]/10 group">
                <Image
                  src="/images/about_2.jpg"
                  alt="Collaborative engineering session"
                  fill
                  referrerPolicy="no-referrer"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </SpringTiltCard>

            <SpringTiltCard maxTilt={8} className="w-full">
              <div className="relative aspect-3/4 w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-lg border border-[#0A2618]/10 group">
                <Image
                  src="/images/about_3.jpg"
                  alt="Lead Creative Technologist at OVision"
                  fill
                  referrerPolicy="no-referrer"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </SpringTiltCard>
          </div>

          <div className="w-full md:max-w-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-4">
            <p className="text-xs md:text-sm text-[#0B2818]/80 leading-relaxed font-medium">
              OVision is a top development studio providing outstanding business
              solutions.
            </p>

            <button
              onClick={() => scrollTo("#services")}
              className="group shrink-0 flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-[#0B2818] hover:bg-[#0D3B24] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300"
            >
              <span>Read More</span>
              <div className="w-5 h-5 rounded-full bg-white/20 group-hover:bg-white text-white group-hover:text-[#0B2818] flex items-center justify-center transition-colors">
                <ArrowUpRight size={13} strokeWidth={2.5} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
