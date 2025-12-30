import { Button } from "./ui/button";
import { ArrowRight, CheckCircle2, Shield, Zap } from "lucide-react";

export function HeroContentStatic({ t }: { t: any }) {
  return (
    <div className="space-y-10">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-orange-600 text-sm font-bold border border-orange-100 shadow-sm dark:bg-orange-950/50 dark:border-orange-900">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-600"></span>
        </span>
        {t.hero.badge}
      </div>

      <h1 className="text-5xl lg:text-7xl font-heading font-bold tracking-tight leading-[1.1] text-foreground">
        {t.hero.title}{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
          {t.hero.titleHighlight}
        </span>
      </h1>

      <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
        {t.hero.description}
      </p>

      <div className="flex flex-col sm:flex-row gap-5">
        <Button
          size="lg"
          disabled
          className="h-14 px-10 text-lg rounded-full shadow-xl shadow-primary/20 opacity-60 cursor-not-allowed bg-gradient-to-r from-orange-500 to-red-600"
        >
          {t.hero.cta} <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>

      <div className="flex flex-wrap gap-4 sm:gap-6 text-sm font-medium text-muted-foreground pt-6 border-t border-border">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-full bg-green-100 text-green-600 dark:bg-green-950 dark:text-green-400">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <span>{t.hero.badges.free}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
            <Shield className="w-4 h-4" />
          </div>
          <span>{t.hero.badges.protected}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-full bg-purple-100 text-purple-600 dark:bg-purple-950 dark:text-purple-400">
            <Zap className="w-4 h-4" />
          </div>
          <span>{t.hero.badges.setup}</span>
        </div>
      </div>
    </div>
  );
}
