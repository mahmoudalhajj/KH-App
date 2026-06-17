import { computed, observable, runInAction } from "mobx";
import { User } from "../types/user";
import { localStorageStore, StorageKey } from "./LocalStorageStore";
import { E_AUTH_STATUS } from "../enums/authStatus";

export class AuthStore {
  user = observable.box<User | null>(null);
  status = observable.box<E_AUTH_STATUS>(E_AUTH_STATUS.LOGGED_OUT);
  error = observable.box<string>("");
  email = observable.box<string>("");
  password = observable.box<string>("");
  name = observable.box<string>("");
  isRegistering = observable.box<boolean>(false);

  handleAuth = () => {
    if (this.isRegistering.get()) {
      this.register();
    } else {
      this.login();
    }
  };

  login = () => {
    const email = this.email.get();
    const password = this.password.get();

    if (!email || !password) {
      runInAction(() => {
        this.error.set("Invalid Email/Password");
      });
      return;
    }

    runInAction(() => {
      const user: User = {
        id: Date.now(),
        name: this.name.get() || "User",
        email: email,
      };

      this.user.set(user);
      this.status.set(E_AUTH_STATUS.LOGGED_IN);
      this.error.set("");
      this.storeUser();
    });
  };

  register = () => {
    const trimmedName = this.name.get().trim();
    const trimmedEmail = this.email.get().trim();
    const trimmedPassword = this.password.get().trim();

    if (!trimmedName || !trimmedEmail || !trimmedPassword) {
      runInAction(() => {
        this.error.set("All fields are required.");
      });
      return;
    }

    runInAction(() => {
      const user: User = {
        id: Date.now(),
        name: trimmedName,
        email: trimmedEmail,
      };
      this.user.set(user);
      this.status.set(E_AUTH_STATUS.LOGGED_IN);
      this.error.set("");
      this.storeUser();
    });
  };

  logout = () => {
    runInAction(() => {
      this.user.set(null);
      this.status.set(E_AUTH_STATUS.LOGGED_OUT);
      this.error.set("");
      this.email.set("");
      this.password.set("");
      this.name.set("");
    });
    localStorageStore.storageClear();
  };

  getIsLoggedIn = () => {
    return this.status.get() === E_AUTH_STATUS.LOGGED_IN;
  };

  storeUser() {
    localStorageStore.storageSet(StorageKey.User, this.user.get());
  }

  loadStoredUser() {
    if (this.getIsLoggedIn()) return;

    const stored = localStorageStore.storageGet(StorageKey.User);
    if (!stored) return;

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
