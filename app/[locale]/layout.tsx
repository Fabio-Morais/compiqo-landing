import { Locale } from "../lib/i18n";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale: Locale = localeParam === "es-ES" ? "es-ES" : "pt-PT";
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://compiqo.com";

  const localeMap: Record<Locale, string> = {
    "pt-PT": "pt_PT",
    "es-ES": "es_ES",
  };

  const isES = locale === "es-ES";

  const title = isES
    ? "Compiqo - Gestión de Atletas y Matchmaking"
    : "Compiqo - Gestão de Atletas e Matchmaking";

  const description = isES
    ? "Plataforma para gestión de atletas, buscar adversarios y conectar la comunidad de deportes de combate. Control de peso, histórico y matchmaking."
    : "Plataforma para gestão de atletas, procurar adversários e conectar a comunidade de desportos de combate. Controlo de peso, histórico e matchmaking.";

  const keywords = isES
    ? [
        "deportes de combate",
        "gestión de club",
        "boxeo",
        "kickboxing",
        "muay thai",
        "control de peso",
        "gestión de atletas",
        "plataforma deportiva",
        "eventos de combate",
        "atletas de combate",
        "entrenadores",
        "gimnasios",
        "España",
        "software de gestión",
        "matchmaking",
        "historial de combates",
        "preparación para competiciones",
        "gestión deportiva",
        "clubes de boxeo",
        "clubes de kickboxing",
        "clubes de muay thai",
        "corte de peso",
        "pesaje deportivo",
        "competiciones de combate",
        "organización de eventos",
        "sistema de gestión deportiva",
        "plataforma B2B deportes",
        "software para gimnasios",
        "gestión de competidores",
        "registro de combates",
      ]
    : [
        "desportos de combate",
        "gestão de clube",
        "boxing",
        "kickboxing",
        "muay thai",
        "controlo de peso",
        "gestão de atletas",
        "plataforma desportiva",
        "eventos de combate",
        "atletas de combate",
        "treinadores",
        "ginásios",
        "Portugal",
        "software de gestão",
        "matchmaking",
        "histórico de lutas",
        "prontidão para competir",
        "gestão desportiva",
        "clubes de boxe",
        "clubes de kickboxing",
        "clubes de muay thai",
        "corte de peso",
        "pesagem desportiva",
        "competições de combate",
        "organização de eventos",
        "sistema de gestão desportiva",
        "plataforma B2B desportos",
        "software para ginásios",
        "gestão de competidores",
        "registo de lutas",
      ];

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: title,
      template: "%s | Compiqo",
    },
    description,
    keywords,
    authors: [{ name: "Compiqo", url: baseUrl }],
    creator: "Compiqo",
    publisher: "Compiqo",
    category: "Software",
    classification: "Business Application",
    formatDetection: {
      email: false,
      telephone: false,
      address: false,
    },
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        "pt-PT": `${baseUrl}/pt-PT`,
        "es-ES": `${baseUrl}/es-ES`,
        "x-default": `${baseUrl}/pt-PT`,
      },
    },
    openGraph: {
      type: "website",
      locale: localeMap[locale],
      url: `/${locale}`,
      siteName: "Compiqo",
      title,
      description,
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: isES
            ? "Compiqo - Plataforma de Gestión para Clubes de Deportes de Combate"
            : "Compiqo - Plataforma de Gestão para Clubes de Desportos de Combate",
          type: "image/png",
        },
      ],
      alternateLocale: locale === "es-ES" ? "pt_PT" : "es_ES",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}/og-image.png`],
      creator: "@compiqo",
      site: "@compiqo",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/logo.png", sizes: "48x48", type: "image/png" },
        { url: "/logo.png", sizes: "192x192", type: "image/png" },
        { url: "/logo.png", sizes: "512x512", type: "image/png" },
      ],
      apple: "/logo.png",
      shortcut: "/favicon.ico",
    },
    verification: {
      // Adicione quando tiver Google Search Console
      // google: "your-google-verification-code",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const validLocale: Locale = locale === "es-ES" ? "es-ES" : "pt-PT";
  const localeMap: Record<Locale, string> = {
    "pt-PT": "pt-PT",
    "es-ES": "es-ES",
  };

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://compiqo.com";
  const otherLocale = validLocale === "pt-PT" ? "es-ES" : "pt-PT";

  return (
    <html lang={localeMap[validLocale]}>
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://grainy-gradients.vercel.app" />

        {/* DNS prefetch */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://grainy-gradients.vercel.app" />

        {/* Resource hints */}
        <link rel="preload" as="image" href="/logo.png" />

        <link
          rel="alternate"
          hrefLang={validLocale.toLowerCase()}
          href={`${baseUrl}/${validLocale}`}
        />
        <link
          rel="alternate"
          hrefLang={otherLocale.toLowerCase()}
          href={`${baseUrl}/${otherLocale}`}
        />
        <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/pt-PT`} />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
