import { createMMKV } from "react-native-mmkv";
import { E_LOG_ERROR } from "../enums/strings";

const storage = createMMKV();

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
      console.warn(E_LOG_ERROR.STORAGE_SET + " " + e);
    }
  };

  storageClear = (): void => {
    try {
      storage.clearAll();
    } catch {}
  };

  storageClearForUser = (userId: number | null): void => {
    try {
      const Id = `_${userId}`;
      const keysToDelete = storage.getAllKeys().filter((key) => {
        return key.endsWith(Id);
      });
      keysToDelete.forEach((key) => storage.remove(key));
    } catch {}
  };
}

export const localStorageStore = new LocalStorageStore();
