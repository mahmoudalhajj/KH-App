import { observable, runInAction } from "mobx";
import i18n from "../i18n/i18n";
import { translations,Language } from "../i18n/translations";

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
      i18n.changeLanguage(lang);
    });
  };
}

export const i18nStore = new I18nStore();
