"use client";

import dynamic from "next/dynamic";
import { Translations } from "../lib/i18n";

const HeroMockupStatic = dynamic(
  () => import("./hero-mockup-static").then((mod) => mod.HeroMockupStatic),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
      </div>
    ),
  }
);

export function HeroMockupLazy({ t }: { t: Translations }) {
  return <HeroMockupStatic t={t} />;
}
