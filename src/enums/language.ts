import { Language } from "../i18n/translations";

export const DEFAULT_LANGUAGE: Language = "en";

export enum E_LANGUAGE_LABELS {
  EN = "English",
  AR = "العربية",
  FR = "Français",
}

export enum E_DATE_FORMAT {
  WEEKDAY = "short",
  TIME = "2-digit",
}

export const LANGUAGE_LOCALE: Record<Language, string> = {
  en: "en-US",
  ar: "ar-SA",
  fr: "fr-FR",
};
