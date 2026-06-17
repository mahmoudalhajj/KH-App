import { createMMKV } from "react-native-mmkv";

export const storage = createMMKV();

export enum StorageKey {
  Cart = "cart",
  Messages = "messages",
  User = "user",
}

class LocalStorageStore {
  storageGet = (key: string) => {
    try {
      const value = storage.getString(key);
      if (!value) return null;
      return JSON.parse(value);
    } catch {
      return null;
    }
  };

  storageSet = (key: string, value: unknown): void => {
    try {
      storage.set(key, JSON.stringify(value));
    } catch (e) {
      console.warn("couldnt set in local storage " + e);
    }
  };

  storageClear = (): void => {
    try {
      storage.clearAll();
    } catch {}
  };
}

export const localStorageStore = new LocalStorageStore();
