import { CheckCircle2, Scale, Trophy, Users } from "lucide-react";
import { Badge } from "./ui/badge";
import { HeroMockupFloatingElements } from "./hero-mockup-floating";

export function HeroMockupStatic() {
  return (
    <div className="relative w-full flex items-center justify-center perspective-[2000px]">
      <div className="relative w-full max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-md aspect-[9/19] rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden shadow-xl lg:shadow-2xl border-[4px] sm:border-[6px] md:border-[7px] lg:border-[8px] border-white bg-white ring-1 ring-black/5 scale-90 sm:scale-95 lg:scale-100">
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
            <div className="bg-white p-2 sm:p-3 lg:p-4 rounded-xl sm:rounded-2xl shadow-sm flex items-center gap-2 sm:gap-3 lg:gap-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-xs sm:text-sm truncate">12 atletas prontos</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground truncate">
                  Para o evento de sábado
                </p>
              </div>
            </div>
            {/* Mock Card 2 */}
            <div className="bg-white p-2 sm:p-3 lg:p-4 rounded-xl sm:rounded-2xl shadow-sm flex items-center gap-2 sm:gap-3 lg:gap-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 flex-shrink-0">
                <Scale className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-xs sm:text-sm truncate">3 em corte de peso</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground truncate">
                  Monitorização activa
                </p>
              </div>
            </div>
            {/* Mock Card 3 */}
            <div className="h-20 sm:h-24 lg:h-32 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl sm:rounded-2xl p-2 sm:p-3 lg:p-4 flex flex-col justify-between text-white shadow-lg shadow-orange-500/30">
              <div className="flex justify-between items-start">
                <Trophy className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
                <Badge className="bg-white/20 hover:bg-white/20 text-white border-0 text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5">
                  Próximo
                </Badge>
              </div>
              <div>
                <p className="font-bold text-xs sm:text-sm lg:text-base">Campeonato Regional</p>
                <p className="text-[10px] sm:text-xs opacity-80">15 de Junho • Lisboa</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements - Client-side only for animation */}
      <HeroMockupFloatingElements />
    </div>
  );
}

