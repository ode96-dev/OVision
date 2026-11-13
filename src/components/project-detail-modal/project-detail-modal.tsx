"use client";

import { useEffect, useId, useRef } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { X } from "lucide-react";
import { ProjectItem } from "@/lib/agency-logic";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const FOCUSABLE =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectDetailModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project && (
        <ModalContent key={project.id} project={project} onClose={onClose} />
      )}
    </AnimatePresence>
  );
}

function ModalContent({
  project,
  onClose,
}: {
  project: ProjectItem;
  onClose: () => void;
  total?: number;
}) {
  const reduceMotion = useReducedMotion();
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    const body = document.body;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const prevOverflow = body.style.overflow;
    const prevPaddingRight = body.style.paddingRight;

    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    body.style.overflow = "hidden";
    if (scrollbar > 0) body.style.paddingRight = `${scrollbar}px`;

    closeRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onCloseRef.current();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;

      const focusable =
        panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE);
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      body.style.overflow = prevOverflow;
      body.style.paddingRight = prevPaddingRight;
      previouslyFocused?.focus?.();
    };
  }, []);

  const dy = reduceMotion ? 0 : 16;

  const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.25, delay: 0.05 } },
  };

  const panelVariants: Variants = {
    hidden: { opacity: 0, y: dy * 1.5, scale: reduceMotion ? 1 : 0.96 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: EASE,
        delayChildren: 0.15,
        staggerChildren: 0.06,
      },
    },
    exit: {
      opacity: 0,
      y: dy,
      scale: reduceMotion ? 1 : 0.98,
      transition: { duration: 0.25, ease: "easeIn" },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: dy },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };

  const imageVariants: Variants = {
    hidden: { scale: reduceMotion ? 1 : 1.1 },
    show: { scale: 1, transition: { duration: 1, ease: EASE } },
  };

  return (
    <motion.div
      variants={overlayVariants}
      initial="hidden"
      animate="show"
      exit="exit"
      onPointerDown={(e) => {
        if (e.target === e.currentTarget) onCloseRef.current();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B2818]/60 backdrop-blur-sm"
    >
      <motion.div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        variants={panelVariants}
        className="relative flex w-full max-w-3xl max-h-[90svh] flex-col overflow-hidden rounded-md border border-[#0A2618]/15 bg-[#EAECE6] shadow-2xl"
      >
        <span
          aria-hidden
          className="pointer-events-none select-none absolute -right-4 -bottom-24 z-0 text-[22rem] leading-none font-light text-[#0A2618]/4"
        >
          /
        </span>

        <div className="relative z-10 aspect-video max-h-[42svh] w-full shrink-0 overflow-hidden bg-[#0A2618]/10">
          <motion.div variants={imageVariants} className="absolute inset-0">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(min-width: 768px) 768px, 100vw"
              referrerPolicy="no-referrer"
              className="object-cover"
            />
          </motion.div>

          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-[#0B2818]/40 to-transparent"
          />

          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#0B2818]/80 backdrop-blur-md text-white transition-colors hover:bg-white hover:text-[#0B2818] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0084FF]"
          >
            <X size={18} />
          </button>
        </div>

        <div className="relative z-10 overflow-y-auto overscroll-contain p-6 md:p-8">
          <div className="space-y-6">
            <motion.div variants={itemVariants} className="space-y-3">
              <h2
                id={titleId}
                className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0B2818]"
              >
                {project.title}
              </h2>
            </motion.div>

            <motion.dl
              variants={itemVariants}
              className="grid grid-cols-2 divide-x divide-[#0A2618]/10 border-y border-[#0A2618]/10"
            >
              <div className="py-3 pr-4">
                <dt className="font-mono text-[10px] uppercase tracking-widest text-[#0A2618]/45">
                  Client
                </dt>
                <dd className="mt-1 text-sm font-semibold text-[#0B2818]">
                  {project.client}
                </dd>
              </div>
              <div className="py-3 pl-4">
                <dt className="font-mono text-[10px] uppercase tracking-widest text-[#0A2618]/45">
                  Year
                </dt>
                <dd className="mt-1 text-sm font-semibold text-[#0B2818]">
                  {project.year}
                </dd>
              </div>
            </motion.dl>

            <motion.p
              variants={itemVariants}
              className="text-sm md:text-base text-[#0B2818]/70 leading-relaxed font-medium"
            >
              {project.description}
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-3">
              <span className="block font-mono text-[10px] uppercase tracking-widest text-[#0A2618]/45">
                Key Technologies &amp; Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-semibold tracking-wider uppercase text-[#0B2818]/70 border border-[#0A2618]/15 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
