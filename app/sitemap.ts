import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://compiqo.com";
  const locales = ["pt-PT", "es-ES"];
  const pages = ["", "termos", "privacidade", "lgpd"];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Criar entradas para cada página em cada idioma
  for (const page of pages) {
    for (const locale of locales) {
      const url = `${baseUrl}/${locale}${page ? `/${page}` : ""}`;
      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: page === "" ? "weekly" : "monthly",
        priority: page === "" ? 1.0 : page === "termos" || page === "privacidade" ? 0.3 : 0.5,
        alternates: {
          languages: {
            "pt-PT": `${baseUrl}/pt-PT${page ? `/${page}` : ""}`,
            "es-ES": `${baseUrl}/es-ES${page ? `/${page}` : ""}`,
            "x-default": `${baseUrl}/pt-PT${page ? `/${page}` : ""}`,
          },
        },
      });
    }
  }

  // Ordenar: página principal primeiro, depois por idioma
  return sitemapEntries.sort((a, b) => {
    if (a.priority !== b.priority) {
      return (b.priority || 0) - (a.priority || 0);
    }
    return a.url.localeCompare(b.url);
  });
}

