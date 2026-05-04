import { Apple, Smartphone, Monitor, Laptop } from "lucide-react";

type Platform = "ios" | "android" | "windows" | "macos";

const config: Record<Platform, { label: string; sub: string; icon: React.ReactNode; bg: string }> = {
  ios: {
    label: "App Store",
    sub: "Download on the",
    icon: <Apple className="w-7 h-7" />,
    bg: "bg-[oklch(0.25_0.03_250)] text-white",
  },
  android: {
    label: "Google Play",
    sub: "Get it on",
    icon: <Smartphone className="w-7 h-7" />,
    bg: "bg-[oklch(0.55_0.18_150)] text-white",
  },
  windows: {
    label: "Windows",
    sub: "Download for",
    icon: <Monitor className="w-7 h-7" />,
    bg: "bg-[oklch(0.6_0.18_240)] text-white",
  },
  macos: {
    label: "macOS",
    sub: "Download for",
    icon: <Laptop className="w-7 h-7" />,
    bg: "bg-[oklch(0.45_0.04_280)] text-white",
  },
};

export function DownloadButton({
  platform,
  onClick,
  size = "md",
}: {
  platform: Platform;
  onClick: () => void;
  size?: "md" | "lg";
}) {
  const c = config[platform];
  return (
    <button
      onClick={onClick}
      className={`${c.bg} ${size === "lg" ? "px-6 py-4" : "px-5 py-3"} rounded-2xl shadow-pop hover:scale-105 active:scale-95 transition-transform flex items-center gap-3 font-bold`}
    >
      {c.icon}
      <div className="text-left leading-tight">
        <div className="text-[10px] font-medium opacity-80 uppercase tracking-wide">{c.sub}</div>
        <div className="text-base">{c.label}</div>
      </div>
    </button>
  );
}