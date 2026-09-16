"use client";

import React, { useEffect, useRef, useState } from "react";

interface StackSectionProps {
  children: React.ReactNode;
  className?: string;
  /** z-index stacking order */
  index?: number;
  /** Background color of the card */
  bg?: string;
}

/**
 * StackSection — High-performance full-page card stacking architecture
 *
 * Sticks when the bottom of the section reaches 50% of the viewport (50dvh).
 * This ensures the user can scroll through and view the entire section —
 * including all bottom content, buttons, videos, and cards — before the next section
 * begins its smooth overlapping card transition.
 */
export default function StackSection({
  children,
  className = "",
  index = 0,
  bg = "#000",
}: StackSectionProps) {
  const ref = useRef<HTMLElement>(null);

  // SSR default: for a 100dvh element, sticking when bottom reaches 50dvh means top is at -50dvh.
  const [stickyTop, setStickyTop] = useState<string>("calc(50dvh - 100dvh)");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const updateStickyTop = () => {
      const h = el.offsetHeight;
      if (h > 0) {
        const unit =
          typeof CSS !== "undefined" && CSS.supports && CSS.supports("height", "100dvh")
            ? "dvh"
            : "vh";
        // When bottom is at 50% of viewport, top is at: 50% viewport - element height
        setStickyTop(`calc(50${unit} - ${h}px)`);
      }
    };

    updateStickyTop();

    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(updateStickyTop);
      ro.observe(el);
    }

    window.addEventListener("resize", updateStickyTop, { passive: true });
    window.addEventListener("orientationchange", updateStickyTop, { passive: true });

    return () => {
      ro?.disconnect();
      window.removeEventListener("resize", updateStickyTop);
      window.removeEventListener("orientationchange", updateStickyTop);
    };
  }, []);

  return (
    <section
      ref={ref}
      className={`sticky min-h-[100dvh] w-full flex flex-col justify-center overflow-hidden ${
        index === 0
          ? "rounded-none"
          : "rounded-t-[26px] sm:rounded-t-[36px] shadow-[0_-16px_50px_rgba(0,0,0,0.95)]"
      } ${className}`}
      style={{
        top: stickyTop,
        zIndex: 10 + index,
        backgroundColor: bg,
        transform: "translate3d(0, 0, 0)",
        WebkitTransform: "translate3d(0, 0, 0)",
      }}
    >
      {children}
    </section>
  );
}
