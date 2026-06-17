"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/config";
import { ChevronDown, ArrowRight } from "lucide-react";
import StackSection from "@/components/StackSection";
import ParallaxElement from "@/components/ParallaxElement";

const stats = [
  { value: "5000+", label: "Members" },
  { value: "15+", label: "Expert Trainers" },
  { value: "10+", label: "Programs" },
  { value: "2", label: "Locations" },
];

const features = [
  "Steam, Sauna & Ice Bath",
  "InBody Body Analysis",
  "Olympic Lifting Platform",
  "Premium Locker Rooms",
  "Cardio Theatre",
  "Group Fitness Classes",
];

export default function HomePage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => { videoRef.current?.play().catch(() => {}); }, []);

  return (
    <div className="bg-black text-white">

      {/* ── SECTION 1 · HERO ─────────────────────────────── */}
      <StackSection index={0} bg="#000" className="min-h-screen flex items-end">
        {/* Parallax video bg — drifts up slower than scroll */}
        <ParallaxElement speed={80} className="absolute inset-0 h-[115%] w-full" style={{ top: "-7.5%" }}>
          <video
            ref={videoRef}
            src="/Herosectionvideo.webm"
            autoPlay loop muted playsInline
            className="h-full w-full object-cover"
          />
        </ParallaxElement>

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10">
          <span className="font-poppins text-[10px] uppercase tracking-[0.2em] text-white/60 border border-white/20 rounded-full px-5 py-2 backdrop-blur-sm bg-black/20">
            {siteConfig.brand.badge}
          </span>
        </div>

        <div className="relative z-10 w-full pb-28 xl:pb-24 px-6 lg:px-12 xl:px-20">
          <div className="max-w-7xl mx-auto">
            <ParallaxElement speed={12}>
              <p className="font-poppins text-xs uppercase tracking-[0.3em] text-white/50 mb-4">
                Elite · Premium · Performance
              </p>
              <h1 className="font-rebelton text-[clamp(3rem,10vw,8rem)] leading-[0.9] tracking-tight text-white">
                {siteConfig.brand.name}
              </h1>
              <p className="mt-5 font-poppins text-sm sm:text-base text-white/60 max-w-lg leading-relaxed">
                {siteConfig.brand.tagline} The city&apos;s most premium fitness facility — where science meets strength.
              </p>
            </ParallaxElement>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 font-poppins text-sm font-medium tracking-wide text-black transition-all hover:bg-white/90 hover:gap-3">
                Book Free Trial <ArrowRight size={16} />
              </Link>
              <Link href="/services" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-3.5 font-poppins text-sm font-medium tracking-wide text-white backdrop-blur-sm transition hover:bg-white/10">
                Our Programs
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-20 xl:bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 opacity-40">
          <span className="font-poppins text-[9px] uppercase tracking-[0.3em] text-white">scroll</span>
          <ChevronDown size={14} className="text-white animate-bounce" />
        </div>
      </StackSection>

      {/* ── SECTION 2 · STATS ────────────────────────────── */}
      <StackSection index={1} bg="#0a0a0a" className="py-20 border-t border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((s, i) => (
              <ParallaxElement key={s.label} speed={8 + i * 4}>
                <div className="text-center">
                  <div className="font-rebelton text-4xl xl:text-5xl tracking-tight text-white">{s.value}</div>
                  <div className="mt-1.5 font-poppins text-xs uppercase tracking-[0.15em] text-white/40">{s.label}</div>
                </div>
              </ParallaxElement>
            ))}
          </div>
        </div>
      </StackSection>

      {/* ── SECTION 3 · ABOUT ────────────────────────────── */}
      <StackSection index={2} bg="#050505" className="py-24 xl:py-32">
        {/* BG orb parallax */}
        <ParallaxElement speed={100} className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-white/[0.025] blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 xl:grid-cols-2 xl:items-center">
            <div>
              <ParallaxElement speed={18}>
                <p className="font-poppins text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4">Our Story</p>
                <h2 className="font-rebelton text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] text-white">
                  Built for<br />Champions
                </h2>
              </ParallaxElement>
              <div className="mt-8 space-y-4 font-poppins text-sm text-white/60 leading-relaxed max-w-xl">
                <p>{siteConfig.brand.description}</p>
                <p>Every detail of our facility — from the air-conditioned floors to the InBody diagnostic tech — was chosen with one goal: giving you an environment where excuses have no place.</p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-3">
                {features.map((f) => (
                  <div key={f} className="flex items-center gap-2.5">
                    <span className="size-1.5 rounded-full bg-white/60 shrink-0" />
                    <span className="font-poppins text-xs text-white/60">{f}</span>
                  </div>
                ))}
              </div>
              <Link href="/about" className="mt-10 inline-flex items-center gap-2 font-poppins text-sm uppercase tracking-[0.12em] text-white/80 border-b border-white/30 pb-0.5 hover:text-white hover:border-white transition">
                Learn More <ArrowRight size={14} />
              </Link>
            </div>

            {/* Image grid with staggered parallax speeds */}
            <div className="relative grid grid-cols-2 gap-4">
              <ParallaxElement speed={50} className="mt-12">
                <Image src="/Transform1.jpg" alt="Apex Fitness member transformation" width={400} height={520} className="rounded-2xl object-cover h-[360px] w-full" />
              </ParallaxElement>
              <div className="flex flex-col gap-4">
                <ParallaxElement speed={25}>
                  <Image src="/FitModel.jpg" alt="Elite fitness results" width={400} height={340} className="rounded-2xl object-cover h-[220px] w-full" />
                </ParallaxElement>
                <ParallaxElement speed={35}>
                  <Image src="/Transform2.jpg" alt="90-day transformation" width={400} height={200} className="rounded-2xl object-cover h-[128px] w-full" />
                </ParallaxElement>
              </div>
            </div>
          </div>
        </div>
      </StackSection>

      {/* ── SECTION 4 · PROGRAM ──────────────────────────── */}
      <StackSection index={3} bg="#0a0a0a" className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#111] p-10 xl:p-16">
            {/* Person image with parallax */}
            <div className="absolute right-0 top-0 h-full w-1/2 hidden xl:block pointer-events-none select-none overflow-hidden relative">
              <ParallaxElement speed={60} className="absolute inset-0">
                <Image src="/Transform1.jpg" alt="Transformation" fill sizes="50vw" className="object-cover object-right opacity-30" />
              </ParallaxElement>
              <div className="absolute inset-0 bg-gradient-to-r from-[#111] via-[#111]/60 to-transparent" />
            </div>
            <div className="relative z-10 max-w-xl">
              <ParallaxElement speed={14}>
                <p className="font-poppins text-[10px] uppercase tracking-[0.3em] text-white/40 mb-3">Signature Program</p>
                <h2 className="font-rebelton text-[clamp(2rem,5vw,4rem)] leading-none text-white">{siteConfig.brand.program}</h2>
              </ParallaxElement>
              <p className="mt-5 font-poppins text-sm text-white/60 leading-relaxed">
                Our 90-day transformation program. Specialized workouts, personalised nutrition, and weekly InBody reassessments — designed completely around your body type and goals.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {["Fat Loss", "Muscle Gain", "Athletic Performance", "Body Recomposition"].map((tag) => (
                  <span key={tag} className="rounded-full border border-white/20 px-4 py-1.5 font-poppins text-[10px] uppercase tracking-[0.12em] text-white/60">{tag}</span>
                ))}
              </div>
              <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 font-poppins text-sm font-medium tracking-wide text-black transition hover:bg-white/90">
                Start Today <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </StackSection>

      {/* ── SECTION 5 · SERVICES ─────────────────────────── */}
      <StackSection index={4} bg="#030303" className="py-24">
        {/* Floating orb */}
        <ParallaxElement speed={90} className="pointer-events-none absolute -bottom-24 left-0 w-[400px] h-[400px] rounded-full bg-white/[0.02] blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <ParallaxElement speed={16}>
              <div>
                <p className="font-poppins text-[10px] uppercase tracking-[0.3em] text-white/40 mb-3">What We Offer</p>
                <h2 className="font-rebelton text-[clamp(2rem,5vw,4rem)] leading-none text-white">Our Services</h2>
              </div>
            </ParallaxElement>
            <Link href="/services" className="hidden sm:inline-flex items-center gap-2 font-poppins text-sm text-white/50 hover:text-white transition">
              View All <ArrowRight size={15} />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {siteConfig.services.slice(0, 6).map((svc, idx) => (
              <ParallaxElement key={idx} speed={8 + (idx % 3) * 6}>
                <div className="group rounded-2xl border border-white/8 bg-white/4 p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/8 h-full">
                  <div className="mb-4 flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/6">
                    <span className="font-rebelton text-sm text-white/60">{String(idx + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="font-poppins text-sm font-medium text-white mb-2">{svc.title}</h3>
                  <p className="font-poppins text-xs text-white/50 leading-relaxed line-clamp-3">{svc.description}</p>
                </div>
              </ParallaxElement>
            ))}
          </div>
        </div>
      </StackSection>

      {/* ── SECTION 6 · GALLERY ──────────────────────────── */}
      <StackSection index={5} bg="#0a0a0a" className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <ParallaxElement speed={16}>
              <div>
                <p className="font-poppins text-[10px] uppercase tracking-[0.3em] text-white/40 mb-3">Inside Apex</p>
                <h2 className="font-rebelton text-[clamp(2rem,5vw,4rem)] leading-none text-white">Our Facility</h2>
              </div>
            </ParallaxElement>
            <Link href="/gallery" className="hidden sm:inline-flex items-center gap-2 font-poppins text-sm text-white/50 hover:text-white transition">
              Full Gallery <ArrowRight size={15} />
            </Link>
          </div>
          {/* Gallery grid — alternating parallax speeds for depth */}
          <div className="grid grid-cols-3 gap-3">
            {siteConfig.instagramFeed.map((url, i) => (
              <ParallaxElement key={i} speed={i % 2 === 0 ? 30 : 50}>
                <div className="group relative aspect-square overflow-hidden rounded-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={url} alt={`Facility ${i + 1}`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/0 transition-all group-hover:bg-black/30" />
                </div>
              </ParallaxElement>
            ))}
          </div>
        </div>
      </StackSection>

      {/* ── SECTION 7 · CTA ──────────────────────────────── */}
      <StackSection index={6} bg="#000" className="py-24 min-h-[60vh] flex items-center">
        {/* Large parallax orb behind CTA */}
        <ParallaxElement speed={120} className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-white/[0.03] blur-3xl" />

        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center w-full">
          <ParallaxElement speed={20}>
            <p className="font-poppins text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4">Join The Elite</p>
            <h2 className="font-rebelton text-[clamp(2.5rem,7vw,5.5rem)] leading-none text-white">
              Your Transformation<br />Starts Here
            </h2>
          </ParallaxElement>
          <p className="mt-6 font-poppins text-sm text-white/50 leading-relaxed max-w-lg mx-auto">
            Don&apos;t just dream about your best physique — build it. Book your free trial today.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-10 py-4 font-poppins text-sm font-medium tracking-wide text-black transition hover:bg-white/90 hover:gap-3">
              Book Free Trial <ArrowRight size={16} />
            </Link>
            <Link href="/services" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-10 py-4 font-poppins text-sm font-medium tracking-wide text-white transition hover:bg-white/10">
              Explore Programs
            </Link>
          </div>
        </div>
      </StackSection>

    </div>
  );
}
