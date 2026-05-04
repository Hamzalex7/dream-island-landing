export function Clouds() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute top-[8%] left-0 animate-float-cloud" style={{ animationDuration: "70s" }}>
        <Cloud size={120} />
      </div>
      <div className="absolute top-[22%] left-0 animate-float-cloud" style={{ animationDuration: "95s", animationDelay: "-30s" }}>
        <Cloud size={80} />
      </div>
      <div className="absolute top-[40%] left-0 animate-float-cloud" style={{ animationDuration: "110s", animationDelay: "-60s" }}>
        <Cloud size={160} />
      </div>
      <div className="absolute top-[60%] left-0 animate-float-cloud" style={{ animationDuration: "85s", animationDelay: "-15s" }}>
        <Cloud size={100} />
      </div>
    </div>
  );
}

function Cloud({ size }: { size: number }) {
  return (
    <svg width={size} height={size * 0.6} viewBox="0 0 100 60" fill="white" style={{ filter: "drop-shadow(0 6px 14px oklch(0.5 0.15 230 / 0.2))", opacity: 0.92 }}>
      <ellipse cx="30" cy="40" rx="22" ry="18" />
      <ellipse cx="55" cy="32" rx="26" ry="22" />
      <ellipse cx="78" cy="42" rx="18" ry="15" />
      <ellipse cx="48" cy="46" rx="30" ry="12" />
    </svg>
  );
}