import confetti from "canvas-confetti";
import { CheckCircle2, X } from "lucide-react";
import { useState } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("web-app");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#0084FF", "#0D3B24", "#4EBD68", "#FFFFFF"],
    });

    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#EAECE6] rounded-sm p-6 sm:p-8 shadow-2xl border border-[#0A2618]/20">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#0A2618]/5 text-[#0B2818] hover:bg-[#0B2818] hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {submitted ? (
          <div className="py-12 flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#0D3B24] text-[#4EBD68] flex items-center justify-center">
              <CheckCircle2 size={36} />
            </div>
            <h3 className="text-2xl font-bold text-[#0B2818]">
              Inquiry Received
            </h3>
            <p className="text-sm text-[#0B2818]/70 max-w-xs">
              Thank you, {name || "Partner"}. A senior technology lead from
              OVision will reach out within 2 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#0084FF]">
                Get Started
              </span>
              <h3 className="text-2xl sm:text-3xl font-normal text-[#0B2818] tracking-tight">
                Architect Your Solution
              </h3>
              <p className="text-xs text-[#0B2818]/70 mt-1">
                Tell us about your digital project goals and timeline.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div>
                <label className="block text-xs font-semibold text-[#0B2818] mb-1">
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Liamza Vance"
                  className="w-full bg-white border border-[#0A2618]/20 rounded-xl px-4 py-2.5 text-xs text-[#0B2818] outline-none focus:border-[#0B2818]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0B2818] mb-1">
                  Work Email
                </label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="liamza@company.com"
                  className="w-full bg-white border border-[#0A2618]/20 rounded-xl px-4 py-2.5 text-xs text-[#0B2818] outline-none focus:border-[#0B2818]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0B2818] mb-1">
                  Core Service Interest
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-white border border-[#0A2618]/20 rounded-xl px-4 py-2.5 text-xs text-[#0B2818] outline-none focus:border-[#0B2818]"
                >
                  <option value="web-app">Web & Cloud Architecture</option>
                  <option value="ecommerce">Headless eCommerce</option>
                  <option value="mobile">Mobile App Engineering</option>
                  <option value="seo">SEO & Infrastructure Tuning</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0B2818] mb-1">
                  Project Brief
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Briefly describe what you're looking to build..."
                  className="w-full bg-white border border-[#0A2618]/20 rounded-xl px-4 py-2 text-xs text-[#0B2818] outline-none focus:border-[#0B2818] resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-[#0B2818] hover:bg-[#0D3B24] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer mt-2"
            >
              <span>Transmit Inquiry</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
