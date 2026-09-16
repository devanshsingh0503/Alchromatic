"use client";

import React from "react";

interface ParallaxElementProps {
  children?: React.ReactNode;
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * ParallaxElement — lightweight hardware-composited wrapper.
 * Avoids main-thread scroll hijacking to ensure 60/120fps fluid scrolling on both mobile and laptop.
 */
export default function ParallaxElement({
  children,
  className = "",
  style,
}: ParallaxElementProps) {
  return (
    <div
      className={className}
      style={{
        transform: "translate3d(0, 0, 0)",
        WebkitTransform: "translate3d(0, 0, 0)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
