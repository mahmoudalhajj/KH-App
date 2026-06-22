import { observable, runInAction } from "mobx";
import { Keyboard } from "react-native";
import { message } from "../types/message";
import { E_MESSAGE_SENDER } from "../enums/MessageSender";
import { localStorageStore } from "./LocalStorageStore";
import { E_STORAGE_KEY } from "../enums/StorageKeys";
import { E_DATE_FORMAT, LANGUAGE_LOCALE } from "../enums/language";
import { i18nStore } from "./i18nStore";

export class MessageStore {
  storageKey: string = E_STORAGE_KEY.MESSAGES;
  messages = observable.map<number, message>();
  draft = observable.box<string>("");

  sendMessages = () => {
    const trimmedText = this.draft.get().trim();
    if (!trimmedText) return;

    runInAction(() => {
      const message: message = {
        id: Date.now() * Math.random(),
        text: trimmedText,
        sender: E_MESSAGE_SENDER.CLIENT,
        createdAt: new Date(),
      };

      this.messages.set(message.id, message);
      this.storeMessages();
      this.draft.set("");
    });

    Keyboard.dismiss();
  };

  getAllMessages = () => {
    return Array.from(this.messages.values());
  };

  formatCreatedAt = (createdAt: Date | string) => {
    const date = new Date(createdAt);
    const locale = LANGUAGE_LOCALE[i18nStore.getLanguage()];
    return date.toLocaleString(locale, {
      weekday: E_DATE_FORMAT.WEEKDAY as "short",
      hour: E_DATE_FORMAT.TIME,
      minute: E_DATE_FORMAT.TIME,
    });
  };

  setDraft = (draft: string) => {
    runInAction(() => {
      this.draft.set(draft);
    });
  };

  getDraft = () => {
    return this.draft.get();
  };

  clearMessages = () => {
    if (this.messages.size === 0) return;

    runInAction(() => {
      this.messages.clear();
      this.storeMessages();
    });
  };

  storeMessages() {
    localStorageStore.storageSet(E_STORAGE_KEY.MESSAGES, this.getAllMessages());
  }

  loadStoredMessages() {
    const stored = localStorageStore.storageGet(E_STORAGE_KEY.MESSAGES);
    if (!stored) return;
    runInAction(() => {
      stored.forEach((message: message) => {
        this.messages.set(message.id, message);
      });
    });
  }

  setUserId(userId: number | null) {
    this.storageKey = `${E_STORAGE_KEY.MESSAGES}_${userId}`;
  }
}
export const messageStore = new MessageStore();
