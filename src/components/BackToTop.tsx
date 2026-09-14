"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      const scrollY =
        window.pageYOffset ??
        document.documentElement.scrollTop ??
        window.scrollY ??
        0;

      // Show after scrolling past 200px for quick mobile availability
      if (scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("touchmove", updateVisibility, { passive: true });
    updateVisibility();

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("touchmove", updateVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`group fixed bottom-24 right-4 sm:bottom-8 sm:right-8 2xl:bottom-44 2xl:right-9 z-[999] flex items-center justify-center gap-1.5 rounded-full bg-white text-black shadow-[0_8px_25px_rgba(0,0,0,0.8),0_0_20px_rgba(255,255,255,0.35)] border border-white transition-all duration-300 active:scale-90 hover:scale-105 px-3.5 py-2 sm:size-12 sm:p-0 ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ArrowUp size={16} className="transition-transform duration-200 group-hover:-translate-y-0.5 stroke-[2.5]" />
      <span className="sm:hidden font-poppins text-[11px] font-bold uppercase tracking-wider">
        Top
      </span>
    </button>
  );
}
