"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef, useMemo } from "react";

// Deterministic random function based on seed
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

// Animated gradient background with sport-themed motion
export function AnimatedGradientBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(251, 146, 60, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(239, 68, 68, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 20%, rgba(251, 146, 60, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(251, 146, 60, 0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            "radial-gradient(circle at 80% 80%, rgba(239, 68, 68, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 20%, rgba(251, 146, 60, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 80%, rgba(239, 68, 68, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 80%, rgba(239, 68, 68, 0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

// Speed lines effect for sport theme
export function SpeedLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-full w-px bg-gradient-to-b from-transparent via-orange-500/50 to-transparent"
          style={{
            left: `${(i + 1) * 12.5}%`,
          }}
          animate={{
            y: ["-100%", "100%"],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 2 + i * 0.3,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

// Pulse effect for sport badges/icons
export function PulseGlow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      animate={{
        scale: [1, 1.05, 1],
        boxShadow: [
          "0 0 0px rgba(251, 146, 60, 0)",
          "0 0 20px rgba(251, 146, 60, 0.3)",
          "0 0 0px rgba(251, 146, 60, 0)",
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}

// Parallax scroll effect
export function ParallaxSection({ children, speed = 0.5 }: { children: ReactNode; speed?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100 * speed]);

  return (
    <motion.div ref={ref} style={{ y }} className="w-full">
      {children}
    </motion.div>
  );
}

// Sport icon animation (punch/kick motion)
export function SportIconAnimation({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ scale: 0, rotate: -45 }}
      animate={{
        scale: [0, 1.2, 1],
        rotate: [-45, 10, 0],
      }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.34, 1.56, 0.64, 1], // Elastic bounce
      }}
      whileHover={{
        scale: 1.1,
        rotate: [0, -10, 10, 0],
        transition: { duration: 0.3 },
      }}
    >
      {children}
    </motion.div>
  );
}

// Stagger animation for cards
export function StaggerContainer({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 30, scale: 0.9 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.5,
            ease: [0.34, 1.56, 0.64, 1],
          },
        },
      }}
      whileHover={{
        y: -8,
        transition: { duration: 0.2 },
      }}
    >
      {children}
    </motion.div>
  );
}

// Animated border glow
export function GlowBorder({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{
        boxShadow: [
          "0 0 0px rgba(251, 146, 60, 0)",
          "0 0 30px rgba(251, 146, 60, 0.4)",
          "0 0 0px rgba(251, 146, 60, 0)",
        ],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}

// Floating particles effect
export function FloatingParticles() {
  const particles = useMemo(() => {
    return Array.from({ length: 12 }).map((_, i) => {
      const seed = i * 0.1;
      return {
        left: seededRandom(seed) * 100,
        top: seededRandom(seed + 1) * 100,
        x: seededRandom(seed + 2) * 20 - 10,
        duration: 3 + seededRandom(seed + 3) * 2,
        delay: seededRandom(seed + 4) * 2,
      };
    });
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-orange-500/30"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, particle.x, 0],
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Animated text reveal with sport energy
export function SportTextReveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -90 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.34, 1.56, 0.64, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

// Ripple effect on hover (like impact)
export function RippleEffect({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      whileHover="hover"
      initial="initial"
    >
      {children}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-orange-500/20 to-transparent rounded-full"
        variants={{
          initial: { scale: 0, opacity: 0 },
          hover: {
            scale: 2,
            opacity: [0, 0.5, 0],
            transition: { duration: 0.6 },
          },
        }}
      />
    </motion.div>
  );
}

