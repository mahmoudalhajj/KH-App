import { computed, observable, runInAction } from "mobx";
import { User } from "../types/user";
import { localStorageStore } from "./LocalStorageStore";
import { E_AUTH_STATUS } from "../enums/authStatus";
import { E_STORAGE_KEY } from "../enums/StorageKeys";
import { E_APP } from "../enums/strings";
import { TranslationKey } from "../i18n/translationKeys";
import {
  isValidEmail,
  isValidPassword,
  isValidUser,
  validateEmail,
  validatePassword,
  validateUsername,
} from "../helpers/validator";
import { getCartStore } from "./getCartStore";

let nextUserId = 1;

export class AuthStore {
  user = observable.box<User | null>(null);
  status = observable.box<E_AUTH_STATUS>(E_AUTH_STATUS.LOGGED_OUT);
  error = observable.box<TranslationKey | "">("");
  email = observable.box<string>("");
  password = observable.box<string>("");
  name = observable.box<string>("");
  isRegistering = observable.box<boolean>(false);
  isLoading = observable.box<boolean>(false);

  handleAuth = () => {
    if (this.isLoading.get()) return;
    runInAction(() => this.isLoading.set(true));

    if (this.isRegistering.get()) {
      this.register();
    } else {
      this.login();
    }

    runInAction(() => this.isLoading.set(false));
  };

  login = () => {
    const email = this.email.get().trim();
    const password = this.password.get().trim();

    if (!email || !password) {
      runInAction(() => {
        this.error.set(TranslationKey.ERROR_INVALID_CREDENTIALS);
      });
      return;
    }

    if (!isValidEmail(email) || !isValidPassword(password)) {
      runInAction(() => {
        this.error.set(TranslationKey.ERROR_INVALID_CREDENTIALS);
      });
      return;
    }

    runInAction(() => {
      const user: User = {
        id: nextUserId++,
        name: this.name.get() || E_APP.DEFAULT_USER_NAME,
        email: email,
      };

      this.user.set(user);
      this.status.set(E_AUTH_STATUS.LOGGED_IN);
      this.error.set("");
      this.email.set("");
      this.password.set("");
      this.name.set("");
      this.storeUser();
    });
  };

  register = () => {
    const trimmedName = this.name.get().trim();
    const trimmedEmail = this.email.get().trim();
    const trimmedPassword = this.password.get().trim();

    if (!trimmedName || !trimmedEmail || !trimmedPassword) {
      runInAction(() => {
        this.error.set(TranslationKey.ERROR_ALL_FIELDS_REQUIRED);
      });
      return;
    }

    const nameError = validateUsername(trimmedName);
    if (nameError) { runInAction(() => this.error.set(nameError)); return; }

    const emailError = validateEmail(trimmedEmail);
    if (emailError) { runInAction(() => this.error.set(emailError)); return; }

    const passwordError = validatePassword(trimmedPassword);
    if (passwordError) { runInAction(() => this.error.set(passwordError)); return; }

    runInAction(() => {
      const user: User = {
        id: nextUserId++,
        name: trimmedName,
        email: trimmedEmail,
      };
      this.user.set(user);
      this.status.set(E_AUTH_STATUS.LOGGED_IN);
      this.error.set("");
      this.email.set("");
      this.password.set("");
      this.name.set("");
      this.storeUser();
    });
  };

  logout = () => {
    const userId = this.user.get()?.id ?? null;
    runInAction(() => {
      this.user.set(null);
      this.status.set(E_AUTH_STATUS.LOGGED_OUT);
      this.error.set("");
      this.email.set("");
      this.password.set("");
      this.name.set("");
    });
    localStorageStore.storageClearForUser(userId);
    getCartStore.cache.clear?.();
  };

  getIsLoggedIn = () => {
    return this.status.get() === E_AUTH_STATUS.LOGGED_IN;
  };

  getUserId = () => {
    return this.user.get()?.id ?? null;
  };

  storeUser = () => {
    const user = this.user.get();
    if (user && isValidUser(user)) {
      localStorageStore.storageSet(E_STORAGE_KEY.USER, user);
    }
  };

  loadStoredUser() {
    if (this.getIsLoggedIn()) return;

    const stored = localStorageStore.storageGet(E_STORAGE_KEY.USER);
    if (!stored) return;

    if (!isValidUser(stored)) {
      return;
    }

    runInAction(() => {
      this.user.set(stored);
      this.status.set(E_AUTH_STATUS.LOGGED_IN);
    });
  }

  setEmail = (email: string) => {
    runInAction(() => {
      this.email.set(email);
    });
  };

  setPassword = (password: string) => {
    runInAction(() => {
      this.password.set(password);
    });
  };

  setName = (name: string) => {
    runInAction(() => {
      this.name.set(name);
    });
  };

  setIsRegistering = (value: boolean) => {
    runInAction(() => {
      this.isRegistering.set(value);
      this.error.set("");
    });
  };
}

export const authStore = new AuthStore();
