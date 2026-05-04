import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import {
  Home as HomeIcon,
  Users,
  HeartHandshake,
  Sparkles,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import { SponsorModal } from "@/components/SponsorModal";
import { DownloadButton } from "@/components/DownloadButton";
import { Clouds } from "@/components/Clouds";
import logo from "@/assets/logo.png";
import gameplay1 from "@/assets/gameplay-1.jpg";
import gameplay2 from "@/assets/gameplay-2.jpg";
import gameplay3 from "@/assets/gameplay-3.jpg";
import gameplay4 from "@/assets/gameplay-4.jpg";
import virusTotal from "@/assets/virustotal.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Tomodachi Life: Living the Dream — Mobile Port" },
      {
        name: "description",
        content:
          "Download the fan-made mobile port of Tomodachi Life: Living the Dream. Build your island, create Miis, and live the cozy chaos. Free on iOS, Android, Windows & macOS.",
      },
    ],
  }),
});

const features = [
  {
    icon: HomeIcon,
    title: "Build Your Island",
    desc: "Decorate apartments, shops, and beaches. Make every corner feel like home.",
    color: "from-[oklch(0.85_0.15_220)] to-[oklch(0.78_0.18_240)]",
  },
  {
    icon: Users,
    title: "Create Your Miis",
    desc: "Design quirky characters with unique voices, looks, and personalities.",
    color: "from-[oklch(0.85_0.18_20)] to-[oklch(0.8_0.2_30)]",
  },
  {
    icon: HeartHandshake,
    title: "Drama & Romance",
    desc: "Watch friendships bloom, rivalries spark, and weddings happen.",
    color: "from-[oklch(0.86_0.14_350)] to-[oklch(0.82_0.18_340)]",
  },
  {
    icon: Sparkles,
    title: "Events & Surprises",
    desc: "Daily mini-games, holidays, and chaotic island moments await.",
    color: "from-[oklch(0.88_0.16_95)] to-[oklch(0.82_0.18_70)]",
  },
];

const screenshots = [gameplay1, gameplay2, gameplay3, gameplay4];

function Index() {
  const [modalOpen, setModalOpen] = useState(false);
  const open = () => setModalOpen(true);
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!sliderRef.current) return;
    const amount = sliderRef.current.clientWidth * 0.8;
    sliderRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      {/* HERO */}
      <section className="relative bg-gradient-sky pb-16 pt-8 sm:pt-12">
        <Clouds />
        <div className="relative mx-auto max-w-6xl px-4 text-center">
          <img
            src={logo}
            alt="Tomodachi Life: Living the Dream logo"
            width={768}
            height={512}
            className="mx-auto w-64 sm:w-80 md:w-96 animate-bob"
          />

          <div className="mt-4 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 backdrop-blur-md shadow-soft border border-white">
            <Sparkles className="w-4 h-4 text-[oklch(0.7_0.18_60)]" />
            <span className="font-bold text-sm sm:text-base text-foreground">
              Your island. Your Miis. Your chaos.
            </span>
          </div>

          <h1 className="sr-only">Tomodachi Life: Living the Dream — Fan-made Mobile Port</h1>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <DownloadButton platform="ios" onClick={open} />
            <DownloadButton platform="android" onClick={open} />
            <DownloadButton platform="windows" onClick={open} />
            <DownloadButton platform="macos" onClick={open} />
          </div>

          <div className="mt-5 flex flex-wrap justify-center gap-2">
            <span className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-mint text-mint-foreground text-sm font-bold shadow-soft">
              <CheckCircle2 className="w-4 h-4" /> Free to Download
            </span>
            <span className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-lavender text-lavender-foreground text-sm font-bold shadow-soft">
              ✨ The Mobile Port
            </span>
          </div>

          <div className="mt-12 mx-auto max-w-md">
            <div className="rounded-3xl bg-white p-3 sm:p-4 shadow-pop rotate-[-1deg] hover:rotate-0 transition-transform">
              <img
                src={gameplay1}
                alt="Gameplay screenshot showing a colorful island apartment"
                width={768}
                height={1280}
                className="w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground">Life on the Island</h2>
          <p className="mt-3 text-muted-foreground text-lg">Everything you love, in your pocket.</p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-card rounded-3xl p-7 shadow-soft hover:shadow-pop hover:scale-[1.03] transition-all text-left border border-border"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${f.color} flex items-center justify-center shadow-pop`}>
                  <f.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="mt-5 text-xl font-extrabold">{f.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAFETY */}
      <section className="relative py-20 px-4 bg-gradient-sky overflow-hidden">
        <Clouds />
        <div className="relative mx-auto max-w-3xl">
          <div className="rounded-3xl bg-white/60 backdrop-blur-xl border border-white/80 p-6 sm:p-10 shadow-pop">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-full bg-gradient-mint flex items-center justify-center shadow-soft">
                <ShieldCheck className="w-7 h-7 text-white" />
              </div>
              <span className="px-3 py-1 rounded-full bg-mint text-mint-foreground text-xs font-bold">
                100% CLEAN
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-center">Safety Verified</h2>
            <p className="mt-3 text-center text-muted-foreground">
              Every file is scanned by <strong>VirusTotal</strong> across 91 antivirus engines before
              release. Your device stays safe — that's a promise.
            </p>

            <div className="mt-6 rounded-2xl overflow-hidden bg-white shadow-soft border border-border relative">
              <img
                src={virusTotal}
                alt="VirusTotal scan result showing 0 of 91 engines flagged"
                width={1024}
                height={640}
                loading="lazy"
                className="w-full"
              />
              <div className="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-[oklch(0.65_0.2_150)] text-white text-xs font-extrabold shadow-pop flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> 0/91 Engines Flagged
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GAMEPLAY SLIDER */}
      <section className="py-20 px-4 bg-background">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between mb-8 px-2">
            <div>
              <h2 className="text-3xl sm:text-5xl font-extrabold">Peek Inside</h2>
              <p className="mt-2 text-muted-foreground text-lg">Real gameplay. Real cozy.</p>
            </div>
            <div className="hidden sm:flex gap-2">
              <button
                onClick={() => scroll("left")}
                aria-label="Previous"
                className="w-12 h-12 rounded-full bg-card shadow-soft hover:shadow-pop hover:scale-110 transition flex items-center justify-center"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => scroll("right")}
                aria-label="Next"
                className="w-12 h-12 rounded-full bg-card shadow-soft hover:shadow-pop hover:scale-110 transition flex items-center justify-center"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="relative">
            <div
              ref={sliderRef}
              className="no-scrollbar flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4"
            >
              {screenshots.map((src, i) => (
                <div
                  key={i}
                  className="snap-center shrink-0 w-[78%] sm:w-[42%] md:w-[30%] rounded-3xl bg-white p-3 shadow-pop"
                >
                  <img
                    src={src}
                    alt={`Gameplay screenshot ${i + 1}`}
                    width={768}
                    height={1280}
                    loading="lazy"
                    className="w-full rounded-2xl"
                  />
                </div>
              ))}
            </div>

            <div className="sm:hidden flex justify-center gap-2 mt-4">
              <button
                onClick={() => scroll("left")}
                aria-label="Previous"
                className="w-12 h-12 rounded-full bg-card shadow-soft flex items-center justify-center"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => scroll("right")}
                aria-label="Next"
                className="w-12 h-12 rounded-full bg-card shadow-soft flex items-center justify-center"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 px-4 bg-gradient-sunny overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Clouds />
        </div>
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-4xl sm:text-6xl font-extrabold text-[oklch(0.25_0.08_60)] drop-shadow-sm">
            Ready to Start Living?
          </h2>
          <p className="mt-4 text-lg text-[oklch(0.3_0.08_60)] font-semibold">
            Join thousands of players already on the island.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <DownloadButton platform="ios" onClick={open} size="lg" />
            <DownloadButton platform="android" onClick={open} size="lg" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[oklch(0.2_0.04_260)] text-white/80 py-10 px-4">
        <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>© 2026 Fan-made Port · Not affiliated with Nintendo.</p>
          <nav className="flex gap-6">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </nav>
        </div>
      </footer>

      <SponsorModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
