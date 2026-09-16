import React from "react";

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
 * Uses native CSS sticky stacking + GPU acceleration for silky 60/120fps on mobile and laptop.
 * Each section is a full-page view card that smoothly overlaps the previous one as you scroll.
 */
export default function StackSection({
  children,
  className = "",
  index = 0,
  bg = "#000",
}: StackSectionProps) {
  return (
    <section
      className={`sticky top-0 min-h-[100dvh] w-full flex flex-col justify-center overflow-hidden ${
        index === 0
          ? "rounded-none"
          : "rounded-t-[26px] sm:rounded-t-[36px] shadow-[0_-16px_50px_rgba(0,0,0,0.95)]"
      } ${className}`}
      style={{
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
