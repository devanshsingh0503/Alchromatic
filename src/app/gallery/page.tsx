import type { Metadata } from "next";
import { siteConfig } from "@/data/config";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import StackSection from "@/components/StackSection";
import ParallaxElement from "@/components/ParallaxElement";

export const metadata: Metadata = {
  title: `Gallery | ${siteConfig.brand.name}`,
  description: `See the world-class facilities and training environment at ${siteConfig.brand.name}.`,
};

// Alternating parallax speeds for layered depth
const gallerySpeeds = [60, 35, 50, 25, 45, 30];
const feedSpeeds    = [40, 55, 30, 50, 35, 60];

export default function GalleryPage() {
  return (
    <div className="bg-black text-white">

      {/* ── SECTION 1 · HERO ─────────────────────────────── */}
      <StackSection index={0} bg="#000" className="pt-24 pb-14 xl:pt-32 min-h-[60vh] flex items-center">
        <ParallaxElement speed={105} className="pointer-events-none absolute -top-20 right-0 w-[500px] h-[500px] rounded-full bg-white/[0.025] blur-3xl" />
        <ParallaxElement speed={65} className="pointer-events-none absolute bottom-0 left-1/4 w-[280px] h-[280px] rounded-full bg-white/[0.015] blur-2xl" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">
          <ParallaxElement speed={22}>
            <p className="font-poppins text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4">Inside Apex</p>
            <h1 className="font-rebelton text-[clamp(3rem,8vw,7rem)] leading-[0.9] text-white">Our Facility</h1>
          </ParallaxElement>
          <p className="mt-5 font-poppins text-sm text-white/60 max-w-xl leading-relaxed">
            Step inside the most premium fitness facility in the city. Every corner, every machine, every detail — built for champions.
          </p>
        </div>
      </StackSection>

      {/* ── SECTION 2 · FEATURED GRID ────────────────────── */}
      <StackSection index={1} bg="#050505" className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {siteConfig.gallery.map((item, i) => (
              <ParallaxElement key={i} speed={gallerySpeeds[i] ?? 40} className={item.span}>
                <div className="group relative overflow-hidden rounded-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.url}
                    alt={item.title}
                    className="h-full min-h-[260px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="font-poppins text-xs uppercase tracking-[0.12em] text-white">{item.title}</p>
                  </div>
                </div>
              </ParallaxElement>
            ))}
          </div>
        </div>
      </StackSection>

      {/* ── SECTION 3 · FEED STRIP ───────────────────────── */}
      <StackSection index={2} bg="#0a0a0a" className="py-16">
        <ParallaxElement speed={85} className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-white/[0.02] blur-3xl" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ParallaxElement speed={16}>
            <p className="font-poppins text-[10px] uppercase tracking-[0.3em] text-white/40 mb-8 text-center">More From Our Feed</p>
          </ParallaxElement>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {siteConfig.instagramFeed.map((url, i) => (
              <ParallaxElement key={i} speed={feedSpeeds[i] ?? 40}>
                <div className="group relative aspect-square overflow-hidden rounded-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={url} alt={`Apex Fitness ${i + 1}`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
                </div>
              </ParallaxElement>
            ))}
          </div>
        </div>
      </StackSection>

      {/* ── SECTION 4 · CTA ──────────────────────────────── */}
      <StackSection index={3} bg="#000" className="py-24 min-h-[50vh] flex items-center">
        <ParallaxElement speed={120} className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.03] blur-3xl" />
        <div className="mx-auto max-w-2xl px-6 text-center w-full relative z-10">
          <ParallaxElement speed={20}>
            <h2 className="font-rebelton text-[clamp(2rem,5vw,3.5rem)] leading-none text-white">Come See It In Person</h2>
          </ParallaxElement>
          <p className="mt-5 font-poppins text-sm text-white/50 leading-relaxed">
            Photos don&apos;t do it justice. Book a free tour and experience the facility firsthand.
          </p>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-10 py-4 font-poppins text-sm font-medium tracking-wide text-black transition hover:bg-white/90">
            Book a Tour <ArrowRight size={16} />
          </Link>
        </div>
      </StackSection>

    </div>
  );
}
