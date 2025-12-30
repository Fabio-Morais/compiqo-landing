import { Locale } from "../lib/i18n";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://compiqo.com";

  const localeMap: Record<Locale, string> = {
    "pt-PT": "pt_PT",
    "es-ES": "es_ES",
  };

  const isES = locale === "es-ES";
  
  const title = isES
    ? "Compiqo - Plataforma Completa para Gestión de Clubes de Deportes de Combate"
    : "Compiqo - Plataforma Completa para Gestão de Clubes de Desportos de Combate";
  
  const description = isES
    ? "Gestiona tu club de deportes de combate con Compiqo. Control de peso, preparación para competiciones, historial de combates y mucho más. La plataforma esencial para conectar clubes, atletas y organizadores de eventos en España."
    : "Gere o seu clube de desportos de combate com o Compiqo. Controlo de peso, prontidão para competições, histórico de lutas e muito mais. A plataforma essencial para conectar clubes, atletas e organizadores de eventos em Portugal.";

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
      canonical: `/${locale}`,
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
      icon: "/logo.png",
      apple: "/logo.png",
      shortcut: "/logo.png",
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
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const localeMap: Record<Locale, string> = {
    "pt-PT": "pt-PT",
    "es-ES": "es-ES",
  };

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://compiqo.com";
  const otherLocale = locale === "pt-PT" ? "es-ES" : "pt-PT";

  return (
    <html lang={localeMap[locale]}>
      <head>
        <link
          rel="alternate"
          hrefLang={locale.toLowerCase()}
          href={`${baseUrl}/${locale}`}
        />
        <link
          rel="alternate"
          hrefLang={otherLocale.toLowerCase()}
          href={`${baseUrl}/${otherLocale}`}
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href={`${baseUrl}/pt-PT`}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
