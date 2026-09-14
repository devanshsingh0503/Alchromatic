"use client";

import { useEffect, useRef } from "react";

interface ParallaxElementProps {
  /** Optional — omit when using as a decorative background element */
  children?: React.ReactNode;
  /**
   * How many px the element drifts over its full scroll range.
   * Positive → moves up as you scroll down (background feel).
   * Negative → moves down as you scroll down (counter-parallax).
   * Rule of thumb:  bg orbs = 80-120 | images = 30-60 | text = 8-20
   */
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * ParallaxElement — wraps any element and applies a smooth
 * GSAP ScrollTrigger-driven Y-axis parallax as it passes through the viewport.
 */
export default function ParallaxElement({
  children,
  speed = 40,
  className = "",
  style,
}: ParallaxElementProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | undefined;

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      if (!ref.current) return;

      ctx = gsap.context(() => {
        gsap.fromTo(
          ref.current,
          { y: speed, force3D: true },     // starts offset (pushed down for bg elements)
          {
            y: -speed,       // ends offset (pulled up — drifts opposite scroll)
            ease: "none",
            force3D: true,
            scrollTrigger: {
              trigger: ref.current,
              start: "top bottom",   // begins when element bottom enters viewport
              end: "bottom top",     // ends when element top leaves viewport
              scrub: 1.0,            // crisp responsive lag
            },
          }
        );
      }, ref);
    })();

    return () => ctx?.revert();
  }, [speed]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        willChange: speed !== 0 ? "transform" : undefined,
        transform: "translate3d(0, 0, 0)",
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
