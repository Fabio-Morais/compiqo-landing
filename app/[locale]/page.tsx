import { Button } from "../components/ui/button";
import generatedAppBg from "../assets/generated-app-bg.png";
import logo from "../assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { LoginDialog } from "../components/login-dialog";
import { HeroContentStatic } from "../components/hero-content-static";
import { HeroMockupLazy } from "../components/hero-mockup-lazy";
import {
  SportsSectionHeaderStatic,
  SportCardStatic,
} from "../components/sections-static";
import {
  FeaturesSectionHeaderStatic,
  FeatureCardStatic,
} from "../components/sections-static";
import {
  ClubCardStatic,
  AthleteCardStatic,
} from "../components/club-athlete-cards-static";
import {
  HowItWorksHeaderStatic,
  StepItemStatic,
} from "../components/sections-static";
import { CTASectionStatic } from "../components/sections-static";
import {
  AnimatedHeroWrapper,
  AnimatedMockupWrapper,
} from "../components/animated-wrapper";
import { AnimatedWrapperLazy } from "../components/animated-wrapper-lazy";
import { InterestForm } from "../components/interest-form";
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../components/ui/card";
import { Locale, getTranslations, Translations } from "../lib/i18n";

export default async function LandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale: Locale = localeParam === "es-ES" ? "es-ES" : "pt-PT";
  const t = getTranslations(locale) as Translations;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://compiqo.com";

  // Structured Data Schemas - Localizados por idioma
  const isES = locale === "es-ES";

  const softwareApplicationSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Compiqo",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: isES
      ? "Plataforma completa para gestión de clubes de deportes de combate. Control de peso, preparación para competiciones, historial de combates y mucho más."
      : "Plataforma completa para gestão de clubes de desportos de combate. Controlo de peso, prontidão para competições, histórico de lutas e muito mais.",
    url: `${baseUrl}/${locale}`,
    applicationSubCategory: isES ? "Gestión Deportiva" : "Gestão Desportiva",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
      availability: "https://schema.org/PreOrder",
      priceValidUntil: "2026-12-31",
    },
    featureList: isES
      ? [
          "Gestión de Atletas",
          "Control de Peso",
          "Eventos e Inscripciones",
          "Historial de Combates",
          "Matchmaking",
          "Tiempo Real",
        ]
      : [
          "Gestão de Atletas",
          "Controlo de Peso",
          "Eventos e Inscrições",
          "Histórico de Lutas",
          "Matchmaking",
          "Tempo Real",
        ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      ratingCount: "1",
      bestRating: "5",
      worstRating: "1",
    },
    inLanguage: locale,
    audience: {
      "@type": "Audience",
      audienceType: isES
        ? "Clubes de Deportes de Combate"
        : "Clubes de Desportos de Combate",
      geographicArea: {
        "@type": "Country",
        name: isES ? "España" : "Portugal",
      },
    },
    screenshot: `${baseUrl}/og-image.png`,
    softwareVersion: "1.0.0",
    releaseNotes: isES
      ? "Plataforma en desarrollo"
      : "Plataforma em desenvolvimento",
  };

  const organizationSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Compiqo",
    url: baseUrl,
    logo: {
      "@type": "ImageObject",
      url: `${baseUrl}/logo.png`,
      width: 512,
      height: 512,
    },
    description: isES
      ? "Plataforma completa para gestión de clubes de deportes de combate en España y Portugal."
      : "Plataforma completa para gestão de clubes de desportos de combate em Portugal e Espanha.",
    address: {
      "@type": "PostalAddress",
      addressCountry: isES ? "ES" : "PT",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: "geral@compiqo.pt",
        contactType: "Customer Service",
        areaServed: ["PT", "ES"],
        availableLanguage: ["pt-PT", "es-ES"],
      },
    ],
    sameAs: [],
    foundingDate: "2025",
    legalName: "Compiqo",
  };

  const websiteSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Compiqo",
    url: baseUrl,
    description: isES
      ? "Plataforma completa para gestión de clubes de deportes de combate"
      : "Plataforma completa para gestão de clubes de desportos de combate",
    inLanguage: [locale, locale === "pt-PT" ? "es-ES" : "pt-PT"],
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/${locale}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumbSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: isES ? "Inicio" : "Início",
        item: `${baseUrl}/${locale}`,
      },
    ],
  };

  const faqSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: isES
      ? [
          {
            "@type": "Question",
            name: "¿Qué es Compiqo?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Compiqo es una plataforma B2B completa para gestión de clubes de deportes de combate. Permite control de peso, gestión de atletas, eventos, historial de combates y matchmaking.",
            },
          },
          {
            "@type": "Question",
            name: "¿Qué modalidades son soportadas?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Compiqo soporta Boxeo, Kickboxing y Muay Thai, con categorías Amateur, Neo-Profesional y Profesional.",
            },
          },
          {
            "@type": "Question",
            name: "¿Compiqo es gratis para atletas?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sí, Compiqo es completamente gratuito para atletas. Los atletas reciben una invitación de su club y pueden usar todas las funcionalidades sin costos.",
            },
          },
          {
            "@type": "Question",
            name: "¿Cómo puedo empezar a usar Compiqo?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Compiqo estará disponible próximamente. Puedes dejar tu contacto a través del formulario de interés y nos pondremos en contacto cuando la plataforma esté disponible.",
            },
          },
          {
            "@type": "Question",
            name: "¿Qué países están soportados?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Compiqo está disponible para clubes y atletas en España y Portugal.",
            },
          },
        ]
      : [
          {
            "@type": "Question",
            name: "O que é o Compiqo?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "O Compiqo é uma plataforma B2B completa para gestão de clubes de desportos de combate. Permite controlo de peso, gestão de atletas, eventos, histórico de lutas e matchmaking.",
            },
          },
          {
            "@type": "Question",
            name: "Quais modalidades são suportadas?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "O Compiqo suporta Boxing, Kickboxing e Muay Thai, com categorias Amador, Neo-Profissional e Profissional.",
            },
          },
          {
            "@type": "Question",
            name: "O Compiqo é gratuito para atletas?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sim, o Compiqo é completamente gratuito para atletas. Os atletas recebem um convite do seu clube e podem usar todas as funcionalidades sem custos.",
            },
          },
          {
            "@type": "Question",
            name: "Como posso começar a usar o Compiqo?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "O Compiqo estará disponível brevemente. Pode deixar o seu contacto através do formulário de interesse e entraremos em contacto quando a plataforma estiver disponível.",
            },
          },
          {
            "@type": "Question",
            name: "Que países são suportados?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "O Compiqo está disponível para clubes e atletas em Portugal e Espanha.",
            },
          },
        ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <main className="min-h-screen flex flex-col bg-background text-foreground font-sans overflow-x-hidden">
        {/* Navigation */}
        <nav className="fixed w-full z-50 bg-background/60 backdrop-blur-xl border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src={logo}
                alt={
                  isES
                    ? "Compiqo - Plataforma de gestión para clubes de deportes de combate"
                    : "Compiqo - Plataforma de gestão para clubes de desportos de combate"
                }
                width={48}
                height={48}
                className="object-contain"
                priority
                quality={90}
                sizes="48px"
              />
              <span className="font-heading font-bold text-2xl tracking-tight">
                Compiqo
              </span>
            </div>
            <div className="flex items-center gap-4">
              <nav className="hidden md:flex gap-6 text-sm font-medium text-foreground/80 mr-4">
                <a
                  href="#features"
                  className="hover:text-foreground transition-colors"
                >
                  Funcionalidades
                </a>
                <a
                  href="#club"
                  className="hover:text-foreground transition-colors"
                >
                  Para Clubes
                </a>
                <a
                  href="#athlete"
                  className="hover:text-foreground transition-colors"
                >
                  Para Atletas
                </a>
                <a
                  href="#sports"
                  className="hover:text-foreground transition-colors"
                >
                  Modalidades
                </a>
                <a
                  href="#interest"
                  className="hover:text-foreground transition-colors"
                >
                  Estou Interessado
                </a>
              </nav>

              <LoginDialog />

              <Button
                size="lg"
                disabled
                className="rounded-full px-8 shadow-lg shadow-primary/25 opacity-60 cursor-not-allowed"
              >
                Brevemente
              </Button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-52 lg:pb-40">
          <div className="absolute inset-0 z-0">
            <Image
              src={generatedAppBg}
              alt=""
              fill
              className="object-cover opacity-[0.03]"
              priority
              aria-hidden="true"
              sizes="100vw"
              quality={75}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16">
              <AnimatedHeroWrapper className="w-full lg:order-1">
                <HeroContentStatic t={t} />
              </AnimatedHeroWrapper>
              <AnimatedMockupWrapper className="relative h-[500px] sm:h-[450px] md:h-[500px] lg:h-[700px] w-full flex items-center justify-center perspective-[2000px] lg:order-2 mt-18 sm:mt-16 lg:mt-0">
                <HeroMockupLazy t={t} />
              </AnimatedMockupWrapper>
            </div>
          </div>
        </section>

        {/* Sports Section */}
        <section
          id="sports"
          className="py-20 bg-gradient-to-b from-background to-secondary/20"
        >
          <div className="max-w-7xl mx-auto px-6">
            <SportsSectionHeaderStatic t={t} />

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  name: t.mockup.sampleData.sports.boxing.replace("🥊 ", ""),
                  emoji: "🥊",
                  classes: [
                    t.mockup.sampleData.classes.amateur,
                    t.mockup.sampleData.classes.pro,
                  ],
                },
                {
                  name: t.mockup.sampleData.sports.kickboxing.replace(
                    "💥 ",
                    ""
                  ),
                  emoji: "💥",
                  classes: [
                    t.mockup.sampleData.classes.amateur,
                    t.mockup.sampleData.classes.neoPro,
                    t.mockup.sampleData.classes.pro,
                  ],
                },
                {
                  name: t.mockup.sampleData.sports.muayThai.replace("🦵 ", ""),
                  emoji: "🦵",
                  classes: [
                    t.mockup.sampleData.classes.amateur,
                    t.mockup.sampleData.classes.neoPro,
                    t.mockup.sampleData.classes.pro,
                  ],
                },
              ].map((sport, i) => (
                <AnimatedWrapperLazy key={sport.name} delay={i * 0.1}>
                  <SportCardStatic sport={sport} />
                </AnimatedWrapperLazy>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-32 bg-secondary/20">
          <div className="max-w-7xl mx-auto px-6">
            <FeaturesSectionHeaderStatic t={t} />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "Users",
                  title: t.features.athleteManagement.title,
                  desc: t.features.athleteManagement.desc,
                },
                {
                  icon: "Scale",
                  title: t.features.weightControl.title,
                  desc: t.features.weightControl.desc,
                },
                {
                  icon: "Calendar",
                  title: t.features.events.title,
                  desc: t.features.events.desc,
                },
                {
                  icon: "Trophy",
                  title: t.features.history.title,
                  desc: t.features.history.desc,
                },
                {
                  icon: "Target",
                  title: t.features.matchmaking.title,
                  desc: t.features.matchmaking.desc,
                },
                {
                  icon: "Zap",
                  title: t.features.realtime.title,
                  desc: t.features.realtime.desc,
                },
              ].map((feature, i) => (
                <AnimatedWrapperLazy key={i} delay={i * 0.1}>
                  <FeatureCardStatic feature={feature} />
                </AnimatedWrapperLazy>
              ))}
            </div>
          </div>
        </section>

        {/* Club vs Athlete Section */}
        <section id="club" className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              <AnimatedWrapperLazy
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <ClubCardStatic t={t} />
              </AnimatedWrapperLazy>
              <div id="athlete">
                <AnimatedWrapperLazy
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <AthleteCardStatic t={t} />
                </AnimatedWrapperLazy>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="py-28">
          <div className="max-w-4xl mx-auto px-6">
            <HowItWorksHeaderStatic t={t} />

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[11px] md:left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-orange-500 via-orange-300 to-transparent" />

              <div className="space-y-10">
                {[
                  {
                    step: "01",
                    title: t.howItWorks.steps.step1.title,
                    desc: t.howItWorks.steps.step1.desc,
                  },
                  {
                    step: "02",
                    title: t.howItWorks.steps.step2.title,
                    desc: t.howItWorks.steps.step2.desc,
                  },
                  {
                    step: "03",
                    title: t.howItWorks.steps.step3.title,
                    desc: t.howItWorks.steps.step3.desc,
                  },
                  {
                    step: "04",
                    title: t.howItWorks.steps.step4.title,
                    desc: t.howItWorks.steps.step4.desc,
                  },
                ].map((item, i) => (
                  <AnimatedWrapperLazy key={i} delay={i * 0.1}>
                    <StepItemStatic item={item} index={i} />
                  </AnimatedWrapperLazy>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-orange-500 to-red-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
          <CTASectionStatic t={t} />
          <div className="flex justify-center mt-10">
            <Button
              size="lg"
              disabled
              className="h-14 px-10 text-lg rounded-full bg-white text-orange-600 opacity-60 cursor-not-allowed shadow-xl"
            >
              {t.cta.button} <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </section>

        {/* Interest Form Section */}
        <section id="interest" className="py-24 bg-background">
          <div className="max-w-2xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                {t.interest.title}
              </h2>
              <p className="text-lg text-foreground/75">
                {t.interest.subtitle}
              </p>
            </div>
            <AnimatedWrapperLazy delay={0.2}>
              <Card className="border-border/50 shadow-lg">
                <CardHeader>
                  <CardTitle>{t.interest.form.title}</CardTitle>
                  <CardDescription>
                    {t.interest.form.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <InterestForm t={t} />
                </CardContent>
              </Card>
            </AnimatedWrapperLazy>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border py-16 bg-muted/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={logo}
                    alt={isES ? "Compiqo - Logo" : "Compiqo - Logo"}
                    width={40}
                    height={40}
                    className="object-contain"
                    loading="lazy"
                    quality={85}
                    sizes="40px"
                  />
                  <span className="font-heading font-bold text-xl">
                    Compiqo
                  </span>
                </div>
                <p className="text-foreground/70 max-w-md">
                  {t.footer.description}
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-4 text-base">
                  {t.footer.platform}
                </h3>
                <ul className="space-y-2 text-foreground/70">
                  <li>
                    <a
                      href="#features"
                      className="hover:text-foreground transition-colors"
                    >
                      {t.footer.features}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#club"
                      className="hover:text-foreground transition-colors"
                    >
                      {t.footer.forClubs}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#athlete"
                      className="hover:text-foreground transition-colors"
                    >
                      {t.footer.forAthletes}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#sports"
                      className="hover:text-foreground transition-colors"
                    >
                      {t.footer.modalities}
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4 text-base">{t.footer.legal}</h3>
                <ul className="space-y-2 text-foreground/70">
                  <li>
                    <Link
                      href="/termos"
                      className="hover:text-foreground transition-colors"
                    >
                      {t.footer.termsOfUse}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacidade"
                      className="hover:text-foreground transition-colors"
                    >
                      {t.footer.privacy}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/lgpd"
                      className="hover:text-foreground transition-colors"
                    >
                      {t.footer.lgpd}
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#interest"
                      className="hover:text-foreground transition-colors"
                    >
                      {t.footer.imInterested}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-foreground/70">{t.footer.copyright}</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
