import { NextRequest, NextResponse } from "next/server";

const locales = ["pt-PT", "es-ES"];
const defaultLocale = "pt-PT";

// Função para detectar o locale baseado no header Accept-Language
function getLocale(request: NextRequest): string {
  const pathname = request.nextUrl.pathname;
  
  // Verificar se já há um locale na URL
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return pathname.split("/")[1] as string;
  }

  // Detectar locale do header Accept-Language
  // O header pode ter múltiplos idiomas: "pt-PT,pt;q=0.9,es;q=0.8"
  const acceptLanguage = request.headers.get("accept-language");
  if (acceptLanguage) {
    // Dividir por vírgula e processar cada idioma
    const languages = acceptLanguage.split(",").map((lang) => {
      const [locale, qValue] = lang.trim().split(";");
      const quality = qValue ? parseFloat(qValue.split("=")[1]) : 1.0;
      return { locale: locale.toLowerCase(), quality };
    });

    // Ordenar por qualidade (maior primeiro)
    languages.sort((a, b) => b.quality - a.quality);

    // Verificar cada idioma na ordem de preferência
    for (const lang of languages) {
      // Verificar português de Portugal especificamente
      if (lang.locale === "pt-pt" || lang.locale.startsWith("pt-pt")) {
        return "pt-PT";
      }
      // Verificar português genérico
      if (lang.locale === "pt" || lang.locale.startsWith("pt")) {
        return "pt-PT";
      }
      // Verificar espanhol da Espanha especificamente
      if (lang.locale === "es-es" || lang.locale.startsWith("es-es")) {
        return "es-ES";
      }
      // Verificar espanhol genérico
      if (lang.locale === "es" || lang.locale.startsWith("es")) {
        return "es-ES";
      }
    }
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Ignorar arquivos estáticos, API routes e rotas especiais do Next.js
  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname === "/sitemap.xml" ||
    pathname === "/robots.txt" ||
    pathname.match(/\.(ico|png|svg|jpg|jpeg|gif|webp|xml|txt)$/)
  ) {
    return NextResponse.next();
  }

  // Verificar se o pathname já tem um locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}`) || pathname === `/${locale}`
  );

  // Se não tiver locale, redirecionar para o locale detectado
  if (!pathnameHasLocale) {
    const locale = getLocale(request);
    const newUrl = new URL(`/${locale}${pathname}`, request.url);
    return NextResponse.redirect(newUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Não aplicar middleware a arquivos estáticos, API routes e rotas especiais
    "/((?!api|_next/static|_next/image|favicon.ico|logo.png|sitemap.xml|robots.txt|.*\\.png|.*\\.svg|.*\\.ico|.*\\.jpg|.*\\.jpeg|.*\\.gif|.*\\.webp|.*\\.xml|.*\\.txt).*)",
  ],
};

