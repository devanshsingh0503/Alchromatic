"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/config";
import { ChevronDown, ArrowRight } from "lucide-react";
import StackSection from "@/components/StackSection";
import ParallaxElement from "@/components/ParallaxElement";

const stats = [
  { value: "15,000+", label: "Artists Served" },
  { value: "2,500+", label: "Curated Art Tools" },
  { value: "50+", label: "Master Brands" },
  { value: "2", label: "Studio Ateliers" },
];

const features = [
  "Museum-Grade Archival Pigments",
  "Huion & Digital Pen Displays",
  "Belgian Linen & Stretcher Bars",
  "Bespoke Conservation Framing",
  "Fine Inks & Drafting Pens",
  "Artist Workshops & Live Demos",
];

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


export default function HomePage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const trayVideoRef = useRef<HTMLVideoElement>(null);
  const huionCollectionVideoRef = useRef<HTMLVideoElement>(null);

  // Ensure seamless native video autoplay & pause recovery across all devices
  useEffect(() => {
    const videos = [videoRef.current, trayVideoRef.current, huionCollectionVideoRef.current];
    videos.forEach((video) => {
      if (!video) return;
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;
      video.play().catch(() => {});

      const onPause = () => {
        video.play().catch(() => {});
      };
      video.addEventListener("pause", onPause);
    });

    return () => {
      videos.forEach((video) => {
        if (video) {
          video.removeEventListener("pause", () => {});
        }
      });
    };
  }, []);

  return (
    <div className="bg-black text-white">

      {/* ── SECTION 1 · HERO ─────────────────────────────── */}
      <StackSection index={0} bg="#000" className="min-h-screen flex items-end">
        {/* Parallax video bg — drifts up slower than scroll */}
        <ParallaxElement speed={60} className="absolute inset-0 h-[110%] w-full" style={{ top: "-5%" }}>
          <video
            ref={videoRef}
            src="/huion-hero.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="h-full w-full object-cover brightness-[1.05] contrast-[1.12] saturate-[1.15]"
            style={{
              transform: "translate3d(0, 0, 0)",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          />
        </ParallaxElement>

        {/* Clean cinematic overlays: keeps text legible while maximizing video clarity */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 via-25% to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/15 via-35% to-transparent pointer-events-none" />

        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10">
          <span className="font-poppins text-[10px] uppercase tracking-[0.2em] text-white/60 border border-white/20 rounded-full px-5 py-2 backdrop-blur-sm bg-black/20">
            {siteConfig.brand.badge}
          </span>
        </div>

        <div className="relative z-10 w-full pb-28 xl:pb-24 px-6 lg:px-12 xl:px-20">
          <div className="max-w-7xl mx-auto">
            <ParallaxElement speed={12}>
              <p className="font-poppins text-xs uppercase tracking-[0.3em] text-white/50 mb-3">
                Archival Pigments · Master Canvases · Digital Displays
              </p>
              <h1 className="font-rebelton text-[clamp(3rem,9vw,7.5rem)] leading-[0.98] tracking-tight text-white">
                {siteConfig.brand.name}
              </h1>
              <p className="mt-6 font-poppins text-sm sm:text-base text-white/60 max-w-lg leading-relaxed">
                {siteConfig.brand.tagline} The premier sanctuary for fine art supplies, archival mediums, and professional Huion creative displays.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/services" className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 font-poppins text-sm font-medium tracking-wide text-black transition-all hover:bg-white/90 hover:gap-3">
                  Explore Supplies <ArrowRight size={16} />
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-3.5 font-poppins text-sm font-medium tracking-wide text-white backdrop-blur-sm transition hover:bg-white/10">
                  Visit Atelier
                </Link>
              </div>
            </ParallaxElement>
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
                <p className="font-poppins text-[10px] uppercase tracking-[0.3em] text-white/40 mb-3">Our Story</p>
                <h2 className="font-rebelton text-[clamp(2.5rem,6vw,5rem)] leading-[0.98] text-white">
                  Formulated for<br />Creators
                </h2>
                <div className="mt-6 space-y-4 font-poppins text-sm text-white/60 leading-relaxed max-w-xl">
                  <p>{siteConfig.brand.description}</p>
                  <p>Every material in our atelier — from single-pigment oil colors to responsive Huion 4K pen displays — is curated with one purpose: providing artists an uncompromising sanctuary where creativity flourishes without boundaries.</p>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-3">
                  {features.map((f) => (
                    <div key={f} className="flex items-center gap-2.5">
                      <span className="size-1.5 rounded-full bg-white/60 shrink-0" />
                      <span className="font-poppins text-xs text-white/60">{f}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Link href="/about" className="inline-flex items-center gap-2 font-poppins text-sm uppercase tracking-[0.12em] text-white/80 border-b border-white/30 pb-0.5 hover:text-white hover:border-white transition">
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </ParallaxElement>
            </div>

            {/* Tray video showcase playing on the right (8s to 17s) */}
            <div className="relative flex items-center justify-center">
              <ParallaxElement speed={30} className="w-full">
                <div className="group relative overflow-hidden rounded-3xl border border-white/15 bg-black/50 shadow-[0_25px_60px_rgba(0,0,0,0.85)] backdrop-blur-md">
                  <video
                    ref={trayVideoRef}
                    src="/tray-8-17.mp4"
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
                  {/* Subtle glass vignette and badge */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  <div className="pointer-events-none absolute bottom-5 left-6 right-6 flex items-center justify-between">
                    <div>
                      <p className="font-poppins text-[10px] uppercase tracking-[0.2em] text-white/50">Atelier Showcase</p>
                      <p className="font-poppins text-xs font-medium text-white/90">Precision Tray Craft</p>
                    </div>
                    <span className="flex size-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                </div>
              </ParallaxElement>
            </div>
          </div>
        </div>
      </StackSection>

      {/* ── SECTION 4 · PROGRAM ──────────────────────────── */}
      <StackSection index={3} bg="#0a0a0a" className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#111] p-8 sm:p-10 xl:p-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center relative z-10">
              <div className="lg:col-span-7 max-w-xl">
                <ParallaxElement speed={14}>
                  <p className="font-poppins text-[10px] uppercase tracking-[0.3em] text-white/40 mb-3">Curated Collection</p>
                  <h2 className="font-rebelton text-[clamp(2rem,5vw,4rem)] leading-tight text-white">{siteConfig.brand.program}</h2>
                  <p className="mt-5 font-poppins text-sm text-white/60 leading-relaxed">
                    Our flagship curation for fine artists, illustrators, and studios. Hand-selected mineral pigments, custom-stretched Belgian linens, and high-precision Huion digital pen displays — tailored for your signature masterpieces.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {["Oil & Acrylic", "Huion Pen Displays", "Belgian Linen", "Archival Framing"].map((tag) => (
                      <span key={tag} className="rounded-full border border-white/20 px-4 py-1.5 font-poppins text-[10px] uppercase tracking-[0.12em] text-white/60">{tag}</span>
                    ))}
                  </div>
                  <div className="mt-8">
                    <Link href="/services" className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 font-poppins text-sm font-medium tracking-wide text-black transition hover:bg-white/90">
                      Explore Collection <ArrowRight size={16} />
                    </Link>
                  </div>
                </ParallaxElement>
              </div>

              {/* Video on the right: Huion video from 15s to 20s */}
              <div className="lg:col-span-5 relative w-full flex items-center justify-center">
                <ParallaxElement speed={22} className="w-full">
                  <div className="group relative overflow-hidden rounded-2xl border border-white/15 bg-black/70 shadow-[0_20px_50px_rgba(0,0,0,0.85)] backdrop-blur-md aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/11]">
                    <video
                      ref={huionCollectionVideoRef}
                      src="/huion-15-20.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{
                        transform: "translate3d(0, 0, 0)",
                        backfaceVisibility: "hidden",
                      }}
                    />
                    {/* Subtle glass vignette and badge */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                    <div className="pointer-events-none absolute bottom-4 left-5 right-5 flex items-center justify-between">
                      <div>
                        <p className="font-poppins text-[9px] uppercase tracking-[0.2em] text-white/50">Huion Pen Display</p>
                        <p className="font-poppins text-xs font-medium text-white/90">Interactive 4K Canvas</p>
                      </div>
                      <span className="flex size-2 rounded-full bg-emerald-400 animate-pulse" />
                    </div>
                  </div>
                </ParallaxElement>
              </div>
            </div>
          </div>
        </div>
      </StackSection>

      {/* ── SECTION 5 · SERVICES (ARTIST CHROMA SANCTUARY) ─── */}
      <StackSection index={4} bg="#040208" className="py-24 relative overflow-hidden">
        {/* Background Atmosphere: Fine Art Pigment Explosion & Joyful Vibrant Chroma */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          {/* Parallax high-res colorful art & pigment imagery */}
          <ParallaxElement speed={30} className="absolute -top-[12%] -bottom-[12%] inset-x-0 w-full h-[124%]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/services-color-bg.jpg"
              alt="Art supplier colorful pigment explosion"
              className="h-full w-full object-cover object-center brightness-[1.05] contrast-[1.12] saturate-[1.25] mix-blend-screen opacity-75 lg:opacity-85"
            />
          </ParallaxElement>

          {/* Smooth atmospheric vignette and gradient blends */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-transparent to-black/85 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.15)_0%,rgba(0,0,0,0.72)_100%)] pointer-events-none" />

          {/* Joyful floating color orbs (ambient radiant glow) */}
          <div className="absolute -top-16 left-12 size-[440px] rounded-full bg-gradient-to-br from-amber-400/25 via-yellow-400/15 to-transparent blur-[110px] animate-glow-1 pointer-events-none" />
          <div className="absolute top-1/4 -right-16 size-[480px] rounded-full bg-gradient-to-bl from-pink-500/30 via-rose-500/15 to-transparent blur-[120px] animate-glow-2 pointer-events-none" />
          <div className="absolute -bottom-16 left-1/4 size-[460px] rounded-full bg-gradient-to-tr from-cyan-400/25 via-blue-500/15 to-transparent blur-[110px] animate-glow-2 pointer-events-none" />
          <div className="absolute bottom-1/4 -left-12 size-[400px] rounded-full bg-gradient-to-r from-emerald-400/20 via-teal-500/10 to-transparent blur-[100px] animate-glow-1 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[540px] rounded-full bg-gradient-to-r from-purple-500/20 via-fuchsia-500/20 to-amber-400/15 blur-[140px] animate-glow-pulse pointer-events-none" />

          {/* Fine artist linen canvas texture grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1.2px,transparent_1.2px)] [background-size:26px_26px] opacity-[0.045] pointer-events-none" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <ParallaxElement speed={16}>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/45 px-3.5 py-1.5 backdrop-blur-md mb-3 shadow-[0_0_24px_rgba(236,72,153,0.25)]">
                  <span className="flex size-2 rounded-full bg-gradient-to-r from-pink-400 via-amber-300 to-cyan-400 animate-pulse" />
                  <span className="font-poppins text-[10px] uppercase tracking-[0.25em] text-white/90 font-medium">
                    What We Offer · Atelier Spectrum
                  </span>
                </div>
                <h2 className="font-rebelton text-[clamp(2.25rem,5.5vw,4.25rem)] leading-none text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
                  Our Services
                </h2>
                <p className="mt-3 font-poppins text-xs sm:text-sm text-white/70 max-w-xl leading-relaxed">
                  Immerse yourself in pure chromatic expression — museum pigments, archival Belgian linen, and precision digital tools designed for limitless creative joy.
                </p>
              </div>
            </ParallaxElement>
            <ParallaxElement speed={12}>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/55 px-6 py-2.5 font-poppins text-xs uppercase tracking-[0.15em] text-white backdrop-blur-md shadow-lg transition-all duration-300 hover:border-white/50 hover:bg-white hover:text-black hover:scale-105"
              >
                View All <ArrowRight size={14} />
              </Link>
            </ParallaxElement>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {siteConfig.services.slice(0, 6).map((svc, idx) => {
              const style = serviceCardStyles[idx % serviceCardStyles.length];
              return (
                <ParallaxElement key={idx} speed={8 + (idx % 3) * 6}>
                  <div
                    className={`group relative flex flex-col justify-between rounded-3xl border ${style.cardBorder} bg-black/60 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 ${style.cardGlow} h-full overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.45)]`}
                  >
                    {/* Subtle top ambient glow gradient */}
                    <div
                      className={`pointer-events-none absolute -top-10 -right-10 size-32 rounded-full ${style.accentOrb} blur-2xl transition-opacity duration-300 opacity-50 group-hover:opacity-100`}
                    />
                    <div
                      className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${style.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                    />

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-5">
                        <div
                          className={`flex size-11 items-center justify-center rounded-2xl border ${style.badge} font-rebelton text-sm font-semibold shadow-inner transition-transform duration-300 group-hover:scale-110`}
                        >
                          {String(idx + 1).padStart(2, "0")}
                        </div>
                        <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-poppins text-[9px] uppercase tracking-wider text-white/70 backdrop-blur-sm">
                          <span className={`size-1.5 rounded-full ${style.dot}`} />
                          {style.tag}
                        </span>
                      </div>
                      <h3 className="font-poppins text-base font-medium text-white mb-2.5 transition-colors group-hover:text-white">
                        {svc.title}
                      </h3>
                      <p className="font-poppins text-xs text-white/65 leading-relaxed">
                        {svc.description}
                      </p>
                    </div>

                    <div className="relative z-10 mt-6 pt-4 border-t border-white/8 flex items-center justify-between">
                      <span className="font-poppins text-[10px] tracking-wider uppercase text-white/40 group-hover:text-white/70 transition-colors">
                        {style.colorName}
                      </span>
                      <span className="flex items-center gap-1 text-[11px] font-poppins text-white/50 group-hover:text-white transition-colors group-hover:translate-x-1 duration-200">
                        Explore <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                </ParallaxElement>
              );
            })}
          </div>
        </div>
      </StackSection>


      {/* ── SECTION 6 · GALLERY ──────────────────────────── */}
      <StackSection index={5} bg="#0a0a0a" className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <ParallaxElement speed={16}>
              <div>
                <p className="font-poppins text-[10px] uppercase tracking-[0.3em] text-white/40 mb-3">Inside the Atelier</p>
                <h2 className="font-rebelton text-[clamp(2rem,5vw,4rem)] leading-none text-white">Studio & Showroom</h2>
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
                  <img
                    src={url}
                    alt={`Studio Creation ${i + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
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
          <ParallaxElement speed={18}>
            <p className="font-poppins text-[10px] uppercase tracking-[0.3em] text-white/40 mb-3">Craft Your Legacy</p>
            <h2 className="font-rebelton text-[clamp(2.5rem,7vw,5.5rem)] leading-tight text-white">
              Every Masterpiece<br />Begins With Pure Chroma
            </h2>
            <p className="mt-6 font-poppins text-sm text-white/50 leading-relaxed max-w-lg mx-auto">
              Equip your studio with museum-grade pigments, artisanal papers, and professional Huion creative displays. Visit our atelier today.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/services" className="inline-flex items-center gap-2 rounded-full bg-white px-10 py-4 font-poppins text-sm font-medium tracking-wide text-black transition hover:bg-white/90 hover:gap-3">
                Explore Supplies <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-10 py-4 font-poppins text-sm font-medium tracking-wide text-white transition hover:bg-white/10">
                Visit Atelier
              </Link>
            </div>
          </ParallaxElement>
        </div>
      </StackSection>

    </div>
  );
}
