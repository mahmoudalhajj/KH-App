import { observable, runInAction } from "mobx";
import { translations, Language } from "../i18n/translations";
import { TranslationKey } from "../i18n/translationKeys";

export class I18nStore {
  currentLanguage = observable.box<Language>("en");

  getLanguage = () => {
    return this.currentLanguage.get();
  };

  getDirection = () => {
    return translations.direction[this.getLanguage()] || "ltr";
  };

  getIsRTL = (): boolean => {
    return this.getDirection() === "rtl";
  };

  setLanguage = (lang: Language) => {
    runInAction(() => {
      this.currentLanguage.set(lang);
    });
  };

  translate = (key: TranslationKey) => {
    const lang = this.getLanguage();
    return translations[key][lang];
  };
}

export const i18nStore = new I18nStore();
