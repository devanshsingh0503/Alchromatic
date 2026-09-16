import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/config";
import { ArrowRight } from "lucide-react";
import StackSection from "@/components/StackSection";
import ParallaxElement from "@/components/ParallaxElement";

export const metadata: Metadata = {
  title: `Supplies & Services | ${siteConfig.brand.name}`,
  description: `Explore curated fine art supplies, archival pigments, master canvases, and Huion digital creative displays at ${siteConfig.brand.name}.`,
};

const serviceCardStyles = [
  {
    tag: "Pure Pigment",
    colorName: "Ultramarine Blue",
    badge: "border-sky-400/40 bg-sky-500/15 text-sky-300",
    cardGlow: "hover:shadow-[0_12px_40px_-10px_rgba(56,189,248,0.35)]",
    cardBorder: "border-white/10 hover:border-sky-400/50",
    gradient: "from-sky-500/10 via-transparent to-transparent",
    accentOrb: "bg-sky-400/20",
    dot: "bg-sky-400",
  },
  {
    tag: "Digital Atelier",
    colorName: "Cyber Violet",
    badge: "border-purple-400/40 bg-purple-500/15 text-purple-300",
    cardGlow: "hover:shadow-[0_12px_40px_-10px_rgba(168,85,247,0.35)]",
    cardBorder: "border-white/10 hover:border-purple-400/50",
    gradient: "from-purple-500/10 via-transparent to-transparent",
    accentOrb: "bg-purple-400/20",
    dot: "bg-purple-400",
  },
  {
    tag: "Master Canvas",
    colorName: "Cadmium Honey",
    badge: "border-amber-400/40 bg-amber-500/15 text-amber-300",
    cardGlow: "hover:shadow-[0_12px_40px_-10px_rgba(251,191,36,0.35)]",
    cardBorder: "border-white/10 hover:border-amber-400/50",
    gradient: "from-amber-500/10 via-transparent to-transparent",
    accentOrb: "bg-amber-400/20",
    dot: "bg-amber-400",
  },
  {
    tag: "Archival Craft",
    colorName: "Crimson Rose",
    badge: "border-rose-400/40 bg-rose-500/15 text-rose-300",
    cardGlow: "hover:shadow-[0_12px_40px_-10px_rgba(244,63,94,0.35)]",
    cardBorder: "border-white/10 hover:border-rose-400/50",
    gradient: "from-rose-500/10 via-transparent to-transparent",
    accentOrb: "bg-rose-400/20",
    dot: "bg-rose-400",
  },
  {
    tag: "Fine Drafting",
    colorName: "Viridian Green",
    badge: "border-emerald-400/40 bg-emerald-500/15 text-emerald-300",
    cardGlow: "hover:shadow-[0_12px_40px_-10px_rgba(52,211,153,0.35)]",
    cardBorder: "border-white/10 hover:border-emerald-400/50",
    gradient: "from-emerald-500/10 via-transparent to-transparent",
    accentOrb: "bg-emerald-400/20",
    dot: "bg-emerald-400",
  },
  {
    tag: "Studio Class",
    colorName: "Solar Tangerine",
    badge: "border-orange-400/40 bg-orange-500/15 text-orange-300",
    cardGlow: "hover:shadow-[0_12px_40px_-10px_rgba(251,146,60,0.35)]",
    cardBorder: "border-white/10 hover:border-orange-400/50",
    gradient: "from-orange-500/10 via-transparent to-transparent",
    accentOrb: "bg-orange-400/20",
    dot: "bg-orange-400",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-black text-white">

      {/* ── SECTION 1 · HERO (COLOR SANCTUARY) ───────────── */}
      <StackSection index={0} bg="#040208" className="pt-28 pb-20 xl:pt-36 min-h-[65vh] flex items-center relative overflow-hidden">
        {/* Colorful Art Background Atmosphere */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <ParallaxElement speed={35} className="absolute -top-[10%] -bottom-[10%] inset-x-0 w-full h-[120%]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/services-color-bg.jpg"
              alt="Art supplier colorful pigments"
              className="h-full w-full object-cover object-center brightness-[1.05] contrast-[1.12] saturate-[1.25] mix-blend-screen opacity-75 lg:opacity-85"
            />
          </ParallaxElement>

          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-transparent to-black/85 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.15)_0%,rgba(0,0,0,0.72)_100%)] pointer-events-none" />

          {/* Static performant multi-radial glow — zero lag */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(245,158,11,0.22)_0%,transparent_50%),radial-gradient(ellipse_at_top_right,rgba(236,72,153,0.25)_0%,transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(56,189,248,0.22)_0%,transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(16,185,129,0.2)_0%,transparent_45%),radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.2)_0%,transparent_60%)] pointer-events-none" />

          {/* Linen canvas texture */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:26px_26px] opacity-[0.035] pointer-events-none" />
        </div>


        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">
          <ParallaxElement speed={18}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/45 px-3.5 py-1.5 backdrop-blur-md mb-4 shadow-[0_0_24px_rgba(236,72,153,0.25)]">
              <span className="flex size-2 rounded-full bg-gradient-to-r from-pink-400 via-amber-300 to-cyan-400 animate-pulse" />
              <span className="font-poppins text-[10px] uppercase tracking-[0.25em] text-white/90 font-medium">
                The Spectrum Atelier · What We Offer
              </span>
            </div>
            <h1 className="font-rebelton text-[clamp(2.75rem,7vw,6.5rem)] leading-[0.98] text-white max-w-3xl drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
              Supplies &amp; Services
            </h1>
            <p className="mt-6 font-poppins text-sm sm:text-base text-white/70 max-w-xl leading-relaxed">
              From pure single-origin pigments to professional Huion 4K pen displays and archival conservation framing — every offering at {siteConfig.brand.name} is designed to elevate your creative mastery into a celebration of color.
            </p>
          </ParallaxElement>
        </div>
      </StackSection>

      {/* ── SECTION 2 · GRID ─────────────────────────────── */}
      <StackSection index={1} bg="#050209" className="py-20 relative overflow-hidden">
        {/* Background ambience — performant static multi-radial glow */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(236,72,153,0.18)_0%,transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(56,189,248,0.18)_0%,transparent_50%),radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.14)_0%,transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:26px_26px] opacity-[0.03]" />
        </div>


        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {siteConfig.services.map((svc, idx) => {
              const style = serviceCardStyles[idx % serviceCardStyles.length];
              return (
                <ParallaxElement key={idx} speed={10 + (idx % 3) * 8}>
                  <div
                    className={`group relative flex flex-col justify-between rounded-3xl border ${style.cardBorder} bg-black/60 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 ${style.cardGlow} h-full overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.45)]`}
                  >
                    {/* Subtle top ambient glow gradient */}
                    <div
                      className={`pointer-events-none absolute -top-10 -right-10 size-32 rounded-full ${style.accentOrb} blur-2xl transition-opacity duration-300 opacity-50 group-hover:opacity-100`}
                    />
                    <div
                      className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${style.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                    />

                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-6">
                        <div
                          className={`flex size-12 items-center justify-center rounded-2xl border ${style.badge} font-rebelton text-base font-semibold shadow-inner transition-transform duration-300 group-hover:scale-110`}
                        >
                          {String(idx + 1).padStart(2, "0")}
                        </div>
                        <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-poppins text-[9px] uppercase tracking-wider text-white/70 backdrop-blur-sm">
                          <span className={`size-1.5 rounded-full ${style.dot}`} />
                          {style.tag}
                        </span>
                      </div>
                      <h2 className="font-poppins text-base font-medium text-white mb-3 group-hover:text-white transition-colors">
                        {svc.title}
                      </h2>
                      <p className="font-poppins text-xs text-white/65 leading-relaxed">
                        {svc.description}
                      </p>
                    </div>

                    <div className="relative z-10 mt-8 pt-4 border-t border-white/8 flex items-center justify-between">
                      <span className="font-poppins text-[10px] tracking-wider uppercase text-white/40 group-hover:text-white/70 transition-colors">
                        {style.colorName}
                      </span>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 font-poppins text-[11px] uppercase tracking-[0.12em] text-white/60 hover:text-white transition-all group-hover:text-white group-hover:translate-x-1"
                      >
                        Enquire Now <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </ParallaxElement>
              );
            })}
          </div>
        </div>
      </StackSection>

      {/* ── SECTION 3 · CTA ──────────────────────────────── */}
      <StackSection index={2} bg="#0a0a0a" className="py-24 min-h-[50vh] flex items-center">
        <ParallaxElement speed={110} className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.025] blur-3xl" />
        <div className="mx-auto max-w-3xl px-6 text-center w-full relative z-10">
          <ParallaxElement speed={18}>
            <p className="font-poppins text-[10px] uppercase tracking-[0.3em] text-white/40 mb-3">Bespoke Studio Support</p>
            <h2 className="font-rebelton text-[clamp(2rem,5vw,4rem)] leading-tight text-white">Custom Studio Inquiries?</h2>
            <p className="mt-5 font-poppins text-sm text-white/50 leading-relaxed max-w-lg mx-auto">
              Our material specialists and master colorists consult on bespoke pigment formulation, bulk academy supply, and archival conservation framing — tailored to your creative vision.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-10 py-4 font-poppins text-sm font-medium tracking-wide text-black transition hover:bg-white/90">
                Consult Our Specialists <ArrowRight size={16} />
              </Link>
            </div>
          </ParallaxElement>
        </div>
      </StackSection>

    </div>
  );
}
