import { makeAutoObservable, runInAction } from "mobx";
import { User } from "../types/user";
import { AuthStatus } from "../enums/authStatus";
import { localStorageStore, StorageKey } from "./LocalStorageStore";

export class AuthStore {
  user: User | null = null;
  status: AuthStatus = AuthStatus.LoggedOut;
  error: string = "";
  email: string = "";
  password: string = "";
  name: string = "";
  isRegistering: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  handleAuth = () => {
    if (this.isRegistering) {
      this.register();
    } else {
      this.login();
    }
  };

  login = () => {
    if (!this.email || !this.password) {
      this.error = "Invalid Email/Password";
      return;
    }

    runInAction(() => {
      const user: User = {
        id: Date.now(),
        name: this.name || "User",
        email: this.email,
      };

      this.user = user;
      this.status = AuthStatus.LoggedIn;
      this.error = "";
      this.storeUser();
    });
  };

  register = () => {
    const trimmedName = this.name.trim();
    const trimmedEmail = this.email.trim();
    const trimmedPassword = this.password.trim();

    if (!trimmedName || !trimmedEmail || !trimmedPassword) {
      this.error = "All fields are required.";
      return;
    }

    runInAction(() => {
      const user: User = {
        id: Date.now(),
        name: trimmedName,
        email: trimmedEmail,
      };
      this.user = user;
      this.status = AuthStatus.LoggedIn;
      this.error = "";
      this.storeUser();
    });
  };

  logout = () => {
    runInAction(() => {
      this.user = null;
      this.status = AuthStatus.LoggedOut;
      this.error = "";
      this.email = "";
      this.password = "";
      this.name = "";
    });
    localStorageStore.storageClear();
  };

  get isLoggedIn() {
    return this.status === AuthStatus.LoggedIn;
  }

  storeUser() {
    localStorageStore.storageSet(StorageKey.User, this.user);
  }

  loadStoredUser() {
    if (this.isLoggedIn) return;

    const stored = localStorageStore.storageGet(StorageKey.User);
    if (!stored) return;

    runInAction(() => {
      this.user = stored;
      this.status = AuthStatus.LoggedIn;
    });
  }

  setEmail = (email: string) => {
    this.email = email;
  };

  setPassword = (password: string) => {
    this.password = password;
  };

  setName = (name: string) => {
    this.name = name;
  };

  setIsRegistering = (value: boolean) => {
    this.isRegistering = value;
    this.error = "";
  };
}

export const authStore = new AuthStore();
