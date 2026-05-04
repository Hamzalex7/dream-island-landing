import { Heart, Lock, X, ShieldCheck } from "lucide-react";
import { useEffect } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export function SponsorModal({ open, onClose }: Props) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center sm:items-center bg-black/60 backdrop-blur-sm animate-pop-in"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full sm:max-w-md bg-white rounded-t-3xl sm:rounded-3xl shadow-pop p-6 sm:p-8 animate-slide-up sm:animate-pop-in"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-muted/70 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex justify-center -mt-2 mb-4">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[oklch(0.85_0.18_20)] to-[oklch(0.78_0.2_10)] flex items-center justify-center shadow-pop">
            <Heart className="w-10 h-10 text-white animate-heartbeat fill-white" />
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-foreground">
          One Quick Step!
        </h2>
        <p className="mt-3 text-center text-muted-foreground leading-relaxed">
          To keep this project running at zero cost, we ask that you install one of our sponsor apps.
          It takes less than 5 minutes!
        </p>

        <div className="mt-6 space-y-3">
          <button
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-[oklch(0.78_0.18_150)] to-[oklch(0.72_0.2_160)] text-white font-bold text-lg shadow-pop hover:scale-[1.02] transition flex items-center justify-center gap-2"
          >
            <ShieldCheck className="w-5 h-5" />
            Install Sponsor App
          </button>

          <button
            disabled
            className="w-full py-4 rounded-2xl bg-muted text-muted-foreground font-semibold cursor-not-allowed flex items-center justify-center gap-2"
          >
            <Lock className="w-4 h-4" />
            Proceed to Download
          </button>
          <p className="text-xs text-center text-muted-foreground">
            Unlocks automatically after installation completes.
          </p>
        </div>

        <div className="mt-5 p-3 rounded-xl bg-[oklch(0.96_0.05_85)] border border-[oklch(0.85_0.12_85)]">
          <p className="text-xs text-center text-[oklch(0.4_0.1_70)]">
            ⚠️ Disable AdBlockers / VPNs if no offers show up.
          </p>
        </div>
      </div>
    </div>
  );
}