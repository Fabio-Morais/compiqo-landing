import { Button } from "./components/ui/button";
import generatedAppBg from "./assets/generated-app-bg.png";
import logo from "./assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { LoginDialog } from "./components/login-dialog";
import { HeroContentStatic } from "./components/hero-content-static";
import { HeroMockupStatic } from "./components/hero-mockup-static";
import {
  SportsSectionHeaderStatic,
  SportCardStatic,
} from "./components/sections-static";
import {
  FeaturesSectionHeaderStatic,
  FeatureCardStatic,
} from "./components/sections-static";
import {
  ClubCardStatic,
  AthleteCardStatic,
} from "./components/club-athlete-cards-static";
import {
  HowItWorksHeaderStatic,
  StepItemStatic,
} from "./components/sections-static";
import { CTASectionStatic } from "./components/sections-static";
import {
  AnimatedWrapper,
  AnimatedHeroWrapper,
  AnimatedMockupWrapper,
} from "./components/animated-wrapper";
import { InterestForm } from "./components/interest-form";
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./components/ui/card";

export default function LandingPage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://compiqo.com";

  // Structured Data Schemas
  const softwareApplicationSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Compiqo",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Plataforma completa para gestão de clubes de desportos de combate. Controlo de peso, prontidão para competições, histórico de lutas e muito mais.",
    url: baseUrl,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
      availability: "https://schema.org/PreOrder",
    },
    featureList: [
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
    },
    inLanguage: "pt-PT",
    audience: {
      "@type": "Audience",
      audienceType: "Clubes de Desportos de Combate",
    },
  };

  const organizationSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Compiqo",
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description:
      "Plataforma completa para gestão de clubes de desportos de combate em Portugal.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "PT",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "geral@compiqo.pt",
      contactType: "Customer Service",
      areaServed: "PT",
      availableLanguage: "pt-PT",
    },
    sameAs: [],
  };

  const breadcrumbSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Início",
        item: baseUrl,
      },
    ],
  };

  const faqSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
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
    ],
  };

  return (
    <>
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
                alt="Compiqo - Plataforma de gestão para clubes de desportos de combate"
                width={48}
                height={48}
                className="object-contain"
                priority
              />
              <span className="font-heading font-bold text-2xl tracking-tight">
                Compiqo
              </span>
            </div>
            <div className="flex items-center gap-4">
              <nav className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground mr-4">
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
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16">
              <AnimatedHeroWrapper className="w-full lg:order-1">
                <HeroContentStatic />
              </AnimatedHeroWrapper>
              <AnimatedMockupWrapper className="relative h-[280px] sm:h-[350px] md:h-[400px] lg:h-[700px] w-full flex items-center justify-center perspective-[2000px] lg:order-2 mt-18 sm:mt-16 lg:mt-0">
                <HeroMockupStatic />
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
            <AnimatedWrapper>
              <SportsSectionHeaderStatic />
            </AnimatedWrapper>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { name: "Boxing", emoji: "🥊", classes: ["Amateur", "Pro"] },
                {
                  name: "Kickboxing",
                  emoji: "💥",
                  classes: ["Amateur", "Neo-Pro", "Pro"],
                },
                {
                  name: "Muay Thai",
                  emoji: "🦵",
                  classes: ["Amateur", "Neo-Pro", "Pro"],
                },
              ].map((sport, i) => (
                <AnimatedWrapper key={sport.name} delay={i * 0.1}>
                  <SportCardStatic sport={sport} />
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-32 bg-secondary/20">
          <div className="max-w-7xl mx-auto px-6">
            <AnimatedWrapper>
              <FeaturesSectionHeaderStatic />
            </AnimatedWrapper>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "Users",
                  title: "Gestão de Atletas",
                  desc: "Registe atletas, gere perfis por modalidade, acompanhe o estado de prontidão e histórico completo de cada lutador.",
                },
                {
                  icon: "Scale",
                  title: "Controlo de Peso",
                  desc: "Monitorize peso normal e peso de competição. Alertas inteligentes para corte de peso saudável antes dos eventos.",
                },
                {
                  icon: "Calendar",
                  title: "Eventos e Inscrições",
                  desc: "Crie eventos, registe atletas por modalidade, valide categorias automaticamente e exporte listas de inscrição.",
                },
                {
                  icon: "Trophy",
                  title: "Histórico de Lutas",
                  desc: "Registo completo de vitórias, derrotas e empates. O clube aprova cada resultado antes de ir para o perfil do atleta.",
                },
                {
                  icon: "Target",
                  title: "Matchmaking",
                  desc: "Procure adversários por peso, categoria e experiência. Alertas de incompatibilidade evitam erros no card.",
                },
                {
                  icon: "Zap",
                  title: "Tempo Real",
                  desc: "Atletas actualizam disponibilidade e peso. Treinadores veem tudo instantaneamente no painel do clube.",
                },
              ].map((feature, i) => (
                <AnimatedWrapper key={i} delay={i * 0.1}>
                  <FeatureCardStatic feature={feature} />
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* Club vs Athlete Section */}
        <section id="club" className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              <AnimatedWrapper
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <ClubCardStatic />
              </AnimatedWrapper>
              <div id="athlete">
                <AnimatedWrapper
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <AthleteCardStatic />
                </AnimatedWrapper>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="py-28">
          <div className="max-w-4xl mx-auto px-6">
            <AnimatedWrapper>
              <HowItWorksHeaderStatic />
            </AnimatedWrapper>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[11px] md:left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-orange-500 via-orange-300 to-transparent" />

              <div className="space-y-10">
                {[
                  {
                    step: "01",
                    title: "Crie o Seu Clube",
                    desc: "Registe a sua academia em poucos cliques e personalize o seu espaço",
                  },
                  {
                    step: "02",
                    title: "Convide Atletas",
                    desc: "Envie convites por e-mail. Atletas recebem um link para aceder",
                  },
                  {
                    step: "03",
                    title: "Perfis Completos",
                    desc: "Atletas adicionam foto, peso, modalidades e histórico de lutas",
                  },
                  {
                    step: "04",
                    title: "Gere Eventos",
                    desc: "Inscreva atletas em competições e acompanhe resultados",
                  },
                ].map((item, i) => (
                  <AnimatedWrapper key={i} delay={i * 0.1}>
                    <StepItemStatic item={item} index={i} />
                  </AnimatedWrapper>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-orange-500 to-red-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
          <AnimatedWrapper>
            <CTASectionStatic />
          </AnimatedWrapper>
          <div className="flex justify-center mt-10">
            <Button
              size="lg"
              disabled
              className="h-14 px-10 text-lg rounded-full bg-white text-orange-600 opacity-60 cursor-not-allowed shadow-xl"
            >
              Brevemente <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </section>

        {/* Interest Form Section */}
        <section id="interest" className="py-24 bg-background">
          <div className="max-w-2xl mx-auto px-6">
            <AnimatedWrapper>
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                  Está Interessado?
                </h2>
                <p className="text-lg text-muted-foreground">
                  Deixe-nos o seu contacto e entraremos em contacto quando a
                  plataforma estiver disponível.
                </p>
              </div>
            </AnimatedWrapper>
            <AnimatedWrapper delay={0.2}>
              <Card className="border-border/50 shadow-lg">
                <CardHeader>
                  <CardTitle>Formulário de Interesse</CardTitle>
                  <CardDescription>
                    Preencha o formulário abaixo e entraremos em contacto
                    brevemente.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <InterestForm />
                </CardContent>
              </Card>
            </AnimatedWrapper>
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
                    alt="Compiqo"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                  <span className="font-heading font-bold text-xl">
                    Compiqo
                  </span>
                </div>
                <p className="text-muted-foreground max-w-md">
                  A plataforma completa para gestão de clubes de desportos de
                  combate. A conectar atletas, treinadores e organizadores.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-4">Plataforma</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <a
                      href="#features"
                      className="hover:text-foreground transition-colors"
                    >
                      Funcionalidades
                    </a>
                  </li>
                  <li>
                    <a
                      href="#club"
                      className="hover:text-foreground transition-colors"
                    >
                      Para Clubes
                    </a>
                  </li>
                  <li>
                    <a
                      href="#athlete"
                      className="hover:text-foreground transition-colors"
                    >
                      Para Atletas
                    </a>
                  </li>
                  <li>
                    <a
                      href="#sports"
                      className="hover:text-foreground transition-colors"
                    >
                      Modalidades
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Legal</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <Link
                      href="/termos"
                      className="hover:text-foreground transition-colors"
                    >
                      Termos de Uso
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacidade"
                      className="hover:text-foreground transition-colors"
                    >
                      Privacidade
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/lgpd"
                      className="hover:text-foreground transition-colors"
                    >
                      LGPD
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#interest"
                      className="hover:text-foreground transition-colors"
                    >
                      Estou Interessado
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">
                © 2025 Compiqo. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
