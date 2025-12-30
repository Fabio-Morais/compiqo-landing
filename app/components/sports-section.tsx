"use client";

import { motion } from "framer-motion";

export function SportsSectionHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
        Modalidades Suportadas
      </h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Suporte completo para as três principais modalidades de combate
      </p>
    </motion.div>
  );
}

export function SportCard({ sport, index }: { sport: { name: string; emoji: string; classes: string[] }; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-lg transition-all text-center"
    >
      <span className="text-4xl mb-3 block">{sport.emoji}</span>
      <h3 className="font-bold text-xl mb-3">{sport.name}</h3>
      <div className="flex flex-wrap justify-center gap-2">
        {sport.classes.map((cls) => (
          <span
            key={cls}
            className="px-3 py-1 text-xs font-medium rounded-full bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-400"
          >
            {cls}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

