import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://compiqo.com"
  ),
  title: {
    default:
      "Compiqo - Plataforma Completa para Gestão de Clubes de Desportos de Combate",
    template: "%s | Compiqo",
  },
  description:
    "Gira o seu clube de desportos de combate com o Compiqo. Controlo de peso, prontidão para competições, histórico de lutas e muito mais. A conectar clubes, atletas e organizadores de eventos em Portugal.",
  keywords: [
    "desportos de combate",
    "gestão de clube",
    "boxing",
    "kickboxing",
    "muay thai",
    "controlo de peso",
    "gestão de atletas",
    "clube de luta",
    "gestão de competições",
    "matchmaking",
    "histórico de lutas",
    "prontidão para competir",
    "corte de peso",
    "Portugal",
    "desportos de combate Portugal",
  ],
  authors: [{ name: "Compiqo", url: "https://compiqo.com" }],
  creator: "Compiqo",
  publisher: "Compiqo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "/",
    siteName: "Compiqo",
    title:
      "Compiqo - Plataforma Completa para Gestão de Clubes de Desportos de Combate",
    description:
      "Gira o seu clube de desportos de combate com o Compiqo. Controlo de peso, prontidão para competições, histórico de lutas e muito mais. A conectar clubes, atletas e organizadores de eventos.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Compiqo - Plataforma de Gestão para Clubes de Desportos de Combate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Compiqo - Plataforma Completa para Gestão de Clubes de Desportos de Combate",
    description:
      "Gira o seu clube de desportos de combate com o Compiqo. Controlo de peso, prontidão para competições, histórico de lutas e muito mais.",
    images: ["/og-image.png"],
    creator: "@compiqo",
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
  alternates: {
    canonical: "/",
  },
  category: "Software",
  classification: "Business Application",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
    shortcut: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
