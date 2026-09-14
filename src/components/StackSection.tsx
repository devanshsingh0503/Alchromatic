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
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | undefined;

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      if (!ref.current) return;

      ctx = gsap.context(() => {
        // Scale down on GPU compositor thread
        gsap.fromTo(
          ref.current,
          { scale: 1, force3D: true },
          {
            scale: 0.9,
            ease: "none",
            force3D: true,
            scrollTrigger: {
              trigger: ref.current,
              start: "top top",
              end: "bottom top",
              scrub: 1.0,
            },
          }
        );

        // Hardware-accelerated dimming via opacity overlay (no layout repaint or filter lag)
        if (overlayRef.current) {
          gsap.fromTo(
            overlayRef.current,
            { opacity: 0 },
            {
              opacity: 0.55,
              ease: "none",
              scrollTrigger: {
                trigger: ref.current,
                start: "top top",
                end: "bottom top",
                scrub: 1.0,
              },
            }
          );
        }
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
        borderRadius: index === 0 ? "0" : "24px 24px 0 0",
        willChange: "transform",
        transform: "translate3d(0, 0, 0)",
        backfaceVisibility: "hidden",
      }}
    >
      {children}
      {/* GPU compositor dimming layer */}
      <div
        ref={overlayRef}
        className="pointer-events-none absolute inset-0 bg-black z-50 transition-none"
        style={{ opacity: 0, willChange: "opacity" }}
      />
    </div>
  );
}
