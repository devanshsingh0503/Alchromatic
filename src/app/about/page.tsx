import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/config";
import { ArrowRight } from "lucide-react";
import StackSection from "@/components/StackSection";
import ParallaxElement from "@/components/ParallaxElement";

export const metadata: Metadata = {
  title: `About Us | ${siteConfig.brand.name}`,
  description: `Learn the story behind ${siteConfig.brand.name} — the city's most premium fitness facility with internationally-qualified trainers and world-class equipment.`,
};

const values = [
  { title: "Excellence", body: "We never settle for good enough. Every program, every session, every result — we push past limits." },
  { title: "Science-Based", body: "No bro-science here. Every training protocol and nutrition plan is grounded in evidence-based research." },
  { title: "Community", body: "A gym is only as strong as its people. We build a tribe of motivated individuals who push each other forward." },
  { title: "Accountability", body: "Regular check-ins, InBody assessments, and trainer reviews keep you accountable to your own goals." },
];

const team = [
  { name: "Alex Carter", title: "Head Performance Coach", cert: "NSCA-CSCS · FMS Level 2" },
  { name: "Jordan Lee", title: "Certified Nutritionist", cert: "Precision Nutrition L2 · RD" },
  { name: "Morgan Patel", title: "Olympic Lifting Coach", cert: "USA Weightlifting L2" },
  { name: "Taylor Brooks", title: "Rehab & Physio Specialist", cert: "B.Physio · Sports Rehab" },
  { name: "Casey Nguyen", title: "Group Fitness Director", cert: "Les Mills Certified · CPT" },
  { name: "Riley Kim", title: "Personal Training Coach", cert: "NASM-CPT · TRX Certified" },
];

export default function AboutPage() {
  return (
    <div className="bg-black text-white">

      {/* ── SECTION 1 · HERO ─────────────────────────────── */}
      <StackSection index={0} bg="#000" className="pt-24 pb-20 xl:pt-32 xl:pb-28 min-h-[70vh] flex items-center">
        <ParallaxElement speed={110} className="pointer-events-none absolute -top-24 right-0 w-[640px] h-[640px] rounded-full bg-white/[0.025] blur-3xl" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">
          <ParallaxElement speed={22}>
            <p className="font-poppins text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4">Our Story</p>
            <h1 className="font-rebelton text-[clamp(3rem,8vw,7rem)] leading-[0.9] text-white max-w-3xl">
              Built for<br />Champions
            </h1>
          </ParallaxElement>
          <p className="mt-6 font-poppins text-sm text-white/60 max-w-xl leading-relaxed">
            {siteConfig.brand.description}
          </p>
        </div>
      </StackSection>

      {/* ── SECTION 2 · STORY ────────────────────────────── */}
      <StackSection index={1} bg="#050505" className="py-24">
        <ParallaxElement speed={80} className="pointer-events-none absolute top-0 left-1/2 w-[480px] h-[480px] rounded-full bg-white/[0.02] blur-3xl" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
            {/* Staggered parallax image grid */}
            <div className="relative grid grid-cols-2 gap-4">
              <ParallaxElement speed={55} className="mt-12">
                <Image src="/Transform1.jpg" alt="Before & after transformation" width={400} height={520} className="rounded-2xl object-cover h-[360px] w-full" />
              </ParallaxElement>
              <div className="flex flex-col gap-4">
                <ParallaxElement speed={28}>
                  <Image src="/FitModel.jpg" alt="Elite fitness results" width={400} height={340} className="rounded-2xl object-cover h-[220px] w-full" />
                </ParallaxElement>
                <ParallaxElement speed={40}>
                  <Image src="/Transform2.jpg" alt="90-day body transformation" width={400} height={200} className="rounded-2xl object-cover h-[128px] w-full" />
                </ParallaxElement>
              </div>
            </div>
            <div>
              <ParallaxElement speed={16}>
                <p className="font-poppins text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4">Why Apex</p>
                <h2 className="font-rebelton text-[clamp(2rem,5vw,4rem)] leading-none text-white mb-8">More Than a Gym</h2>
              </ParallaxElement>
              <div className="space-y-5 font-poppins text-sm text-white/60 leading-relaxed">
                <p>We built {siteConfig.brand.name} because we believe every person deserves access to world-class training — not just elite athletes.</p>
                <p>Our facility is equipped with the best machinery available globally — Olympic lifting platforms, premium strength equipment, high-end cardio machines, and InBody composition analysers.</p>
                <p>Recovery matters. That&apos;s why we offer Steam rooms, Sauna, and Ice Bath facilities.</p>
              </div>
              <Link href="/contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 font-poppins text-sm font-medium tracking-wide text-black transition hover:bg-white/90">
                Book Free Trial <ArrowRight size={16} />
              </Link>
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
          <ParallaxElement speed={20}>
            <h2 className="font-rebelton text-[clamp(2rem,5vw,4rem)] leading-none text-white">Ready to Begin?</h2>
          </ParallaxElement>
          <p className="mt-5 font-poppins text-sm text-white/50 leading-relaxed">
            Come visit us, take a tour, and book your free trial session.
          </p>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-10 py-4 font-poppins text-sm font-medium tracking-wide text-black transition hover:bg-white/90">
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </StackSection>

    </div>
  );
}
