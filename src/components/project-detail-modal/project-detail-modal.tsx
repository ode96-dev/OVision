import { ProjectItem } from "@/lib/agency-logic";
import { X } from "lucide-react";
import Image from "next/image";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectDetailModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#EAECE6] rounded-3xl overflow-hidden shadow-2xl border border-[#0A2618]/20 flex flex-col max-h-[90vh]">
        <div className="relative aspect-video w-full bg-slate-300">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black text-white transition-colors"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
          <div className="absolute bottom-4 left-4 bg-[#0B2818]/90 backdrop-blur-xs text-white text-xs font-mono px-3 py-1 rounded-lg">
            Index: {project.indexStr} / 05
          </div>
        </div>

        <div className="p-6 md:p-8 overflow-y-auto space-y-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#0084FF]">
                {project.category}
              </span>
              <h3 className="text-2xl font-bold text-[#0B2818] mt-1">
                {project.title}
              </h3>
              <p className="text-xs text-[#0B2818]/60 font-semibold mt-0.5">
                Client: {project.client} · Year: {project.year}
              </p>
            </div>
          </div>

          <p className="text-sm text-[#0B2818]/80 leading-relaxed">
            {project.description}
          </p>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0B2818]">
              Key Technologies & Stack:
            </span>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold bg-[#0B2818] text-white px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-[#0A2618]/10 flex items-center justify-between">
            <span className="text-xs text-[#0B2818]/60">
              Verified Production Deployment
            </span>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-[#0D3B24] hover:bg-[#0B2818] text-white text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Done Viewing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
