"use client";

import { CheckCircle2, Trophy } from "lucide-react";
import { FloatingElement } from "./animated-wrapper";

export function HeroMockupFloatingElements() {
  return (
    <>
      <FloatingElement
        className="absolute top-8 sm:top-10 md:top-16 lg:top-20 right-2 sm:right-4 md:-right-6 lg:-right-10 bg-white p-2 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl lg:rounded-2xl shadow-xl shadow-black/5 flex items-center gap-2 sm:gap-3 z-20 dark:bg-card max-w-[130px] sm:max-w-[160px] md:max-w-[180px] lg:max-w-none"
        yRange={[0, -20, 0]}
      >
        <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
          <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-6 lg:h-6" />
        </div>
        <div className="min-w-0">
          <p className="font-bold text-[10px] sm:text-xs md:text-sm truncate">
            Pronto para Competir
          </p>
          <p className="text-[9px] sm:text-[10px] md:text-xs text-muted-foreground truncate">
            Alex actualizou estado
          </p>
        </div>
      </FloatingElement>

      <FloatingElement
        className="absolute bottom-12 sm:bottom-16 md:bottom-24 lg:bottom-32 left-2 sm:left-4 md:-left-4 lg:-left-6 bg-white p-2 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl lg:rounded-2xl shadow-xl shadow-black/5 flex items-center gap-2 sm:gap-3 z-20 dark:bg-card max-w-[130px] sm:max-w-[160px] md:max-w-[180px] lg:max-w-none"
        delay={1}
        yRange={[0, 15, 0]}
      >
        <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 flex-shrink-0">
          <Trophy className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-6 lg:h-6" />
        </div>
        <div className="min-w-0">
          <p className="font-bold text-[10px] sm:text-xs md:text-sm truncate">
            Nova Vitória!
          </p>
          <p className="text-[9px] sm:text-[10px] md:text-xs text-muted-foreground truncate">
            Sarah venceu por nocaute
          </p>
        </div>
      </FloatingElement>
    </>
  );
}
