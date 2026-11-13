"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import { useSmoothScroll } from "../smooth-scroll-provider/smooth-scroll-provider";
import { RiInstagramLine } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa6";

interface NavbarProps {
  onOpenContact?: () => void;
}

export function Navbar({ onOpenContact }: NavbarProps) {
  const pathname = usePathname();
  const { scrollTo } = useSmoothScroll();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (anchor: string) => {
    if (isHome) {
      scrollTo(anchor);
    }
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#EAECE6]/80 backdrop-blur-2xl backdrop-saturate-180 shadow-[0_12px_36px_-12px_rgba(11,40,24,0.12)] border-b border-[#0A2618]/15"
            : "bg-[#EAECE6]/65 backdrop-blur-xl backdrop-saturate-150 border-b border-[#0A2618]/10"
        }`}
      >
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/80 to-transparent pointer-events-none" />

        <div
          className={`max-w-360 mx-auto px-6 md:px-12 flex items-center justify-between gap-6 transition-all duration-300 ${
            isScrolled ? "h-16 md:h-18" : "h-20"
          }`}
        >
          <div className="flex items-center gap-3">
            <Link
              href="/"
              onClick={() => {
                if (isHome) scrollTo(0);
              }}
              className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#0B2818] hover:opacity-80 transition-opacity flex items-center gap-1.5"
            >
              OVision
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-[13px] font-semibold tracking-wider uppercase text-[#0B2818]/80">
            <div className="relative">
              <div
                onMouseEnter={() => setServicesDropdownOpen(true)}
                className="flex items-center gap-1"
              >
                <Link
                  href="/services"
                  className={`py-2 hover:text-[#0B2818] transition-colors ${
                    pathname.startsWith("/services")
                      ? "text-[#0084FF] font-bold"
                      : ""
                  }`}
                >
                  Our Services
                </Link>
                <button
                  onClick={() => setServicesDropdownOpen((prev) => !prev)}
                  className="p-1 hover:text-[#0B2818] transition-colors cursor-pointer"
                  aria-expanded={servicesDropdownOpen}
                  aria-label="Toggle services dropdown"
                >
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      servicesDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {servicesDropdownOpen && (
                <div
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                  className="absolute top-full left-0 mt-2 w-72 bg-white/85 backdrop-blur-2xl backdrop-saturate-180 border border-white/80 rounded-sm shadow-[0_20px_45px_-15px_rgba(11,40,24,0.16)] py-3 px-2 z-50 flex flex-col gap-1 text-xs uppercase animate-fadeIn"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white to-transparent pointer-events-none rounded-t-2xl" />

                  <Link
                    href="/services"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="px-3 py-2 text-left rounded-xl bg-[#0A2618]/5 text-[#0B2818] font-bold transition-colors flex items-center justify-between"
                  >
                    <span>Services Overview Hub</span>
                    <ArrowUpRight size={13} className="text-[#0084FF]" />
                  </Link>
                  <div className="my-1 border-t border-[#0A2618]/10" />
                  <Link
                    href="/services/web-development"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="px-3 py-2 text-left rounded-xl hover:bg-[#EAECE6]/80 text-[#0B2818] font-medium transition-colors flex items-center justify-between"
                  >
                    <span>Web & Cloud Architecture</span>
                    <ArrowUpRight size={13} className="opacity-60" />
                  </Link>
                  <Link
                    href="/services/ecommerce"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="px-3 py-2 text-left rounded-xl hover:bg-[#EAECE6]/80 text-[#0B2818] font-medium transition-colors flex items-center justify-between"
                  >
                    <span>eCommerce Development</span>
                    <ArrowUpRight size={13} className="opacity-60" />
                  </Link>
                  <Link
                    href="/services/mobile-apps"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="px-3 py-2 text-left rounded-xl hover:bg-[#EAECE6]/80 text-[#0B2818] font-medium transition-colors flex items-center justify-between"
                  >
                    <span>Mobile App Engineering</span>
                    <ArrowUpRight size={13} className="opacity-60" />
                  </Link>
                  <Link
                    href="/services/seo-optimization"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="px-3 py-2 text-left rounded-xl hover:bg-[#EAECE6]/80 text-[#0B2818] font-medium transition-colors flex items-center justify-between"
                  >
                    <span>SEO & Performance Tuning</span>
                    <ArrowUpRight size={13} className="opacity-60" />
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/portfolio"
              className={`hover:text-[#0B2818] transition-colors ${
                pathname === "/portfolio" ? "text-[#0084FF] font-bold" : ""
              }`}
            >
              Portfolio
            </Link>

            <Link
              href="/about"
              className={`hover:text-[#0B2818] transition-colors ${
                pathname === "/about" ? "text-[#0084FF] font-bold" : ""
              }`}
            >
              About Us
            </Link>

            {isHome ? (
              <a
                href="#team"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#team");
                }}
                className="hover:text-[#0B2818] transition-colors"
              >
                Blog
              </a>
            ) : (
              <Link
                href="/#team"
                className="hover:text-[#0B2818] transition-colors"
              >
                Blog
              </Link>
            )}

            {isHome ? (
              <a
                href="#footer"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#footer");
                }}
                className="hover:text-[#0B2818] transition-colors"
              >
                Contact Us
              </a>
            ) : (
              <button
                onClick={onOpenContact}
                className="hover:text-[#0B2818] transition-colors cursor-pointer"
              >
                Contact Us
              </button>
            )}
          </nav>

          <div className="hidden sm:flex items-center gap-6">
            <div className="flex items-center gap-4 text-[#0B2818]/70">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-[#0B2818] transition-colors"
              >
                <FaFacebook size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-[#0B2818] transition-colors"
              >
                <RiInstagramLine size={16} />
              </a>
            </div>

            <button
              onClick={onOpenContact}
              className="px-6 py-2.5 rounded-full border border-[#0B2818]/30 hover:border-[#0B2818] text-xs font-bold uppercase tracking-wider text-[#0B2818] hover:bg-[#0B2818] hover:text-white transition-all duration-300 cursor-pointer shadow-xs hover:shadow-md"
            >
              Get Started
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden p-2 text-[#0B2818] hover:opacity-75 transition-opacity"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#EAECE6]/90 backdrop-blur-2xl backdrop-saturate-180 border-b border-[#0A2618]/15 px-6 py-6 flex flex-col gap-4 text-sm font-semibold uppercase tracking-wider text-[#0B2818] shadow-2xl animate-fadeIn">
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-left py-2 hover:text-[#0084FF] transition-colors font-bold"
            >
              All Services Hub
            </Link>
            <div className="pl-3 flex flex-col gap-2 text-xs opacity-90 border-l border-[#0A2618]/20">
              <Link
                href="/services/web-development"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#0084FF]"
              >
                Web & Cloud Architecture
              </Link>
              <Link
                href="/services/ecommerce"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#0084FF]"
              >
                Headless eCommerce
              </Link>
              <Link
                href="/services/mobile-apps"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#0084FF]"
              >
                Mobile App Engineering
              </Link>
              <Link
                href="/services/seo-optimization"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#0084FF]"
              >
                SEO & Performance Tuning
              </Link>
            </div>

            <Link
              href="/portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="text-left py-2 hover:text-[#0084FF] transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-left py-2 hover:text-[#0084FF] transition-colors"
            >
              About Us
            </Link>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenContact) onOpenContact();
              }}
              className="text-left py-2 hover:text-[#0084FF] transition-colors"
            >
              Contact Us
            </button>

            <div className="pt-4 border-t border-[#0A2618]/10 flex items-center justify-between">
              <div className="flex items-center gap-4 text-[#0B2818]/70">
                <a href="https://facebook.com" aria-label="Facebook">
                  <FaFacebook size={18} />
                </a>
                <a href="https://instagram.com" aria-label="Instagram">
                  <RiInstagramLine size={18} />
                </a>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenContact) onOpenContact();
                }}
                className="px-5 py-2 rounded-full bg-[#0B2818] text-white text-xs font-bold uppercase tracking-wider cursor-pointer"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </header>
      <div
        className="h-20 w-full shrink-0 pointer-events-none"
        aria-hidden="true"
      />
    </>
  );
}
