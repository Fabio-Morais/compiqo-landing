import { notFound } from "next/navigation";
import ptPT from "../../messages/pt-PT.json";
import esES from "../../messages/es-ES.json";

export const locales = ["pt-PT", "es-ES"] as const;
export type Locale = (typeof locales)[number];

const messages = {
  "pt-PT": ptPT,
  "es-ES": esES,
};

export type Translations = typeof ptPT;

export function getTranslations(locale: Locale) {
  if (!locales.includes(locale)) {
    notFound();
  }
  return messages[locale];
}

export function getLocaleFromPath(pathname: string): Locale | null {
  const segments = pathname.split("/");
  const locale = segments[1] as Locale;
  if (locales.includes(locale)) {
    return locale;
  }
  return null;
}

