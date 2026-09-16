"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/config";
import { ChevronDown, ArrowRight } from "lucide-react";
import StackSection from "@/components/StackSection";

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
    cardGlow: "hover:shadow-[0_8px_30px_rgba(56,189,248,0.3)]",
    cardBorder: "border-white/10 hover:border-sky-400/50",
    gradient: "from-sky-500/10 via-transparent to-transparent",
    accentOrb: "bg-sky-400/20",
    dot: "bg-sky-400",
  },
  {
    tag: "Digital Atelier",
    colorName: "Cyber Violet",
    badge: "border-purple-400/40 bg-purple-500/15 text-purple-300",
    cardGlow: "hover:shadow-[0_8px_30px_rgba(168,85,247,0.3)]",
    cardBorder: "border-white/10 hover:border-purple-400/50",
    gradient: "from-purple-500/10 via-transparent to-transparent",
    accentOrb: "bg-purple-400/20",
    dot: "bg-purple-400",
  },
  {
    tag: "Master Canvas",
    colorName: "Cadmium Honey",
    badge: "border-amber-400/40 bg-amber-500/15 text-amber-300",
    cardGlow: "hover:shadow-[0_8px_30px_rgba(251,191,36,0.3)]",
    cardBorder: "border-white/10 hover:border-amber-400/50",
    gradient: "from-amber-500/10 via-transparent to-transparent",
    accentOrb: "bg-amber-400/20",
    dot: "bg-amber-400",
  },
  {
    tag: "Archival Craft",
    colorName: "Crimson Rose",
    badge: "border-rose-400/40 bg-rose-500/15 text-rose-300",
    cardGlow: "hover:shadow-[0_8px_30px_rgba(244,63,94,0.3)]",
    cardBorder: "border-white/10 hover:border-rose-400/50",
    gradient: "from-rose-500/10 via-transparent to-transparent",
    accentOrb: "bg-rose-400/20",
    dot: "bg-rose-400",
  },
  {
    tag: "Fine Drafting",
    colorName: "Viridian Green",
    badge: "border-emerald-400/40 bg-emerald-500/15 text-emerald-300",
    cardGlow: "hover:shadow-[0_8px_30px_rgba(52,211,153,0.3)]",
    cardBorder: "border-white/10 hover:border-emerald-400/50",
    gradient: "from-emerald-500/10 via-transparent to-transparent",
    accentOrb: "bg-emerald-400/20",
    dot: "bg-emerald-400",
  },
  {
    tag: "Studio Class",
    colorName: "Solar Tangerine",
    badge: "border-orange-400/40 bg-orange-500/15 text-orange-300",
    cardGlow: "hover:shadow-[0_8px_30px_rgba(251,146,60,0.3)]",
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

  // Lightweight native video autoplay and unlock listeners
  useEffect(() => {
    const videos = [videoRef.current, trayVideoRef.current, huionCollectionVideoRef.current];

    videos.forEach((video) => {
      if (!video) return;
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;
      video.setAttribute("playsinline", "");
      video.setAttribute("webkit-playsinline", "");
      video.play().catch(() => {});

      const onPause = () => {
        video.play().catch(() => {});
      };
      video.addEventListener("pause", onPause);
    });

    const unlockVideos = () => {
      videos.forEach((video) => {
        if (video && video.paused) {
          video.play().catch(() => {});
        }
      });
    };

    window.addEventListener("touchstart", unlockVideos, { passive: true, once: true });
    window.addEventListener("click", unlockVideos, { once: true });
    window.addEventListener("scroll", unlockVideos, { passive: true, once: true });

    return () => {
      window.removeEventListener("touchstart", unlockVideos);
      window.removeEventListener("click", unlockVideos);
      window.removeEventListener("scroll", unlockVideos);
      videos.forEach((video) => {
        if (video) {
          video.removeEventListener("pause", () => {});
        }
      });
    };
  }, []);

  const togglePlay = (ref: React.RefObject<HTMLVideoElement | null>) => {
    if (!ref.current) return;
    if (ref.current.paused) {
      ref.current.play().catch(() => {});
    } else {
      ref.current.pause();
    }
  };

  return (
    <div className="bg-black text-white selection:bg-white selection:text-black">

      {/* ── SECTION 1 · HERO (FULL PAGE CARD) ──────────────── */}
      <StackSection index={0} bg="#000" className="min-h-[100dvh] flex flex-col justify-end relative overflow-hidden">
        {/* Full-bleed background video — clean native rendering without laggy CSS filters */}
        <div className="absolute inset-0 h-full w-full overflow-hidden">
          <video
            ref={videoRef}
            src="/huion-hero.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="h-full w-full object-cover"
            style={{
              transform: "translate3d(0, 0, 0)",
              WebkitTransform: "translate3d(0, 0, 0)",
            }}
          />
        </div>

        {/* Lightweight cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 via-35% to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent pointer-events-none" />

        {/* Top brand badge */}
        <div className="absolute top-5 sm:top-8 left-1/2 -translate-x-1/2 z-10 w-full px-4 flex justify-center pointer-events-none">
          <span className="font-poppins text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-white/80 border border-white/20 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 backdrop-blur-md bg-black/40 text-center shadow-md">
            {siteConfig.brand.badge}
          </span>
        </div>

        {/* Hero content */}
        <div className="relative z-10 w-full pb-24 sm:pb-28 xl:pb-24 px-5 sm:px-8 lg:px-12 xl:px-20">
          <div className="max-w-7xl mx-auto">
            <p className="font-poppins text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-white/65 mb-2 sm:mb-3">
              Archival Pigments · Master Canvases · Digital Displays
            </p>

            {/* Brand Title: Guaranteed single line on ALL screen sizes */}
            <h1 className="font-rebelton text-[clamp(1.75rem,7.5vw,7rem)] leading-[0.92] tracking-tight text-white whitespace-nowrap overflow-hidden text-ellipsis sm:text-clip">
              {siteConfig.brand.name}
            </h1>

            <p className="mt-3 sm:mt-5 font-poppins text-xs sm:text-sm md:text-base text-white/70 max-w-xl leading-relaxed">
              {siteConfig.brand.tagline} The premier sanctuary for fine art supplies, archival mediums, and professional Huion creative displays.
            </p>

            {/* Action buttons */}
            <div className="mt-5 sm:mt-7 flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-sm sm:max-w-none">
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-poppins text-xs sm:text-sm font-semibold tracking-wide text-black transition-all hover:bg-white/90 hover:gap-3 text-center shadow-lg active:scale-95"
              >
                Explore Supplies <ArrowRight size={15} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3.5 font-poppins text-xs sm:text-sm font-medium tracking-wide text-white backdrop-blur-sm transition hover:bg-white/10 text-center active:scale-95"
              >
                Visit Atelier
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1 opacity-40 pointer-events-none">
          <span className="font-poppins text-[9px] uppercase tracking-[0.3em] text-white">scroll</span>
          <ChevronDown size={14} className="text-white animate-bounce" />
        </div>
      </StackSection>

      {/* ── SECTION 2 · STATS (FULL PAGE CARD) ────────────── */}
      <StackSection index={1} bg="#080808" className="min-h-[100dvh] flex flex-col justify-center px-5 sm:px-6">
        <div className="mx-auto max-w-7xl w-full">
          <div className="text-center mb-8 sm:mb-12">
            <span className="font-poppins text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2 block">Our Footprint</span>
            <h2 className="font-rebelton text-[clamp(2rem,5vw,3.75rem)] leading-none text-white">Proven Excellence</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-8 sm:grid-cols-4 max-w-5xl mx-auto">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-white/10 bg-white/4 p-5 sm:p-8 text-center transition-all duration-300 hover:border-white/20 hover:bg-white/8">
                <div className="font-rebelton text-3xl sm:text-4xl xl:text-5xl tracking-tight text-white mb-2">{s.value}</div>
                <div className="font-poppins text-[10px] sm:text-xs uppercase tracking-[0.15em] text-white/50">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </StackSection>

      {/* ── SECTION 3 · ABOUT & TRAY VIDEO (FULL PAGE CARD) ─ */}
      <StackSection index={2} bg="#050505" className="min-h-[100dvh] flex flex-col justify-center py-12 sm:py-20 px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl w-full">
          <div className="grid grid-cols-1 gap-6 sm:gap-10 xl:grid-cols-2 xl:gap-16 xl:items-center">
            {/* Story text */}
            <div>
              <p className="font-poppins text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2">Our Story</p>
              <h2 className="font-rebelton text-[clamp(2rem,5.5vw,4.5rem)] leading-[0.98] text-white">
                Formulated for<br />Creators
              </h2>
              <p className="mt-4 sm:mt-5 font-poppins text-xs sm:text-sm text-white/70 leading-relaxed max-w-xl">
                {siteConfig.brand.description}
              </p>

              {/* Mobile Tray Video: Positioned cleanly here on small screens */}
              <div className="mt-5 block xl:hidden">
                <div
                  onClick={() => togglePlay(trayVideoRef)}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/15 bg-black/60 shadow-xl"
                >
                  <video
                    ref={trayVideoRef}
                    src="/tray-8-17.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="w-full aspect-[16/9] object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                  <div className="pointer-events-none absolute bottom-3 left-4 right-4 flex items-center justify-between">
                    <div>
                      <p className="font-poppins text-[9px] uppercase tracking-[0.2em] text-white/50">Atelier Showcase</p>
                      <p className="font-poppins text-xs font-medium text-white/95">Precision Tray Craft</p>
                    </div>
                    <span className="flex size-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Features badges */}
              <div className="mt-5 sm:mt-6 grid grid-cols-2 gap-2 sm:gap-2.5 max-w-lg">
                {features.slice(0, 4).map((f) => (
                  <div key={f} className="flex items-center gap-2 rounded-xl border border-white/8 bg-white/4 px-3 py-2">
                    <span className="size-1.5 rounded-full bg-white/60 shrink-0" />
                    <span className="font-poppins text-[11px] sm:text-xs text-white/70 truncate">{f}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 sm:mt-8">
                <Link href="/about" className="inline-flex items-center gap-2 font-poppins text-xs sm:text-sm uppercase tracking-[0.12em] text-white/80 border-b border-white/30 pb-0.5 hover:text-white hover:border-white transition">
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Desktop Tray Video (visible on xl:) */}
            <div className="hidden xl:flex relative items-center justify-center">
              <div
                onClick={() => togglePlay(trayVideoRef)}
                className="group relative cursor-pointer overflow-hidden rounded-3xl border border-white/15 bg-black/60 shadow-[0_25px_60px_rgba(0,0,0,0.85)] w-full"
              >
                <video
                  src="/tray-8-17.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="pointer-events-none absolute bottom-5 left-6 right-6 flex items-center justify-between">
                  <div>
                    <p className="font-poppins text-[10px] uppercase tracking-[0.2em] text-white/50">Atelier Showcase</p>
                    <p className="font-poppins text-xs font-medium text-white/90">Precision Tray Craft</p>
                  </div>
                  <span className="flex items-center gap-1.5 rounded-full bg-black/50 border border-white/20 px-3 py-1 backdrop-blur-sm">
                    <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-poppins text-[10px] uppercase tracking-wider text-white/80">Active</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StackSection>

      {/* ── SECTION 4 · PROGRAM & HUION VIDEO (FULL PAGE CARD) ─ */}
      <StackSection index={3} bg="#0a0a0a" className="min-h-[100dvh] flex flex-col justify-center py-12 sm:py-20 px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl w-full">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#111] p-6 sm:p-10 xl:p-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center relative z-10">
              <div className="lg:col-span-7 max-w-xl">
                <p className="font-poppins text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2">Curated Collection</p>
                <h2 className="font-rebelton text-[clamp(1.85rem,4.5vw,3.75rem)] leading-tight text-white">{siteConfig.brand.program}</h2>
                <p className="mt-3 sm:mt-5 font-poppins text-xs sm:text-sm text-white/60 leading-relaxed">
                  Our flagship curation for fine artists, illustrators, and studios. Hand-selected mineral pigments, custom-stretched Belgian linens, and high-precision Huion digital pen displays — tailored for your signature masterpieces.
                </p>
                <div className="mt-4 sm:mt-6 flex flex-wrap gap-2 sm:gap-3">
                  {["Oil & Acrylic", "Huion Pen Displays", "Belgian Linen", "Archival Framing"].map((tag) => (
                    <span key={tag} className="rounded-full border border-white/20 px-3.5 py-1 font-poppins text-[10px] uppercase tracking-[0.12em] text-white/60">{tag}</span>
                  ))}
                </div>
                <div className="mt-6 sm:mt-8">
                  <Link href="/services" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-poppins text-xs sm:text-sm font-semibold tracking-wide text-black transition hover:bg-white/90">
                    Explore Collection <ArrowRight size={15} />
                  </Link>
                </div>
              </div>

              {/* Video on the right: Huion pen display */}
              <div className="lg:col-span-5 relative w-full flex items-center justify-center">
                <div
                  onClick={() => togglePlay(huionCollectionVideoRef)}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/15 bg-black/70 shadow-2xl w-full aspect-[16/9] lg:aspect-[16/11]"
                >
                  <video
                    ref={huionCollectionVideoRef}
                    src="/huion-15-20.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="pointer-events-none absolute bottom-3 left-4 right-4 flex items-center justify-between">
                    <div>
                      <p className="font-poppins text-[9px] uppercase tracking-[0.2em] text-white/50">Huion Pen Display</p>
                      <p className="font-poppins text-xs font-medium text-white/90">Interactive 4K Canvas</p>
                    </div>
                    <span className="flex items-center gap-1.5 rounded-full bg-black/50 border border-white/20 px-2.5 py-0.5 backdrop-blur-sm">
                      <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="font-poppins text-[9px] uppercase tracking-wider text-white/80">4K Live</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StackSection>

      {/* ── SECTION 5 · SERVICES (ARTIST CHROMA SANCTUARY) ─── */}
      <StackSection index={4} bg="#040208" className="min-h-[100dvh] flex flex-col justify-center py-10 sm:py-16 px-5 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Atmosphere: Fine Art Pigment Explosion & Static Radial Glow (Zero Lag) */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/services-color-bg.jpg"
            alt="Art supplier colorful pigment explosion"
            className="h-full w-full object-cover object-center mix-blend-screen opacity-70 lg:opacity-80"
          />

          {/* Smooth atmospheric vignette blends */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 pointer-events-none" />

          {/* Static performant multi-radial glow — zero GPU repaint lag */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(245,158,11,0.22)_0%,transparent_50%),radial-gradient(ellipse_at_top_right,rgba(236,72,153,0.25)_0%,transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(56,189,248,0.22)_0%,transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(16,185,129,0.2)_0%,transparent_45%),radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.2)_0%,transparent_60%)] pointer-events-none" />

          {/* Fine artist linen canvas texture */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:26px_26px] opacity-[0.035] pointer-events-none" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl w-full">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 sm:mb-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/50 px-3 py-1 backdrop-blur-md mb-2 shadow-sm">
                <span className="flex size-1.5 rounded-full bg-gradient-to-r from-pink-400 via-amber-300 to-cyan-400 animate-pulse" />
                <span className="font-poppins text-[9px] uppercase tracking-[0.25em] text-white/90 font-medium">
                  Atelier Spectrum · What We Offer
                </span>
              </div>
              <h2 className="font-rebelton text-[clamp(1.85rem,5vw,3.75rem)] leading-none text-white drop-shadow-md">
                Our Services
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/55 px-5 py-2 font-poppins text-xs uppercase tracking-[0.12em] text-white backdrop-blur-md shadow-md transition-all hover:bg-white hover:text-black w-fit"
            >
              View All <ArrowRight size={13} />
            </Link>
          </div>

          {/* Responsive 2-column on mobile, 3-column on desktop so all cards fit comfortably */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4">
            {siteConfig.services.slice(0, 6).map((svc, idx) => {
              const style = serviceCardStyles[idx % serviceCardStyles.length];
              return (
                <div
                  key={idx}
                  className={`group relative flex flex-col justify-between rounded-2xl border ${style.cardBorder} bg-black/65 p-3.5 sm:p-5 backdrop-blur-md transition-all duration-200 hover:-translate-y-1 ${style.cardGlow} shadow-lg`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <div className={`flex size-7 sm:size-9 items-center justify-center rounded-xl border ${style.badge} font-rebelton text-xs sm:text-sm font-semibold`}>
                        {String(idx + 1).padStart(2, "0")}
                      </div>
                      <span className="text-[8px] sm:text-[9px] font-poppins uppercase tracking-wider text-white/60">
                        {style.tag}
                      </span>
                    </div>
                    <h3 className="font-poppins text-xs sm:text-sm font-medium text-white mb-1 leading-snug line-clamp-1 group-hover:text-white">
                      {svc.title}
                    </h3>
                    <p className="font-poppins text-[10px] sm:text-xs text-white/55 leading-relaxed line-clamp-2">
                      {svc.description}
                    </p>
                  </div>

                  <div className="mt-2.5 pt-2 border-t border-white/8 flex items-center justify-between text-[9px] sm:text-[10px] font-poppins text-white/40">
                    <span className="truncate">{style.colorName}</span>
                    <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </StackSection>

      {/* ── SECTION 6 · GALLERY (FULL PAGE CARD) ──────────── */}
      <StackSection index={5} bg="#080808" className="min-h-[100dvh] flex flex-col justify-center py-10 sm:py-16 px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl w-full">
          <div className="flex items-end justify-between mb-6 sm:mb-8">
            <div>
              <p className="font-poppins text-[10px] uppercase tracking-[0.3em] text-white/40 mb-1.5">Inside the Atelier</p>
              <h2 className="font-rebelton text-[clamp(1.85rem,5vw,3.75rem)] leading-none text-white">Studio & Showroom</h2>
            </div>
            <Link href="/gallery" className="inline-flex items-center gap-2 font-poppins text-xs uppercase tracking-[0.12em] text-white/60 hover:text-white transition">
              Full Gallery <ArrowRight size={13} />
            </Link>
          </div>
          {/* 6 photos in a clean 3x2 grid */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {siteConfig.instagramFeed.slice(0, 6).map((url, i) => (
              <div key={i} className="group relative aspect-square overflow-hidden rounded-xl sm:rounded-2xl border border-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={url}
                  alt={`Studio Creation ${i + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition-all group-hover:bg-black/25" />
              </div>
            ))}
          </div>
        </div>
      </StackSection>

      {/* ── SECTION 7 · CTA (FULL PAGE CARD) ──────────────── */}
      <StackSection index={6} bg="#000" className="min-h-[100dvh] flex flex-col justify-center text-center py-16 px-5 sm:px-6">
        <div className="mx-auto max-w-3xl w-full">
          <p className="font-poppins text-[10px] uppercase tracking-[0.3em] text-white/40 mb-3">Craft Your Legacy</p>
          <h2 className="font-rebelton text-[clamp(2.25rem,6vw,5rem)] leading-tight text-white">
            Every Masterpiece<br />Begins With Pure Chroma
          </h2>
          <p className="mt-4 sm:mt-6 font-poppins text-xs sm:text-sm text-white/60 leading-relaxed max-w-lg mx-auto">
            Equip your studio with museum-grade pigments, artisanal papers, and professional Huion creative displays. Visit our atelier today.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-sm sm:max-w-none mx-auto">
            <Link href="/services" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 sm:px-10 py-3.5 sm:py-4 font-poppins text-sm font-semibold tracking-wide text-black transition hover:bg-white/90 hover:gap-3 text-center">
              Explore Supplies <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 sm:px-10 py-3.5 sm:py-4 font-poppins text-sm font-medium tracking-wide text-white transition hover:bg-white/10 text-center">
              Visit Atelier
            </Link>
          </div>
        </div>
      </StackSection>

    </div>
  );
}
