import { observable, runInAction } from "mobx";
import { translations, Language } from "../i18n/translations";
import { TranslationKey } from "../i18n/translationKeys";
import { E_TEXT_DIRECTION } from "../enums/direction";
import { DEFAULT_LANGUAGE } from "../enums/language";
import { E_STORAGE_KEY } from "../enums/StorageKeys";
import { localStorageStore } from "./LocalStorageStore";

export class I18nStore {
  storageKey: string = E_STORAGE_KEY.LANGUAGE;
  currentLanguage = observable.box<Language>(DEFAULT_LANGUAGE);

  getLanguage = () => {
    return this.currentLanguage.get();
  };

  getDirection = () => {
    return translations.direction[this.getLanguage()] || E_TEXT_DIRECTION.LTR;
  };

  getIsRTL = (): boolean => {
    return this.getDirection() === E_TEXT_DIRECTION.RTL;
  };

  setLanguage = (lang: Language) => {
    runInAction(() => {
      this.currentLanguage.set(lang);
    });
    localStorageStore.storageSet(E_STORAGE_KEY.LANGUAGE, lang);
  };

  translate = (key: TranslationKey) => {
    const lang = this.getLanguage();
    return translations[key][lang] ?? translations[key].en;
  };
  loadStoredLanguage = () => {
    try {
      const stored = localStorageStore.storageGet(this.storageKey);
      if (!stored) {
        return;
      }
      this.setLanguage(stored as Language);
    } catch {}
  };
}

export const i18nStore = new I18nStore();
