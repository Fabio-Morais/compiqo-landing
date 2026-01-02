"use client";

import dynamic from "next/dynamic";
import { ReactNode } from "react";

// Lazy load framer-motion only when needed
const AnimatedWrapperComponent = dynamic(
  () => import("./animated-wrapper").then((mod) => mod.AnimatedWrapper),
  {
    ssr: false,
  }
);

export function AnimatedWrapperLazy({
  children,
  className = "",
  delay = 0,
  initial,
  animate,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  initial?: { opacity: number; y?: number; x?: number };
  animate?: { opacity: number; y?: number; x?: number };
}) {
  // Render children immediately, animations load later
  return (
    <AnimatedWrapperComponent
      className={className}
      delay={delay}
      initial={initial}
      animate={animate}
    >
      {children}
    </AnimatedWrapperComponent>
  );
}

