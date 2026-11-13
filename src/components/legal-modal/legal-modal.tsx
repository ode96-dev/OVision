import { X } from "lucide-react";

interface LegalModalProps {
  type: "cookies" | "privacy" | "terms" | null;
  onClose: () => void;
}

export function LegalModal({ type, onClose }: LegalModalProps) {
  if (!type) return null;

  const titles = {
    cookies: "Cookie Policy",
    privacy: "Privacy Policy",
    terms: "Terms & Conditions",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#EAECE6] rounded-md p-6 sm:p-8 shadow-2xl border border-[#0A2618]/20 space-y-4">
        <div className="flex items-center justify-between border-b border-[#0A2618]/10 pb-3">
          <h3 className="text-xl font-bold text-[#0B2818]">{titles[type]}</h3>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-[#0B2818]/60 hover:text-[#0B2818]"
          >
            <X size={18} />
          </button>
        </div>

        <div className="text-xs text-[#0B2818]/80 leading-relaxed space-y-3 max-h-60 overflow-y-auto">
          <p>
            At OVision, we design and operate world-class digital experiences
            with uncompromising commitments to data privacy, intellectual
            property security, and transparent user rights.
          </p>
          <p>
            We strictly limit telemetry to operational performance monitoring
            and never monetize client data or share telemetry with third-party
            data brokers.
          </p>
          <p>
            All enterprise client agreements adhere to strict non-disclosure,
            dedicated repository sovereignty, and GDPR/CCPA regulatory
            standards.
          </p>
        </div>

        <div className="pt-3 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-[#0B2818] text-white text-xs font-bold uppercase tracking-wider"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
}
