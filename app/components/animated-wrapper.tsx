"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  initial?: { opacity: number; y?: number; x?: number };
  animate?: { opacity: number; y?: number; x?: number };
}

export function AnimatedWrapper({
  children,
  className = "",
  delay = 0,
  initial,
  animate,
}: AnimatedWrapperProps) {
  const defaultInitial = initial || { opacity: 0, y: 20 };
  const defaultAnimate = animate || { opacity: 1, y: 0 };
  
  return (
    <motion.div
      initial={defaultInitial}
      whileInView={defaultAnimate}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedHeroWrapper({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedMockupWrapper({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, rotateY: -15, rotateX: 8 }}
      animate={{ opacity: 1, rotateY: -10, rotateX: 3 }}
      transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FloatingElement({
  children,
  className = "",
  delay = 0,
  yRange = [0, -20, 0],
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  yRange?: number[];
}) {
  return (
    <motion.div
      animate={{ y: yRange }}
      transition={{
        duration: delay === 0 ? 4 : 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

