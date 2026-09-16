"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      const scrollY =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.scrollY ||
        0;

      // Show as soon as user scrolls past 80px
      setVisible(scrollY > 80);
    };

    window.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("touchmove", checkScroll, { passive: true });
    window.addEventListener("wheel", checkScroll, { passive: true });
    checkScroll();

    return () => {
      window.removeEventListener("scroll", checkScroll);
      window.removeEventListener("touchmove", checkScroll);
      window.removeEventListener("wheel", checkScroll);
    };
  }, []);

  const scrollToTop = () => {
    try {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      window.scrollTo(0, 0);
    }
    try {
      document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`group fixed bottom-24 right-4 sm:bottom-8 sm:right-8 2xl:bottom-44 2xl:right-9 z-[99999] flex items-center justify-center gap-1.5 rounded-full bg-white text-black shadow-[0_8px_30px_rgba(0,0,0,0.85),0_0_25px_rgba(255,255,255,0.4)] border-2 border-white transition-all duration-300 active:scale-90 hover:scale-105 px-3.5 py-2 sm:size-12 sm:p-0 ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ArrowUp size={16} className="transition-transform duration-200 group-hover:-translate-y-0.5 stroke-[2.5]" />
      <span className="sm:hidden font-poppins text-[10px] font-bold uppercase tracking-wider">
        Top
      </span>
    </button>
  );
}
