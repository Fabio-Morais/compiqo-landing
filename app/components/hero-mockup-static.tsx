"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Users,
  MapPin,
  Calendar,
  Target,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Activity,
  Scale,
  Trophy,
  History,
  TrendingUp,
  MessageSquare,
  Heart,
} from "lucide-react";
import { Badge } from "./ui/badge";
import { HeroMockupFloatingElements } from "./hero-mockup-floating";
import { Translations } from "../lib/i18n";

export function HeroMockupStatic({ t }: { t: Translations }) {
  const [screen, setScreen] = useState<
    "matchmaking" | "management" | "history" | "community"
  >("matchmaking");

  const screens: Array<"matchmaking" | "management" | "history" | "community"> =
    ["matchmaking", "management", "history", "community"];

  const currentIndex = screens.indexOf(screen);
  const nextScreen = screens[(currentIndex + 1) % screens.length];
  const prevScreen =
    screens[(currentIndex - 1 + screens.length) % screens.length];

  return (
    <div className="relative w-full flex items-center justify-center perspective-[2000px]">
      {/* Left Arrow Button - Outside phone */}
      <motion.button
        onClick={() => setScreen(prevScreen)}
        disabled={screen === screens[0]}
        className={`absolute left-0 md:-left-8 lg:-left-10 z-30 w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center bg-white/90 backdrop-blur-sm shadow-lg border border-gray-200 transition-all hover:scale-110 ${
          screen === screens[0]
            ? "opacity-40 cursor-not-allowed text-gray-400"
            : "text-gray-700 hover:bg-white"
        }`}
        aria-label={t.mockup.common.previous}
        animate={
          screen !== screens[0]
            ? {
                boxShadow: [
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                  "0 10px 15px -3px rgba(59, 130, 246, 0.3), 0 4px 6px -2px rgba(59, 130, 246, 0.2)",
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                ],
              }
            : {}
        }
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "easeInOut",
        }}
      >
        <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
      </motion.button>

      {/* Right Arrow Button - Outside phone */}
      <motion.button
        onClick={() => setScreen(nextScreen)}
        disabled={screen === screens[screens.length - 1]}
        className={`absolute right-0 md:-right-8 lg:-right-10 z-30 w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center bg-white/90 backdrop-blur-sm shadow-lg border border-gray-200 transition-all hover:scale-110 ${
          screen === screens[screens.length - 1]
            ? "opacity-40 cursor-not-allowed text-gray-400"
            : "text-gray-700 hover:bg-white"
        }`}
        aria-label={t.mockup.common.next}
        animate={
          screen !== screens[screens.length - 1]
            ? {
                boxShadow: [
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                  "0 10px 15px -3px rgba(59, 130, 246, 0.3), 0 4px 6px -2px rgba(59, 130, 246, 0.2)",
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                ],
              }
            : {}
        }
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "easeInOut",
        }}
      >
        <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
      </motion.button>

      <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-md aspect-[9/19.5] rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden shadow-xl lg:shadow-2xl border-[4px] sm:border-[6px] md:border-[7px] lg:border-[8px] border-white bg-white ring-1 ring-black/5 scale-100 sm:scale-100 lg:scale-100">
        {/* Phone Screen Content Mockup */}
        <div className="h-full w-full bg-background relative overflow-hidden flex flex-col">
          {/* Status Bar */}
          <div className="h-11 sm:h-12 w-full bg-white flex justify-between items-center px-5 sm:px-6">
            <span className="text-[11px] sm:text-xs font-bold">9:41</span>
            <div className="flex gap-1">
              <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 bg-black rounded-sm"></div>
              <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 bg-black rounded-sm"></div>
            </div>
          </div>

          {/* App Header */}
          <div className="p-4 sm:p-6 pb-3 sm:pb-4 bg-white border-b border-gray-100 relative">
            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-2 sm:mt-4">
              <button
                onClick={() => setScreen("matchmaking")}
                className={`transition-all rounded-full ${
                  screen === "matchmaking"
                    ? "w-6 sm:w-8 h-1.5 sm:h-2 bg-blue-500"
                    : "w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={t.mockup.screens.matchmaking.title}
              />
              <button
                onClick={() => setScreen("management")}
                className={`transition-all rounded-full ${
                  screen === "management"
                    ? "w-6 sm:w-8 h-1.5 sm:h-2 bg-blue-500"
                    : "w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={t.mockup.screens.management.title}
              />
              <button
                onClick={() => setScreen("history")}
                className={`transition-all rounded-full ${
                  screen === "history"
                    ? "w-6 sm:w-8 h-1.5 sm:h-2 bg-blue-500"
                    : "w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={t.mockup.screens.history.title}
              />
              <button
                onClick={() => setScreen("community")}
                className={`transition-all rounded-full ${
                  screen === "community"
                    ? "w-6 sm:w-8 h-1.5 sm:h-2 bg-blue-500"
                    : "w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={t.mockup.screens.community.title}
              />
            </div>
            <div className="flex justify-between items-center mb-2 sm:mb-3">
              <div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={screen}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-0.5 sm:mb-1">
                      {screen === "matchmaking"
                        ? t.mockup.screens.matchmaking.title
                        : screen === "management"
                        ? t.mockup.screens.management.title
                        : screen === "history"
                        ? t.mockup.screens.history.title
                        : t.mockup.screens.community.title}
                    </h2>
                    <p className="text-[11px] sm:text-xs text-muted-foreground">
                      {screen === "matchmaking"
                        ? t.mockup.screens.matchmaking.description
                        : screen === "management"
                        ? t.mockup.screens.management.description
                        : screen === "history"
                        ? t.mockup.screens.history.description
                        : t.mockup.screens.community.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-md flex-shrink-0">
                {screen === "matchmaking" ? (
                  <Search className="w-5 h-5 sm:w-5 sm:h-5 text-white" />
                ) : screen === "management" ? (
                  <Users className="w-5 h-5 sm:w-5 sm:h-5 text-white" />
                ) : screen === "history" ? (
                  <History className="w-5 h-5 sm:w-5 sm:h-5 text-white" />
                ) : (
                  <MessageSquare className="w-5 h-5 sm:w-5 sm:h-5 text-white" />
                )}
              </div>
            </div>
          </div>

          {/* App Content */}
          <div className="flex-1 bg-gray-50 rounded-t-[2rem] sm:rounded-t-[2.5rem] p-4 sm:p-5 lg:p-6 space-y-3 sm:space-y-3 overflow-hidden relative">
            <AnimatePresence mode="wait">
              {screen === "matchmaking" && (
                <motion.div
                  key="matchmaking"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-2 sm:space-y-3"
                >
                  {/* Search Card */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-2.5 sm:p-3 rounded-lg sm:rounded-xl shadow-sm border border-blue-100">
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-500 flex items-center justify-center flex-shrink-0">
                        <Target className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                      </div>
                      <p className="font-semibold text-[11px] sm:text-xs md:text-sm text-foreground">
                        {t.mockup.matchmaking.searchTitle}
                      </p>
                    </div>
                    <div className="flex gap-1.5 sm:gap-2 flex-wrap">
                      <Badge className="bg-white text-blue-700 border-blue-200 text-[8px] sm:text-[9px] px-1.5 sm:px-2 py-0.5 shadow-sm">
                        70kg
                      </Badge>
                      <Badge className="bg-white text-blue-700 border-blue-200 text-[8px] sm:text-[9px] px-1.5 sm:px-2 py-0.5 shadow-sm">
                        {t.mockup.sampleData.classes.pro}
                      </Badge>
                      <Badge className="bg-white text-blue-700 border-blue-200 text-[8px] sm:text-[9px] px-1.5 sm:px-2 py-0.5 shadow-sm">
                        {t.mockup.sampleData.sports.kickboxing}
                      </Badge>
                    </div>
                  </div>

                  {/* Athlete Card 1 - From Another Academy */}
                  <div className="bg-white p-2.5 sm:p-3 rounded-lg sm:rounded-xl shadow-sm border border-gray-200 hover:border-blue-300 transition-colors">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-[10px] sm:text-xs font-bold flex-shrink-0 shadow-sm">
                        MA
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5 sm:mb-1">
                          <p className="font-bold text-[11px] sm:text-xs md:text-sm text-foreground">
                            {t.mockup.sampleData.athletes.miguelAlves}
                          </p>
                          <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-600 flex-shrink-0" />
                        </div>
                        <div className="flex items-center gap-1 text-[9px] sm:text-[10px] text-muted-foreground mb-1.5 sm:mb-2">
                          <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 flex-shrink-0" />
                          <span className="truncate">
                            {t.mockup.sampleData.academies.lisboaFight}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1 sm:gap-1.5">
                          <Badge className="bg-gray-100 text-gray-700 text-[8px] sm:text-[9px] px-1 sm:px-1.5 py-0 border-gray-200">
                            70kg
                          </Badge>
                          <Badge className="bg-blue-50 text-blue-700 text-[8px] sm:text-[9px] px-1 sm:px-1.5 py-0 border-blue-200">
                            {t.mockup.sampleData.classes.pro}
                          </Badge>
                          <Badge className="bg-purple-50 text-purple-700 text-[8px] sm:text-[9px] px-1 sm:px-1.5 py-0 border-purple-200">
                            {t.mockup.sampleData.sports.kickboxing}
                          </Badge>
                          <Badge className="bg-green-50 text-green-700 text-[8px] sm:text-[9px] px-1 sm:px-1.5 py-0 border-green-200">
                            {t.mockup.common.ready}
                          </Badge>
                          <Badge className="bg-gray-100 text-gray-700 text-[8px] sm:text-[9px] px-1 sm:px-1.5 py-0 border-gray-200">
                            5-2-0
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Athlete Card 2 - From Another Academy */}
                  <div className="bg-white p-2.5 sm:p-3 rounded-lg sm:rounded-xl shadow-sm border border-gray-200 hover:border-indigo-300 transition-colors">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-[10px] sm:text-xs font-bold flex-shrink-0 shadow-sm">
                        SC
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5 sm:mb-1">
                          <p className="font-bold text-[11px] sm:text-xs md:text-sm text-foreground">
                            {t.mockup.sampleData.athletes.sofiaCosta}
                          </p>
                          <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-600 flex-shrink-0" />
                        </div>
                        <div className="flex items-center gap-1 text-[9px] sm:text-[10px] text-muted-foreground mb-1.5 sm:mb-2">
                          <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 flex-shrink-0" />
                          <span className="truncate">
                            {t.mockup.sampleData.academies.portoCombat}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1 sm:gap-1.5">
                          <Badge className="bg-gray-100 text-gray-700 text-[8px] sm:text-[9px] px-1 sm:px-1.5 py-0 border-gray-200">
                            68kg
                          </Badge>
                          <Badge className="bg-orange-50 text-orange-700 text-[8px] sm:text-[9px] px-1 sm:px-1.5 py-0 border-orange-200">
                            {t.mockup.sampleData.classes.neoPro}
                          </Badge>
                          <Badge className="bg-red-50 text-red-700 text-[8px] sm:text-[9px] px-1 sm:px-1.5 py-0 border-red-200">
                            {t.mockup.sampleData.sports.muayThai}
                          </Badge>
                          <Badge className="bg-green-50 text-green-700 text-[8px] sm:text-[9px] px-1 sm:px-1.5 py-0 border-green-200">
                            {t.mockup.common.ready}
                          </Badge>
                          <Badge className="bg-gray-100 text-gray-700 text-[8px] sm:text-[9px] px-1 sm:px-1.5 py-0 border-gray-200">
                            8-1-0
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Athlete Card 3 - From Another Academy */}
                  <div className="bg-white p-2.5 sm:p-3 rounded-lg sm:rounded-xl shadow-sm border border-gray-200 hover:border-green-300 transition-colors">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white text-[10px] sm:text-xs font-bold flex-shrink-0 shadow-sm">
                        RC
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5 sm:mb-1">
                          <p className="font-bold text-[11px] sm:text-xs md:text-sm text-foreground">
                            {t.mockup.sampleData.athletes.ricardoCarvalho}
                          </p>
                          <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-600 flex-shrink-0" />
                        </div>
                        <div className="flex items-center gap-1 text-[9px] sm:text-[10px] text-muted-foreground mb-1.5 sm:mb-2">
                          <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 flex-shrink-0" />
                          <span className="truncate">
                            {t.mockup.sampleData.academies.portoCombatAcademy}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1 sm:gap-1.5">
                          <Badge className="bg-gray-100 text-gray-700 text-[8px] sm:text-[9px] px-1 sm:px-1.5 py-0 border-gray-200">
                            75kg
                          </Badge>
                          <Badge className="bg-yellow-50 text-yellow-700 text-[8px] sm:text-[9px] px-1 sm:px-1.5 py-0 border-yellow-200">
                            {t.mockup.sampleData.classes.amateur}
                          </Badge>
                          <Badge className="bg-indigo-50 text-indigo-700 text-[8px] sm:text-[9px] px-1 sm:px-1.5 py-0 border-indigo-200">
                            {t.mockup.sampleData.sports.boxing}
                          </Badge>
                          <Badge className="bg-green-50 text-green-700 text-[8px] sm:text-[9px] px-1 sm:px-1.5 py-0 border-green-200">
                            {t.mockup.common.ready}
                          </Badge>
                          <Badge className="bg-gray-100 text-gray-700 text-[8px] sm:text-[9px] px-1 sm:px-1.5 py-0 border-gray-200">
                            3-1-0
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Event Card */}
                  <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg sm:rounded-xl p-2.5 sm:p-3 text-white shadow-lg">
                    <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                          <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </div>
                        <p className="font-bold text-[11px] sm:text-xs md:text-sm">
                          {t.mockup.matchmaking.eventCreated}
                        </p>
                      </div>
                      <Badge className="bg-white/20 text-white border-0 text-[8px] sm:text-[9px] px-1.5 sm:px-2 py-0.5 backdrop-blur-sm flex-shrink-0">
                        {t.mockup.matchmaking.new}
                      </Badge>
                    </div>
                    <p className="text-[9px] sm:text-[10px] md:text-xs opacity-95 mb-1.5 sm:mb-2">
                      {t.mockup.matchmaking.fightScheduled.replace(
                        "{athlete}",
                        t.mockup.sampleData.athletes.miguelAlves
                      )}
                    </p>
                    <div className="flex items-center gap-1.5 sm:gap-2 text-[8px] sm:text-[9px] opacity-90">
                      <Users className="w-2.5 h-2.5 sm:w-3 sm:h-3 flex-shrink-0" />
                      <span>2 {t.mockup.matchmaking.academiesConnected}</span>
                    </div>
                  </div>
                </motion.div>
              )}
              {screen === "management" && (
                <motion.div
                  key="management"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-2 sm:space-y-3"
                >
                  {/* Stats Card */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-3 rounded-xl shadow-sm border border-blue-100">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center">
                        <Activity className="w-4 h-4 text-white" />
                      </div>
                      <p className="font-semibold text-xs sm:text-sm text-foreground">
                        {t.mockup.management.clubSummary}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[10px] sm:text-xs">
                      <div className="bg-white rounded-lg p-2 text-center">
                        <p className="font-bold text-blue-700 text-sm">24</p>
                        <p className="text-gray-600">
                          {t.mockup.management.athletes}
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-2 text-center">
                        <p className="font-bold text-green-700 text-sm">18</p>
                        <p className="text-gray-600">
                          {t.mockup.management.ready}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Athlete Status Card */}
                  <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-200 hover:border-blue-300 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-xs sm:text-sm text-foreground mb-1">
                          12 {t.mockup.management.athletesReady}
                        </p>
                        <p className="text-[10px] text-muted-foreground">
                          {t.mockup.management.forSaturdayEvent}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Weight Control Card */}
                  <div className="bg-white p-2.5 sm:p-3 rounded-lg sm:rounded-xl shadow-sm border border-gray-200 hover:border-orange-300 transition-colors">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                        <Scale className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-[11px] sm:text-xs md:text-sm text-foreground mb-0.5 sm:mb-1">
                          3 {t.mockup.management.weightCutting}
                        </p>
                        <p className="text-[9px] sm:text-[10px] text-muted-foreground">
                          {t.mockup.management.activeMonitoring}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Event Card */}
                  <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg sm:rounded-xl p-2.5 sm:p-3 text-white shadow-lg">
                    <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                          <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </div>
                        <p className="font-bold text-[11px] sm:text-xs md:text-sm">
                          {t.mockup.management.nextEvent}
                        </p>
                      </div>
                      <Badge className="bg-white/20 text-white border-0 text-[8px] sm:text-[9px] px-1.5 sm:px-2 py-0.5 backdrop-blur-sm flex-shrink-0">
                        {t.mockup.management.comingSoon}
                      </Badge>
                    </div>
                    <p className="text-[9px] sm:text-[10px] md:text-xs opacity-95 mb-1.5 sm:mb-2">
                      {t.mockup.management.regionalChampionship}
                    </p>
                    <div className="flex items-center gap-1.5 sm:gap-2 text-[8px] sm:text-[9px] opacity-90">
                      <Trophy className="w-2.5 h-2.5 sm:w-3 sm:h-3 flex-shrink-0" />
                      <span>
                        {t.mockup.sampleData.dates.june15} •{" "}
                        {t.mockup.sampleData.locations.lisboa}
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}
              {screen === "history" && (
                <motion.div
                  key="history"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-2 sm:space-y-3"
                >
                  {/* Stats Overview Card */}
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-2.5 sm:p-3 rounded-lg sm:rounded-xl shadow-sm border border-purple-100">
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-purple-500 flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                      </div>
                      <p className="font-semibold text-[11px] sm:text-xs md:text-sm text-foreground">
                        {t.mockup.history.generalStats}
                      </p>
                    </div>
                    <div className="grid grid-cols-3 gap-1.5 sm:gap-2 text-[8px] sm:text-[9px]">
                      <div className="bg-white rounded-lg p-1.5 sm:p-2 text-center">
                        <p className="font-bold text-purple-700 text-xs sm:text-sm">
                          12
                        </p>
                        <p className="text-gray-600">
                          {t.mockup.history.victories}
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-1.5 sm:p-2 text-center">
                        <p className="font-bold text-orange-700 text-xs sm:text-sm">
                          3
                        </p>
                        <p className="text-gray-600">
                          {t.mockup.history.defeats}
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-1.5 sm:p-2 text-center">
                        <p className="font-bold text-blue-700 text-xs sm:text-sm">
                          2
                        </p>
                        <p className="text-gray-600">
                          {t.mockup.history.draws}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Recent Fight Card */}
                  <div className="bg-white p-2.5 sm:p-3 rounded-lg sm:rounded-xl shadow-sm border border-gray-200 hover:border-purple-300 transition-colors">
                    <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                          <Trophy className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-600" />
                        </div>
                        <div>
                          <p className="font-bold text-[11px] sm:text-xs md:text-sm text-foreground">
                            {t.mockup.history.victoryByKO}
                          </p>
                          <p className="text-[9px] sm:text-[10px] text-muted-foreground">
                            {t.mockup.history.weeksAgo}
                          </p>
                        </div>
                      </div>
                      <Badge className="bg-green-50 text-green-700 border-green-200 text-[8px] sm:text-[9px] px-1.5 sm:px-2 py-0.5 flex-shrink-0">
                        {t.mockup.history.victory}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-[9px] sm:text-[10px] text-muted-foreground">
                      <span className="font-semibold text-foreground">
                        {t.mockup.sampleData.athletes.joaoSilva}
                      </span>
                      <span className="text-gray-400">
                        {t.mockup.common.vs}
                      </span>
                      <span>{t.mockup.sampleData.athletes.miguelAlves}</span>
                    </div>
                  </div>

                  {/* Fight Card 2 */}
                  <div className="bg-white p-2.5 sm:p-3 rounded-lg sm:rounded-xl shadow-sm border border-gray-200 hover:border-blue-300 transition-colors">
                    <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-bold text-[11px] sm:text-xs md:text-sm text-foreground">
                            {t.mockup.history.victoryByDecision}
                          </p>
                          <p className="text-[9px] sm:text-[10px] text-muted-foreground">
                            {t.mockup.history.monthAgo}
                          </p>
                        </div>
                      </div>
                      <Badge className="bg-green-50 text-green-700 border-green-200 text-[8px] sm:text-[9px] px-1.5 sm:px-2 py-0.5 flex-shrink-0">
                        {t.mockup.history.victory}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-[9px] sm:text-[10px] text-muted-foreground">
                      <span className="font-semibold text-foreground">
                        {t.mockup.sampleData.athletes.joaoSilva}
                      </span>
                      <span className="text-gray-400">
                        {t.mockup.common.vs}
                      </span>
                      <span>{t.mockup.sampleData.athletes.carlosMendes}</span>
                    </div>
                  </div>

                  {/* Event Summary Card */}
                  <div className="bg-gradient-to-br from-purple-600 to-pink-700 rounded-lg sm:rounded-xl p-2.5 sm:p-3 text-white shadow-lg">
                    <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                          <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </div>
                        <p className="font-bold text-[11px] sm:text-xs md:text-sm">
                          {t.mockup.history.lastEvent}
                        </p>
                      </div>
                      <Badge className="bg-white/20 text-white border-0 text-[8px] sm:text-[9px] px-1.5 sm:px-2 py-0.5 backdrop-blur-sm flex-shrink-0">
                        {t.mockup.history.completed}
                      </Badge>
                    </div>
                    <p className="text-[9px] sm:text-[10px] md:text-xs opacity-95 mb-1.5 sm:mb-2">
                      {t.mockup.management.regionalChampionship}
                    </p>
                    <div className="flex items-center gap-1.5 sm:gap-2 text-[8px] sm:text-[9px] opacity-90">
                      <Trophy className="w-2.5 h-2.5 sm:w-3 sm:h-3 flex-shrink-0" />
                      <span>2 {t.mockup.history.victoriesDefeats}</span>
                    </div>
                  </div>
                </motion.div>
              )}
              {screen === "community" && (
                <motion.div
                  key="community"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-2 sm:space-y-3"
                >
                  {/* Community Header Card */}
                  <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-2.5 sm:p-3 rounded-lg sm:rounded-xl shadow-sm border border-pink-100">
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-pink-500 flex items-center justify-center flex-shrink-0">
                        <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                      </div>
                      <p className="font-semibold text-[11px] sm:text-xs md:text-sm text-foreground">
                        {t.mockup.community.activeCommunity}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-[9px] sm:text-[10px] text-muted-foreground">
                      <span className="font-semibold text-foreground">
                        1.2k
                      </span>
                      <span>{t.mockup.community.members} •</span>
                      <span className="font-semibold text-foreground">45</span>
                      <span>{t.mockup.community.postsToday}</span>
                    </div>
                  </div>

                  {/* Post Card 1 */}
                  <div className="bg-white p-2.5 sm:p-3 rounded-lg sm:rounded-xl shadow-sm border border-gray-200 hover:border-pink-300 transition-colors">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-white text-[10px] sm:text-xs font-bold flex-shrink-0 shadow-sm">
                        AC
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5 sm:mb-1">
                          <p className="font-bold text-[11px] sm:text-xs md:text-sm text-foreground">
                            {t.mockup.sampleData.athletes.anaCosta}
                          </p>
                          <Badge className="bg-blue-50 text-blue-700 border-blue-200 text-[8px] sm:text-[9px] px-1 sm:px-1.5 py-0">
                            {t.mockup.sampleData.classes.pro}
                          </Badge>
                          <Badge className="bg-purple-50 text-purple-700 border-purple-200 text-[8px] sm:text-[9px] px-1 sm:px-1.5 py-0">
                            {t.mockup.sampleData.sports.kickboxing}
                          </Badge>
                        </div>
                        <p className="text-[9px] sm:text-[10px] text-muted-foreground mb-1.5 sm:mb-2">
                          {t.mockup.community.excellentTraining}
                        </p>
                        <div className="flex items-center gap-2 text-[8px] sm:text-[9px] text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Heart className="w-3 h-3 text-pink-500 fill-pink-500" />
                            <span>24</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageSquare className="w-3 h-3 text-gray-400" />
                            <span>8</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Post Card 2 */}
                  <div className="bg-white p-2.5 sm:p-3 rounded-lg sm:rounded-xl shadow-sm border border-gray-200 hover:border-blue-300 transition-colors">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-[10px] sm:text-xs font-bold flex-shrink-0 shadow-sm">
                        PM
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5 sm:mb-1">
                          <p className="font-bold text-[11px] sm:text-xs md:text-sm text-foreground">
                            {t.mockup.sampleData.athletes.pedroMartins}
                          </p>
                          <Badge className="bg-orange-50 text-orange-700 border-orange-200 text-[8px] sm:text-[9px] px-1 sm:px-1.5 py-0">
                            {t.mockup.sampleData.classes.neoPro}
                          </Badge>
                          <Badge className="bg-red-50 text-red-700 border-red-200 text-[8px] sm:text-[9px] px-1 sm:px-1.5 py-0">
                            {t.mockup.sampleData.sports.muayThai}
                          </Badge>
                        </div>
                        <p className="text-[9px] sm:text-[10px] text-muted-foreground mb-1.5 sm:mb-2">
                          {t.mockup.community.weightCuttingTips}
                        </p>
                        <div className="flex items-center gap-2 text-[8px] sm:text-[9px] text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Heart className="w-3 h-3 text-pink-500 fill-pink-500" />
                            <span>18</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageSquare className="w-3 h-3 text-gray-400" />
                            <span>12</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Community Event Card */}
                  <div className="bg-gradient-to-br from-pink-600 to-rose-700 rounded-lg sm:rounded-xl p-2.5 sm:p-3 text-white shadow-lg">
                    <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                          <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </div>
                        <p className="font-bold text-[11px] sm:text-xs md:text-sm">
                          {t.mockup.community.communityEvent}
                        </p>
                      </div>
                      <Badge className="bg-white/20 text-white border-0 text-[8px] sm:text-[9px] px-1.5 sm:px-2 py-0.5 backdrop-blur-sm flex-shrink-0">
                        {t.mockup.matchmaking.new}
                      </Badge>
                    </div>
                    <p className="text-[9px] sm:text-[10px] md:text-xs opacity-95 mb-1.5 sm:mb-2">
                      {t.mockup.community.athletesMeeting.replace(
                        "{location}",
                        t.mockup.sampleData.locations.lisboa
                      )}
                    </p>
                    <div className="flex items-center gap-1.5 sm:gap-2 text-[8px] sm:text-[9px] opacity-90">
                      <Users className="w-2.5 h-2.5 sm:w-3 sm:h-3 flex-shrink-0" />
                      <span>45 {t.mockup.community.participantsConfirmed}</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Floating Elements - Client-side only for animation */}
      <HeroMockupFloatingElements />
    </div>
  );
}
