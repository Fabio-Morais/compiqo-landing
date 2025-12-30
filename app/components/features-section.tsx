"use client";

import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Users,
  Scale,
  Calendar,
  Trophy,
  Target,
  Zap,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Users,
  Scale,
  Calendar,
  Trophy,
  Target,
  Zap,
};

export function FeaturesSectionHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center max-w-4xl mx-auto mb-20 space-y-6"
    >
      <Badge className="mb-4 text-base px-4 py-1.5 bg-orange-100 text-orange-700 hover:bg-orange-100 dark:bg-orange-950 dark:text-orange-400">
        Funcionalidades
      </Badge>
      <h2 className="text-5xl md:text-6xl font-heading font-bold leading-tight">
        Tudo o que precisa para gerir o seu clube
      </h2>
      <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
        Ferramentas profissionais para clubes de todos os tamanhos.
        Simplifique a gestão e foque no que importa: formar campeões.
      </p>
    </motion.div>
  );
}

export function FeatureCard({
  feature,
  index,
}: {
  feature: { icon: string; title: string; desc: string };
  index: number;
}) {
  const Icon = iconMap[feature.icon];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="border-border/50 hover:shadow-xl transition-all hover:-translate-y-2 h-full group">
        <CardHeader>
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center text-orange-600 mb-4 group-hover:scale-110 transition-transform">
            <Icon className="w-7 h-7" />
          </div>
          <CardTitle className="text-xl">{feature.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            {feature.desc}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

