import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/config";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white px-6 text-center">
      <p className="font-poppins text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">404 · Page Not Found</p>
      <h1 className="font-rebelton text-[clamp(5rem,20vw,14rem)] leading-none text-white/10">404</h1>
      <p className="mt-4 font-rebelton text-[clamp(1.5rem,4vw,3rem)] text-white">Oops. You got lost.</p>
      <p className="mt-4 font-poppins text-sm text-white/40 max-w-md leading-relaxed">
        The page you&apos;re looking for doesn&apos;t exist. Head back home and keep pushing.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 font-poppins text-sm font-medium tracking-wide text-black transition hover:bg-white/90"
      >
        Back to Home <ArrowRight size={15} />
      </Link>
      <p className="mt-6 font-poppins text-xs text-white/20">{siteConfig.brand.name}</p>
    </div>
  );
}
