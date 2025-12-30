import { Button } from "./ui/button";
import { ArrowRight, CheckCircle2, Shield, Zap } from "lucide-react";

export function HeroContentStatic() {
  return (
    <div className="space-y-10">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-orange-600 text-sm font-bold border border-orange-100 shadow-sm dark:bg-orange-950/50 dark:border-orange-900">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-600"></span>
        </span>
        Plataforma Completa para Desportos de Combate
      </div>

      <h1 className="text-5xl lg:text-7xl font-heading font-bold tracking-tight leading-[1.1] text-foreground">
        Gere o seu clube de desportos de combate.{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
          Prepare campeões.
        </span>
      </h1>

      <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
        O Compiqo é a plataforma B2B que conecta clubes, atletas e organizadores
        de eventos. Controlo de peso, prontidão para competições, histórico de
        lutas e muito mais num só lugar.
      </p>

      <div className="flex flex-col sm:flex-row gap-5">
        <Button
          size="lg"
          disabled
          className="h-14 px-10 text-lg rounded-full shadow-xl shadow-primary/20 opacity-60 cursor-not-allowed bg-gradient-to-r from-orange-500 to-red-600"
        >
          Brevemente <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>

      <div className="flex flex-wrap gap-4 sm:gap-6 text-sm font-medium text-muted-foreground pt-6 border-t border-border">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-full bg-green-100 text-green-600 dark:bg-green-950 dark:text-green-400">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <span>Gratuito para Atletas</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
            <Shield className="w-4 h-4" />
          </div>
          <span>Dados Protegidos</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-full bg-purple-100 text-purple-600 dark:bg-purple-950 dark:text-purple-400">
            <Zap className="w-4 h-4" />
          </div>
          <span>Setup em 5 minutos</span>
        </div>
      </div>
    </div>
  );
}
