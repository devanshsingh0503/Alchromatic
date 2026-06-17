"use client";

import { useEffect, useRef } from "react";

interface StackSectionProps {
  children: React.ReactNode;
  className?: string;
  /** z-index offset — pass the section's order index */
  index?: number;
  /** Background color of the card */
  bg?: string;
}

/**
 * StackSection — wraps a page section so it:
 * 1. Sticks to the top (position: sticky; top: 0)
 * 2. Scales down + dims when the NEXT section scrolls over it
 *
 * Just wrap any <section> with <StackSection index={n}> and it works.
 */
export default function StackSection({
  children,
  className = "",
  index = 0,
  bg = "#000",
}: StackSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | undefined;

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      if (!ref.current) return;

      ctx = gsap.context(() => {
        // As this section scrolls OUT (next card comes in), scale it down & dim it
        gsap.fromTo(
          ref.current,
          { scale: 1, filter: "brightness(1)" },
          {
            scale: 0.88,
            filter: "brightness(0.5)",
            ease: "none",
            scrollTrigger: {
              trigger: ref.current,
              // Start when the top of this section hits the top of viewport (it's now pinned)
              start: "top top",
              // End when the bottom of this section reaches the top (next card fully in)
              end: "bottom top",
              scrub: 1.2,
            },
          }
        );
      }, ref);
    })();

    return () => ctx?.revert();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative sticky top-0 overflow-hidden ${className}`}
      style={{
        zIndex: 10 + index,
        background: bg,
        // Subtle top rounding so stacked cards look layered
        borderRadius: index === 0 ? "0" : "24px 24px 0 0",
        willChange: "transform, filter",
      }}
    >
      {children}
    </div>
  );
}
