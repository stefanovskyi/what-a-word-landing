"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Extra classes for the wrapper element. */
  className?: string;
  /** Stagger delay in ms. Keep small; total ≤ 400ms across one row/group. */
  delay?: number;
};

/**
 * Scroll-reveal wrapper.
 *
 * Renders children fully visible by default, so the static export's HTML
 * (no JS, crawlers, prefers-reduced-motion) always shows everything — content
 * is never gated on JavaScript. When JS is available and the user has not
 * requested reduced motion, the content fades/slides in once as it enters the
 * viewport. One-shot; self-disconnects; honors prefers-reduced-motion.
 *
 * Usage: wrap a section or a single item.
 *   <Reveal>...</Reveal>
 *   <Reveal delay={80}>...</Reveal>   // staggered sibling
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [enhance, setEnhance] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce || typeof IntersectionObserver === "undefined") {
      return; // keep the visible default state — no animation
    }

    // JS is running and motion is allowed: now it is safe to hide-then-reveal.
    setEnhance(true);
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            io.disconnect();
            break;
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const hidden = enhance && !shown;

  return (
    <div
      ref={ref}
      data-reveal=""
      className={className}
      style={{
        transition: "opacity 300ms ease-out, transform 300ms ease-out",
        transitionDelay: `${delay}ms`,
        opacity: hidden ? 0 : 1,
        transform: hidden ? "translateY(16px)" : "none",
      }}
    >
      {children}
    </div>
  );
}

export default Reveal;
