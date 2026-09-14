import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/config";
import { ArrowRight } from "lucide-react";
import StackSection from "@/components/StackSection";
import ParallaxElement from "@/components/ParallaxElement";

export const metadata: Metadata = {
  title: `About Us | ${siteConfig.brand.name}`,
  description: `Learn the story behind ${siteConfig.brand.name} — premier fine art supply atelier with museum-grade pigments, master canvases, and Huion digital creative tools.`,
};

const values = [
  { title: "Pigment Purity", body: "We source single-origin, unadulterated mineral and organic pigments with zero fillers, guaranteeing maximum chromatic richness." },
  { title: "Archival Longevity", body: "Art should endure for centuries. Every canvas substrate, binder, paper, and varnish meets rigorous museum conservation standards." },
  { title: "Creative Community", body: "An atelier thrives through its creators. We host masterclasses, portfolio reviews, and collaborative gallery showcases." },
  { title: "Artisan Precision", body: "From hand-milled oil colors to calibrated 8K Huion digital pen displays, every tool in our collection is refined for absolute control." },
];

const team = [
  { name: "Elena Rostova", title: "Master Colorist & Chemist", cert: "MFA Fine Arts · Color Science" },
  { name: "Julian Vance", title: "Digital Atelier Director", cert: "Huion Certified Specialist · Concept Artist" },
  { name: "Marcus Sterling", title: "Archival Framing Master", cert: "PPFA Certified Framer · 20+ Yrs Exp" },
  { name: "Sora Takahashi", title: "Paper & Pigment Curator", cert: "Washi Master Artisan · Kyoto Guild" },
  { name: "Aria Chen", title: "Studio Workshop Lead", cert: "Classical Realism Academy · Instructor" },
  { name: "David Miller", title: "Materials Specialist", cert: "Studio Supply Logistics · Archival Care" },
];

export default function AboutPage() {
  return (
    <div className="bg-black text-white">

      {/* ── SECTION 1 · HERO ─────────────────────────────── */}
      <StackSection index={0} bg="#000" className="pt-24 pb-20 xl:pt-32 xl:pb-28 min-h-[70vh] flex items-center">
        <ParallaxElement speed={110} className="pointer-events-none absolute -top-24 right-0 w-[640px] h-[640px] rounded-full bg-white/[0.025] blur-3xl" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">
          <ParallaxElement speed={18}>
            <p className="font-poppins text-[10px] uppercase tracking-[0.3em] text-white/40 mb-3">Our Story</p>
            <h1 className="font-rebelton text-[clamp(2.75rem,7vw,6.5rem)] leading-[0.98] text-white max-w-3xl">
              Crafted for<br />Creators
            </h1>
            <p className="mt-6 font-poppins text-sm sm:text-base text-white/60 max-w-xl leading-relaxed">
              {siteConfig.brand.description}
            </p>
          </ParallaxElement>
        </div>
      </StackSection>

      {/* ── SECTION 2 · STORY ────────────────────────────── */}
      <StackSection index={1} bg="#050505" className="py-24">
        <ParallaxElement speed={80} className="pointer-events-none absolute top-0 left-1/2 w-[480px] h-[480px] rounded-full bg-white/[0.02] blur-3xl" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
            {/* Video showcase */}
            <div className="relative flex items-center justify-center">
              <ParallaxElement speed={30} className="w-full">
                <div className="group relative overflow-hidden rounded-3xl border border-white/12 bg-white/4 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-md">
                  <video
                    src="/huion-hero.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="h-[440px] xl:h-[480px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{
                      transform: "translate3d(0, 0, 0)",
                      backfaceVisibility: "hidden",
                    }}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="pointer-events-none absolute bottom-5 left-6 right-6 flex items-center justify-between">
                    <div>
                      <p className="font-poppins text-[10px] uppercase tracking-[0.2em] text-white/50">Atelier Studio</p>
                      <p className="font-poppins text-xs font-medium text-white/90">Pure Chroma & Digital Craft</p>
                    </div>
                    <span className="flex size-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                </div>
              </ParallaxElement>
            </div>
            <div>
              <ParallaxElement speed={16}>
                <p className="font-poppins text-[10px] uppercase tracking-[0.3em] text-white/40 mb-3">Why Alchromatic</p>
                <h2 className="font-rebelton text-[clamp(2rem,5vw,4rem)] leading-tight text-white mb-6">More Than an Art Store</h2>
                <div className="space-y-5 font-poppins text-sm text-white/60 leading-relaxed">
                  <p>We founded {siteConfig.brand.name} because we believe every creator deserves access to extraordinary materials — without compromise or dilution.</p>
                  <p>Our ateliers house the finest fine art materials globally — hand-stretched Belgian linens, pure single-origin mineral pigments, Japanese sumi inks, and high-precision Huion interactive digital pen displays.</p>
                  <p>Preservation matters. That&apos;s why we offer museum-grade conservation framing and bespoke color consultation for working professionals.</p>
                </div>
                <div className="mt-8">
                  <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 font-poppins text-sm font-medium tracking-wide text-black transition hover:bg-white/90">
                    Visit Atelier <ArrowRight size={16} />
                  </Link>
                </div>
              </ParallaxElement>
            </div>
          </div>
        </div>
      </StackSection>

      {/* ── SECTION 3 · VALUES ───────────────────────────── */}
      <StackSection index={2} bg="#0a0a0a" className="py-24">
        <ParallaxElement speed={95} className="pointer-events-none absolute -bottom-20 right-0 w-[420px] h-[420px] rounded-full bg-white/[0.02] blur-3xl" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ParallaxElement speed={18}>
            <p className="font-poppins text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4">What We Stand For</p>
            <h2 className="font-rebelton text-[clamp(2rem,5vw,4rem)] leading-none text-white mb-14">Our Values</h2>
          </ParallaxElement>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <ParallaxElement key={i} speed={10 + i * 8}>
                <div className="rounded-2xl border border-white/8 bg-white/4 p-7 hover:border-white/20 transition h-full">
                  <div className="font-rebelton text-5xl text-white/10 mb-4">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="font-poppins text-sm font-medium text-white mb-3">{v.title}</h3>
                  <p className="font-poppins text-xs text-white/50 leading-relaxed">{v.body}</p>
                </div>
              </ParallaxElement>
            ))}
          </div>
        </div>
      </StackSection>

      {/* ── SECTION 4 · TEAM ─────────────────────────────── */}
      <StackSection index={3} bg="#030303" className="py-24">
        <ParallaxElement speed={85} className="pointer-events-none absolute top-0 left-0 w-[380px] h-[380px] rounded-full bg-white/[0.015] blur-3xl" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ParallaxElement speed={16}>
            <p className="font-poppins text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4">The Experts</p>
            <h2 className="font-rebelton text-[clamp(2rem,5vw,4rem)] leading-none text-white mb-14">Our Team</h2>
          </ParallaxElement>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <ParallaxElement key={i} speed={8 + (i % 3) * 7}>
                <div className="flex items-center gap-5 rounded-2xl border border-white/8 bg-white/4 p-6 hover:border-white/20 transition">
                  <div className="size-14 shrink-0 rounded-full bg-white/10 flex items-center justify-center">
                    <span className="font-rebelton text-sm text-white/60">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <p className="font-poppins text-sm font-medium text-white">{member.name}</p>
                    <p className="font-poppins text-xs text-white/60 mt-0.5">{member.title}</p>
                    <p className="font-poppins text-[10px] text-white/30 mt-1 uppercase tracking-[0.08em]">{member.cert}</p>
                  </div>
                </div>
              </ParallaxElement>
            ))}
          </div>
        </div>
      </StackSection>

      {/* ── SECTION 5 · CTA ──────────────────────────────── */}
      <StackSection index={4} bg="#000" className="py-24 min-h-[50vh] flex items-center">
        <ParallaxElement speed={120} className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.03] blur-3xl" />
        <div className="mx-auto max-w-3xl px-6 text-center w-full relative z-10">
          <ParallaxElement speed={18}>
            <h2 className="font-rebelton text-[clamp(2rem,5vw,4rem)] leading-tight text-white">Ready to Create?</h2>
            <p className="mt-5 font-poppins text-sm text-white/50 leading-relaxed max-w-xl mx-auto">
              Visit our ateliers in Downtown and Westside, test our Huion digital displays, and discover pure pigment perfection.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-10 py-4 font-poppins text-sm font-medium tracking-wide text-black transition hover:bg-white/90">
                Get in Touch <ArrowRight size={16} />
              </Link>
            </div>
          </ParallaxElement>
        </div>
      </StackSection>

    </div>
  );
}
