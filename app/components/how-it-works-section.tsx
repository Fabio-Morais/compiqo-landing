"use client";

import { motion } from "framer-motion";

export function HowItWorksHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
        Como Funciona
      </h2>
      <p className="text-lg text-muted-foreground">
        Quatro passos simples para começar
      </p>
    </motion.div>
  );
}

export function StepItem({ item, index }: { item: { step: string; title: string; desc: string }; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="relative flex gap-6 md:gap-8 group"
    >
      {/* Dot indicator */}
      <motion.div
        className="relative z-10 flex-shrink-0"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: index * 0.1 + 0.1,
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-orange-500 flex items-center justify-center ring-4 ring-background shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform">
          <span className="text-[10px] md:text-xs font-bold text-white">
            {index + 1}
          </span>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="flex-1 pb-2"
        whileHover={{ x: 4 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h3 className="text-xl md:text-2xl font-bold mb-1 group-hover:text-orange-600 transition-colors">
          {item.title}
        </h3>
        <p className="text-muted-foreground">{item.desc}</p>
      </motion.div>
    </motion.div>
  );
}

