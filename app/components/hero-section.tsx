"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, CheckCircle2, Shield, Zap, Users, Scale, Trophy } from "lucide-react";
import { Badge } from "./ui/badge";
import Link from "next/link";

export function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="space-y-10"
    >
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-orange-600 text-sm font-bold border border-orange-100 shadow-sm dark:bg-orange-950/50 dark:border-orange-900">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-600"></span>
        </span>
        Plataforma Completa para Desportos de Combate
      </div>

      <h1 className="text-5xl lg:text-7xl font-heading font-bold tracking-tight leading-[1.1] text-foreground">
        Gira o seu clube.{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
          Prepare campeões.
        </span>
      </h1>

      <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
        O Compiqo é a plataforma B2B que conecta clubes, atletas e
        organizadores de eventos. Controlo de peso, prontidão para
        competições, histórico de lutas e muito mais num só lugar.
      </p>

      <div className="flex flex-col sm:flex-row gap-5">
        <Link href="/club">
          <Button
            size="lg"
            className="h-14 px-10 text-lg rounded-full shadow-xl shadow-primary/20 hover:scale-105 transition-transform bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700"
          >
            Aceder como Clube <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </Link>
      </div>

      <div className="flex flex-wrap gap-6 text-sm font-medium text-muted-foreground pt-6 border-t border-border">
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
    </motion.div>
  );
}

export function HeroMockup() {
  return (
    <div className="relative lg:h-[700px] w-full flex items-center justify-center perspective-[2000px]">
      <motion.div
        initial={{ opacity: 0, rotateY: -20, rotateX: 10 }}
        animate={{ opacity: 1, rotateY: -12, rotateX: 5 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative w-full max-w-md aspect-[9/19] rounded-[3rem] overflow-hidden shadow-2xl border-[8px] border-white bg-white ring-1 ring-black/5"
      >
        {/* Phone Screen Content Mockup */}
        <div className="h-full w-full bg-background relative overflow-hidden flex flex-col">
          {/* Status Bar */}
          <div className="h-12 w-full bg-white flex justify-between items-center px-6">
            <span className="text-xs font-bold">9:41</span>
            <div className="flex gap-1">
              <div className="w-4 h-4 bg-black rounded-sm"></div>
              <div className="w-4 h-4 bg-black rounded-sm"></div>
            </div>
          </div>

          {/* App Header */}
          <div className="p-6 pb-2">
            <div className="flex justify-between items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-gray-200"></div>
              <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-2">O Meu Clube</h2>
          </div>

          {/* App Content */}
          <div className="flex-1 bg-gray-50 rounded-t-[2.5rem] p-6 space-y-4">
            {/* Mock Card 1 */}
            <div className="bg-white p-4 rounded-2xl shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm">
                  12 atletas prontos
                </p>
                <p className="text-xs text-muted-foreground">
                  Para o evento de sábado
                </p>
              </div>
            </div>
            {/* Mock Card 2 */}
            <div className="bg-white p-4 rounded-2xl shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                <Scale className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm">
                  3 em corte de peso
                </p>
                <p className="text-xs text-muted-foreground">
                  Monitorização activa
                </p>
              </div>
            </div>
            {/* Mock Card 3 */}
            <div className="h-32 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-4 flex flex-col justify-between text-white shadow-lg shadow-orange-500/30">
              <div className="flex justify-between items-start">
                <Trophy className="w-8 h-8" />
                <Badge className="bg-white/20 hover:bg-white/20 text-white border-0">
                  Próximo
                </Badge>
              </div>
              <div>
                <p className="font-bold">Campeonato Regional</p>
                <p className="text-sm opacity-80">
                  15 de Junho • Lisboa
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 -right-10 bg-white p-4 rounded-2xl shadow-xl shadow-black/5 flex items-center gap-3 z-20 dark:bg-card"
      >
        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <div>
          <p className="font-bold text-sm">Pronto para Competir</p>
          <p className="text-xs text-muted-foreground">
            Alex actualizou estado
          </p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-32 -left-6 bg-white p-4 rounded-2xl shadow-xl shadow-black/5 flex items-center gap-3 z-20 dark:bg-card"
      >
        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
          <Trophy className="w-6 h-6" />
        </div>
        <div>
          <p className="font-bold text-sm">Nova Vitória!</p>
          <p className="text-xs text-muted-foreground">
            Sarah venceu por nocaute
          </p>
        </div>
      </motion.div>
    </div>
  );
}

