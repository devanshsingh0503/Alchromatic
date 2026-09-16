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
 *
 * Sticks when the bottom of the section reaches 50% of the viewport (top: -50dvh).
 * Pure CSS sticky positioning: Zero main-thread overhead, zero re-renders,
 * zero ResizeObservers, and zero touch gesture lag/glitch on mobile & laptop.
 */
export default function StackSection({
  children,
  className = "",
  index = 0,
  bg = "#000",
}: StackSectionProps) {
  return (
    <section
      className={`stack-section min-h-[100dvh] w-full flex flex-col justify-center overflow-hidden ${
        index === 0
          ? "rounded-none"
          : "rounded-t-[26px] sm:rounded-t-[36px] border-t border-white/10 shadow-[0_-20px_60px_rgba(0,0,0,0.95)]"
      } ${className}`}
      style={{
        zIndex: 10 + index,
        backgroundColor: bg,
      }}
    >
      {children}
    </section>
  );
}
