import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/config";
import { ArrowRight } from "lucide-react";
import StackSection from "@/components/StackSection";
import ParallaxElement from "@/components/ParallaxElement";

export const metadata: Metadata = {
  title: `Services | ${siteConfig.brand.name}`,
  description: `Explore all services at ${siteConfig.brand.name} — Personal Training, Olympic Lifting, Nutrition, Group Classes, InBody Analysis, and more.`,
};

export default function ServicesPage() {
  return (
    <div className="bg-black text-white">

      {/* ── SECTION 1 · HERO ─────────────────────────────── */}
      <StackSection index={0} bg="#000" className="pt-24 pb-16 xl:pt-32 min-h-[60vh] flex items-center">
        <ParallaxElement speed={100} className="pointer-events-none absolute -top-24 -right-24 w-[560px] h-[560px] rounded-full bg-white/[0.025] blur-3xl" />
        <ParallaxElement speed={70} className="pointer-events-none absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-white/[0.015] blur-2xl" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">
          <ParallaxElement speed={22}>
            <p className="font-poppins text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4">What We Offer</p>
            <h1 className="font-rebelton text-[clamp(3rem,8vw,7rem)] leading-[0.9] text-white max-w-3xl">Our Services</h1>
          </ParallaxElement>
          <p className="mt-6 font-poppins text-sm text-white/60 max-w-xl leading-relaxed">
            From personalized training to elite recovery — every service at {siteConfig.brand.name} is designed to push you beyond your limits.
          </p>
        </div>
      </StackSection>

      {/* ── SECTION 2 · GRID ─────────────────────────────── */}
      <StackSection index={1} bg="#050505" className="py-20">
        <ParallaxElement speed={80} className="pointer-events-none absolute top-1/2 right-0 w-[350px] h-[350px] rounded-full bg-white/[0.018] blur-3xl" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {siteConfig.services.map((svc, idx) => (
              <ParallaxElement key={idx} speed={10 + (idx % 3) * 8}>
                <div className="group flex flex-col justify-between rounded-3xl border border-white/8 bg-white/4 p-8 transition-all duration-300 hover:border-white/20 hover:bg-white/8 hover:-translate-y-1 h-full">
                  <div>
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-white/6">
                        <span className="font-rebelton text-base text-white/50">{String(idx + 1).padStart(2, "0")}</span>
                      </div>
                      <ArrowRight size={18} className="text-white/20 group-hover:text-white/60 transition-colors mt-1" />
                    </div>
                    <h2 className="font-poppins text-base font-medium text-white mb-3">{svc.title}</h2>
                    <p className="font-poppins text-xs text-white/50 leading-relaxed">{svc.description}</p>
                  </div>
                  <Link href="/contact" className="mt-8 inline-flex items-center gap-2 font-poppins text-[10px] uppercase tracking-[0.15em] text-white/40 hover:text-white transition group-hover:text-white/70">
                    Enquire Now <ArrowRight size={12} />
                  </Link>
                </div>
              </ParallaxElement>
            ))}
          </div>
        </div>
      </StackSection>

      {/* ── SECTION 3 · CTA ──────────────────────────────── */}
      <StackSection index={2} bg="#0a0a0a" className="py-24 min-h-[50vh] flex items-center">
        <ParallaxElement speed={110} className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.025] blur-3xl" />
        <div className="mx-auto max-w-3xl px-6 text-center w-full relative z-10">
          <ParallaxElement speed={20}>
            <p className="font-poppins text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4">Personalised For You</p>
            <h2 className="font-rebelton text-[clamp(2rem,5vw,4rem)] leading-none text-white">Not Sure Where To Start?</h2>
          </ParallaxElement>
          <p className="mt-5 font-poppins text-sm text-white/50 leading-relaxed max-w-lg mx-auto">
            Our coaches will assess your fitness level, understand your goals, and create a completely personalised plan — at no cost during your free trial.
          </p>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-10 py-4 font-poppins text-sm font-medium tracking-wide text-black transition hover:bg-white/90">
            Book Free Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </StackSection>

    </div>
  );
}
