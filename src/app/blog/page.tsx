import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/config";
import { ArrowRight, Clock } from "lucide-react";
import StackSection from "@/components/StackSection";
import ParallaxElement from "@/components/ParallaxElement";

export const metadata: Metadata = {
  title: `Blog | ${siteConfig.brand.name}`,
  description: `Training tips, nutrition guides, and fitness insights from the experts at ${siteConfig.brand.name}.`,
};

export default function BlogPage() {
  const { blog } = siteConfig;
  const [featured, ...rest] = blog;

  return (
    <div className="bg-black text-white">

      {/* ── SECTION 1 · HERO ─────────────────────────────── */}
      <StackSection index={0} bg="#000" className="pt-24 pb-14 xl:pt-32 min-h-[60vh] flex items-center">
        <ParallaxElement speed={100} className="pointer-events-none absolute -top-32 left-1/4 w-[480px] h-[480px] rounded-full bg-white/[0.025] blur-3xl" />
        <ParallaxElement speed={65} className="pointer-events-none absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-white/[0.015] blur-2xl" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">
          <ParallaxElement speed={22}>
            <p className="font-poppins text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4">Expert Insights</p>
            <h1 className="font-rebelton text-[clamp(3rem,8vw,7rem)] leading-[0.9] text-white">Blog</h1>
          </ParallaxElement>
          <p className="mt-5 font-poppins text-sm text-white/60 max-w-xl leading-relaxed">
            Science-backed tips, training guides, and nutrition insights from our team of certified professionals.
          </p>
        </div>
      </StackSection>

      {/* ── SECTION 2 · FEATURED POST ────────────────────── */}
      <StackSection index={1} bg="#050505" className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/4 cursor-pointer">
            <div className="grid grid-cols-1 xl:grid-cols-2">
              {/* Featured image with parallax */}
              <div className="h-64 xl:h-auto overflow-hidden">
                <ParallaxElement speed={50} className="h-[115%] w-full" style={{ marginTop: "-7.5%" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="h-full w-full object-cover"
                  />
                </ParallaxElement>
              </div>
              <div className="flex flex-col justify-center p-8 xl:p-14">
                <div className="flex items-center gap-3 mb-5">
                  <span className="rounded-full bg-white/10 px-3 py-1 font-poppins text-[10px] uppercase tracking-[0.12em] text-white/60">
                    {featured.category}
                  </span>
                  <span className="font-poppins text-[10px] text-white/30">{featured.date}</span>
                </div>
                <ParallaxElement speed={14}>
                  <h2 className="font-rebelton text-[clamp(1.5rem,3vw,2.5rem)] leading-tight text-white mb-4">
                    {featured.title}
                  </h2>
                </ParallaxElement>
                <p className="font-poppins text-sm text-white/60 leading-relaxed mb-8">{featured.excerpt}</p>
                <div className="flex items-center gap-2 font-poppins text-xs text-white/40">
                  <Clock size={13} /> {featured.readTime} read
                </div>
              </div>
            </div>
          </div>
        </div>
      </StackSection>

      {/* ── SECTION 3 · BLOG GRID ────────────────────────── */}
      <StackSection index={2} bg="#030303" className="py-16">
        <ParallaxElement speed={90} className="pointer-events-none absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-white/[0.018] blur-3xl" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {rest.map((post, i) => (
              <ParallaxElement key={i} speed={12 + (i % 3) * 10}>
                <article className="group overflow-hidden rounded-3xl border border-white/8 bg-white/4 transition-all duration-300 hover:border-white/20 hover:-translate-y-1 cursor-pointer h-full">
                  <div className="relative h-48 overflow-hidden">
                    <ParallaxElement speed={30} className="h-[120%] w-full" style={{ marginTop: "-10%" }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
                    </ParallaxElement>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="rounded-full bg-white/10 px-3 py-1 font-poppins text-[10px] uppercase tracking-[0.12em] text-white/60">{post.category}</span>
                      <span className="font-poppins text-[10px] text-white/30">{post.date}</span>
                    </div>
                    <h3 className="font-poppins text-sm font-medium text-white mb-2 line-clamp-2">{post.title}</h3>
                    <p className="font-poppins text-xs text-white/50 leading-relaxed line-clamp-2 mb-5">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 font-poppins text-[10px] text-white/30">
                        <Clock size={11} /> {post.readTime} read
                      </div>
                      <ArrowRight size={14} className="text-white/20 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </article>
              </ParallaxElement>
            ))}
          </div>
        </div>
      </StackSection>

      {/* ── SECTION 4 · CTA ──────────────────────────────── */}
      <StackSection index={3} bg="#0a0a0a" className="py-24 min-h-[50vh] flex items-center">
        <ParallaxElement speed={120} className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.025] blur-3xl" />
        <div className="mx-auto max-w-2xl px-6 text-center w-full relative z-10">
          <ParallaxElement speed={20}>
            <h2 className="font-rebelton text-[clamp(2rem,5vw,3.5rem)] leading-none text-white">
              Want Expert Guidance?
            </h2>
          </ParallaxElement>
          <p className="mt-5 font-poppins text-sm text-white/50 leading-relaxed">
            Talk to one of our certified coaches. Get a free consultation and a personalised plan designed for your specific goals.
          </p>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-10 py-4 font-poppins text-sm font-medium tracking-wide text-black transition hover:bg-white/90">
            Book Free Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </StackSection>

    </div>
  );
}
