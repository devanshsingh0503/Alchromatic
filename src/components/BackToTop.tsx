"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show when scrolled down past 400px
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
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
      className={`group fixed bottom-24 right-4 sm:bottom-8 sm:right-8 2xl:bottom-44 2xl:right-9 z-40 flex size-11 sm:size-12 items-center justify-center rounded-full border border-white/20 bg-black/80 text-white/80 shadow-[0_8px_30px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all duration-300 hover:border-white/60 hover:bg-white hover:text-black hover:scale-110 active:scale-95 ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ArrowUp size={18} className="transition-transform duration-200 group-hover:-translate-y-0.5" />
    </button>
  );
}
