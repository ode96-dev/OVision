"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Plus } from "lucide-react";
import { useSmoothScroll } from "../smooth-scroll-provider/smooth-scroll-provider";
import { MagneticButton } from "../magnetic-button/magnetic-button";

interface HeroSectionProps {
  onExploreMore?: () => void;
}

export function HeroSection({ onExploreMore }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<HTMLDivElement>(null);
  const titleGlobalRef = useRef<HTMLHeadingElement>(null);
  const titleSolutionRef = useRef<HTMLHeadingElement>(null);
  const textLeftRef = useRef<HTMLDivElement>(null);
  const statRightRef = useRef<HTMLDivElement>(null);
  const bottomBarRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGPolylineElement>(null);

  const { scrollTo } = useSmoothScroll();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      gsap.set([titleGlobalRef.current, titleSolutionRef.current], {
        opacity: 0,
        y: 50,
      });
      gsap.set(globeRef.current, {
        opacity: 0,
        scale: 0.8,
        rotate: -15,
      });
      gsap.set([textLeftRef.current, statRightRef.current, ctaRef.current], {
        opacity: 0,
        y: 30,
      });
      gsap.set(bottomBarRef.current, {
        opacity: 0,
        y: 20,
      });

      tl.to(titleGlobalRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
      })
        .to(
          globeRef.current,
          {
            opacity: 1,
            scale: 1,
            rotate: 0,
            duration: 1.2,
            ease: "back.out(1.2)",
          },
          "-=0.7",
        )
        .to(
          titleSolutionRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
          },
          "-=0.8",
        )
        .to(
          [textLeftRef.current, statRightRef.current, ctaRef.current],
          {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.8,
          },
          "-=0.6",
        )
        .to(
          bottomBarRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.4",
        );

      gsap.to(globeRef.current, {
        rotate: 360,
        duration: 90,
        repeat: -1,
        ease: "none",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative w-full min-h-[92vh] flex flex-col justify-between pt-8 pb-8 px-6 md:px-12 max-w-360 mx-auto overflow-hidden border-x border-[#0A2618]/10"
    >
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none stroke-[#0A2618]/10 fill-none z-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polyline points="850,80 1200,80 1250,130" strokeDasharray="4 4" />
        <polyline
          ref={lineRef}
          points="180,180 180,260 320,260 380,310"
          stroke="#0084FF"
          strokeWidth="1.2"
          strokeDasharray="6 4"
        />
        <circle cx="180" cy="180" r="3" fill="#0084FF" />
        <circle cx="380" cy="310" r="3" fill="#0084FF" />
      </svg>

      <div className="relative z-10 w-full flex-1 flex flex-col justify-center my-6 md:my-10">
        <div className="w-full flex items-start justify-between">
          <h1
            ref={titleGlobalRef}
            className="text-[64px] sm:text-[100px] md:text-[140px] lg:text-[160px] font-normal tracking-tight text-[#0B2818] select-none leading-[0.9]"
          >
            Global
          </h1>

          <div
            ref={statRightRef}
            className="hidden sm:flex flex-col items-end text-right max-w-52.5 pt-4"
          >
            <span className="text-2xl md:text-3xl font-extrabold text-[#0084FF] tracking-tight">
              +11K
            </span>
            <p className="text-xs text-[#0B2818]/70 font-medium leading-relaxed mt-1">
              The overall count of clients across the globe.
            </p>
          </div>
        </div>

        <div className="relative w-full flex items-center justify-center -my-7.5 md:-my-15 py-4">
          <div
            ref={textLeftRef}
            className="hidden lg:flex flex-col items-start absolute left-6 top-1/3 -translate-y-1/2 z-20 max-w-60"
          >
            <div className="w-10 h-10 rounded-full bg-[#0084FF] text-white flex items-center justify-center shadow-lg shadow-[#0084FF]/25 mb-4 animate-ring-pulse">
              <Plus size={20} strokeWidth={2.5} />
            </div>
            <p className="text-xs md:text-sm text-[#0B2818]/80 font-medium leading-relaxed bg-[#EAECE6]/80 backdrop-blur-xs p-2 rounded-lg">
              OVision is a top development studio providing outstanding business
              solutions.
            </p>
            <div className="w-16 h-1 bg-[#4E7736] mt-3 rounded-full" />
          </div>

          <div className="relative group w-65 h-65 sm:w-90 sm:h-90 md:w-115 md:h-115 z-10 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-radial from-[#0084FF]/20 via-[#0B2818]/10 to-transparent blur-2xl scale-125 pointer-events-none" />

            <div className="absolute -inset-4.5 rounded-full border border-[#0084FF]/25 border-dashed pointer-events-none animate-spin-slow" />
            <div className="absolute -inset-9 rounded-full border border-[#0A2618]/10 pointer-events-none" />

            <div
              ref={globeRef}
              className="relative w-full h-full rounded-full overflow-hidden shadow-2xl shadow-[#0B2818]/40 border-2 border-[#0084FF]/40 cursor-grab active:cursor-grabbing will-change-transform"
            >
              <Image
                src="/images/globe.jpg"
                alt="OVision Global IT Solutions Earth"
                fill
                priority
                referrerPolicy="no-referrer"
                className="object-cover scale-105"
              />
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/40 pointer-events-none flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center md:items-end justify-between mt-2 z-20">
          <div className="w-full flex justify-end">
            <h2
              ref={titleSolutionRef}
              className="text-[60px] sm:text-[96px] md:text-[130px] lg:text-[150px] font-normal tracking-tight text-[#0B2818] select-none leading-[0.9] flex items-baseline gap-2 md:gap-4"
            >
              <span className="text-[#0084FF] drop-shadow-sm font-semibold">
                IT
              </span>
              <span>Solution</span>
            </h2>
          </div>
        </div>

        <div
          ref={ctaRef}
          className="w-full flex justify-center -mt-4 md:-mt-8 z-30"
        >
          <MagneticButton
            onClick={() => {
              scrollTo("#about");
              if (onExploreMore) onExploreMore();
            }}
            className="group px-7 py-3 rounded-full bg-[#0B2818] hover:bg-[#0D3B24] text-white shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3"
            ariaLabel="Explore more about OVision"
          >
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest">
              Explore More
            </span>
            <div className="w-6 h-6 rounded-full bg-white/20 group-hover:bg-white text-white group-hover:text-[#0B2818] flex items-center justify-center transition-colors">
              <Plus size={14} strokeWidth={3} />
            </div>
          </MagneticButton>
        </div>
      </div>

      <div
        ref={bottomBarRef}
        className="w-full pt-8 pb-2 border-t border-[#0A2618]/10 grid grid-cols-1 md:grid-cols-3 items-center gap-6 z-10"
      >
        <div className="flex flex-col items-start gap-1.5">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-white bg-[#0B2818] px-3 py-1 rounded-full">
              Digital Solution
            </span>
            <span className="text-[10px] font-semibold text-[#0B2818]/80 bg-[#0A2618]/5 border border-[#0A2618]/15 px-2.5 py-0.5 rounded-full">
              AI
            </span>
            <span className="text-[10px] font-semibold text-[#0B2818]/80 bg-[#0A2618]/5 border border-[#0A2618]/15 px-2.5 py-0.5 rounded-full">
              MODERN
            </span>
          </div>
          <span className="text-xs text-[#0B2818]/70 font-medium">
            Beyond Trend into Future
          </span>
        </div>

        <div className="flex flex-col items-center justify-center gap-2">
          <button
            onClick={() => scrollTo("#about")}
            className="group flex flex-col items-center gap-1.5 text-[#0B2818]/80 hover:text-[#0B2818] transition-colors cursor-pointer"
            aria-label="Scroll down to About section"
          >
            <div className="w-5 h-8 rounded-full border-2 border-[#0B2818]/50 flex items-start justify-center p-1">
              <div className="w-1.5 h-2 bg-[#0B2818] rounded-full animate-scroll-bounce" />
            </div>
            <div className="flex items-center gap-1 text-[11px] font-semibold tracking-wider uppercase text-[#0B2818]/70 group-hover:text-[#0B2818]">
              <span>Scroll</span>
              <span>+</span>
              <span>Down</span>
            </div>
          </button>
        </div>

        <div className="flex items-center justify-start md:justify-end gap-3">
          <div className="flex -space-x-2.5 overflow-hidden">
            <div className="inline-block h-8 w-8 rounded-full ring-2 ring-[#EAECE6] overflow-hidden bg-emerald-200">
              <Image
                src="/images/about_1.jpg"
                alt="Client 1"
                width={32}
                height={32}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="inline-block h-8 w-8 rounded-full ring-2 ring-[#EAECE6] overflow-hidden bg-blue-200">
              <Image
                src="/images/about_2.jpg"
                alt="Client 2"
                width={32}
                height={32}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="inline-block h-8 w-8 rounded-full ring-2 ring-[#EAECE6] overflow-hidden bg-amber-200">
              <Image
                src="/images/about_3.jpg"
                alt="Client 3"
                width={32}
                height={32}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="h-8 w-8 rounded-full ring-2 ring-[#EAECE6] bg-[#0084FF] text-white flex items-center justify-center text-xs font-bold shadow-xs">
              +
            </div>
          </div>
          <span className="text-xs text-[#0B2818]/80 font-medium leading-tight max-w-37.5">
            They are already in here for growth
          </span>
        </div>
      </div>
    </section>
  );
}
