"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useSmoothScroll } from "../smooth-scroll-provider/smooth-scroll-provider";

interface ServicesSectionProps {
  onExploreServices?: () => void;
}

export function ServicesSection({ onExploreServices }: ServicesSectionProps) {
  const { scrollTo } = useSmoothScroll();

  return (
    <section
      id="services"
      className="relative w-full py-20 px-6 md:px-12 max-w-360 mx-auto border-x border-b border-[#0A2618]/10"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-3">
          <span className="text-xs font-bold tracking-widest uppercase text-[#0084FF]">
            Services
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#0B2818]">
            The Services / -We Provide
          </h2>
        </div>

        <p className="text-xs md:text-sm text-[#0B2818]/70 max-w-sm leading-relaxed font-medium">
          We provide solutions like web design, app development, eCommerce, SEO,
          and maintenance.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-6 relative rounded-lg overflow-hidden shadow-xl border border-[#0A2618]/10 group min-h-95 lg:min-h-130">
          <Image
            src="/images/services_team.jpg"
            alt="OVision Specialized Technical Support and Engineering"
            fill
            referrerPolicy="no-referrer"
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0B2818]/40 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="lg:col-span-6 flex flex-col justify-between gap-8">
          <div className="bg-[#EAECE6] border border-[#0A2618]/15 rounded-lg p-6 md:p-8 flex flex-col justify-between shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <h3 className="text-base sm:text-lg font-medium text-[#0B2818] max-w-xs leading-snug">
                Our Professional Services Can Help You Get More Traffic, More
                Leads and More Sales.
              </h3>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <div className="relative w-20 h-14 rounded-xl overflow-hidden shadow-sm border border-[#0A2618]/10">
                <Image
                  src="/images/about_2.jpg"
                  alt="Service preview 1"
                  fill
                  referrerPolicy="no-referrer"
                  className="object-cover"
                />
              </div>
              <div className="relative w-20 h-14 rounded-xl overflow-hidden shadow-sm border border-[#0A2618]/10">
                <Image
                  src="/images/about_3.jpg"
                  alt="Service preview 2"
                  fill
                  referrerPolicy="no-referrer"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="bg-[#0D3B24] rounded-lg p-6 md:p-10 text-white flex flex-col justify-between shadow-xl space-y-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-radial from-white/5 to-transparent pointer-events-none" />

            <p className="text-sm md:text-base text-white/90 leading-relaxed font-normal relative z-10">
              We develop a comprehensive range of solutions and provide services
              that majorly include website design, mobile app development,
              eCommerce website development, search engine optimization and
              website maintenance.
            </p>

            <div className="flex items-center justify-start relative z-10">
              <button
                onClick={() => {
                  scrollTo("#recent-work");
                  if (onExploreServices) onExploreServices();
                }}
                className="group flex items-center gap-2.5 px-6 py-3 rounded-full text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 border border-white/10 hover:border-white/30 cursor-pointer"
              >
                <span>Read More</span>
                <div className="w-5 h-5 rounded-full bg-white/20 group-hover:bg-white text-white group-hover:text-[#0D3B24] flex items-center justify-center transition-colors">
                  <ArrowUpRight size={13} strokeWidth={2.5} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
