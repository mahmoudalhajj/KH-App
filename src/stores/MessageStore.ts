import { observable, runInAction, computed } from "mobx";
import { Keyboard } from "react-native";
import { message } from "../types/message";
import { E_MESSAGE_SENDER } from "../enums/MessageSender";
import { localStorageStore } from "./LocalStorageStore";
import { E_STORAGE_KEY } from "../enums/StorageKeys";
import { E_DATE_FORMAT, LANGUAGE_LOCALE } from "../enums/language";
import { i18nStore } from "./i18nStore";
import { isValidMessage } from "../helpers/validator";

let nextMessageId = 1;

export class MessageStore {
  storageKey: string = E_STORAGE_KEY.MESSAGES;
  messages = observable.map<number, message>();
  draft = observable.box<string>("");

  sendMessages = () => {
    const trimmedText = this.draft.get().trim();
    if (!trimmedText) return;

    runInAction(() => {
      const message: message = {
        id: nextMessageId++,
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
    localStorageStore.storageSet(this.storageKey, this.getAllMessages());
  }

  loadStoredMessages = () => {
    const stored = localStorageStore.storageGet(this.storageKey);
    if (!Array.isArray(stored)) return;

    runInAction(() => {
      stored.filter(isValidMessage).forEach((validatedMessage) => {
        this.messages.set(validatedMessage.id, validatedMessage);
        if (validatedMessage.id >= nextMessageId) {
          nextMessageId = validatedMessage.id + 1;
        }
      });
    });
  };

  setUserId = (userId: number | null) => {
    this.storageKey = userId
      ? `${E_STORAGE_KEY.MESSAGES}_${userId}`
      : E_STORAGE_KEY.MESSAGES;
  };
}
export const messageStore = new MessageStore();
