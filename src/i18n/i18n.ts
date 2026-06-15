import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { translations } from "./translations";

const resources = {
    en: { translation: {} as Record<string, string> },
    fr: { translation: {} as Record<string, string> },
    ar: { translation: {} as Record<string, string> },
};

for (const [key, value] of Object.entries(translations)) {
    resources.en.translation[key] = value.en;
    resources.fr.translation[key] = value.fr;
    resources.ar.translation[key] = value.ar;
}

i18n.use(initReactI18next).init({
        compatibilityJSON: "v4",
        resources,

        lng: "en",

        fallbackLng: "en",

        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;

export const toggleLanguage = (): void => {
    const nextLang = i18n.language === "en" ? "fr" : "en";

    i18n.changeLanguage(nextLang);
};