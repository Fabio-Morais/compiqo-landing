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

export function SportsSectionHeaderStatic() {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
        Modalidades Suportadas
      </h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Suporte completo para as três principais modalidades de combate
      </p>
    </div>
  );
}

export function SportCardStatic({
  sport,
}: {
  sport: { name: string; emoji: string; classes: string[] };
}) {
  return (
    <div className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-lg transition-all text-center">
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
    </div>
  );
}

export function FeaturesSectionHeaderStatic() {
  return (
    <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
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
    </div>
  );
}

export function FeatureCardStatic({
  feature,
}: {
  feature: { icon: string; title: string; desc: string };
}) {
  const Icon = iconMap[feature.icon];
  return (
    <Card className="border-border/50 hover:shadow-xl transition-all hover:-translate-y-2 h-full group">
      <CardHeader>
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center text-orange-600 mb-4 group-hover:scale-110 transition-transform">
          <Icon className="w-7 h-7" />
        </div>
        <CardTitle className="text-xl">{feature.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
      </CardContent>
    </Card>
  );
}

export function HowItWorksHeaderStatic() {
  return (
    <div className="mb-16">
      <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
        Como Funciona
      </h2>
      <p className="text-lg text-muted-foreground">
        Quatro passos simples para começar
      </p>
    </div>
  );
}

export function StepItemStatic({
  item,
  index,
}: {
  item: { step: string; title: string; desc: string };
  index: number;
}) {
  return (
    <div className="relative flex gap-6 md:gap-8 group">
      {/* Dot indicator */}
      <div className="relative z-10 flex-shrink-0">
        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-orange-500 flex items-center justify-center ring-4 ring-background shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform">
          <span className="text-[10px] md:text-xs font-bold text-white">
            {index + 1}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 pb-2">
        <h3 className="text-xl md:text-2xl font-bold mb-1 group-hover:text-orange-600 transition-colors">
          {item.title}
        </h3>
        <p className="text-muted-foreground">{item.desc}</p>
      </div>
    </div>
  );
}

export function CTASectionStatic() {
  return (
    <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
      <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
        Pronto para transformar o seu clube?
      </h2>
      <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
        Junte-se a clubes que já estão a usar o Compiqo para preparar atletas
        campeões. Comece gratuitamente hoje.
      </p>
    </div>
  );
}

