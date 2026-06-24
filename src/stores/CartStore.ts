import { CartItem } from "../types/cartItem";
import { computed, observable, runInAction } from "mobx";
import { localStorageStore } from "./LocalStorageStore";
import { E_STORAGE_KEY } from "../enums/StorageKeys";
import { E_CART_CONSTRAINTS } from "../enums/designTokens";
import { TranslationKey } from "../i18n/translationKeys";
import {
  isValidItemName,
  isValidPrice,
  isValidQuantity,
  isValidCartItem,
  validateItemName,
  validatePrice,
  validateQuantity,
} from "../helpers/validator";

let nextCartId = 1;

export class CartStore {
  storageKey: string = E_STORAGE_KEY.CART;
  cart = observable.map<number, CartItem>();
  itemName = observable.box<string>("");
  itemPrice = observable.box<string>("");
  itemQuantity = observable.box<string>("");
  error = observable.box<TranslationKey | "">("");

  getTotalPrice = computed(() => {
    const CartValues = Array.from(this.cart.values());
    const reducedValues = CartValues.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
    return reducedValues;
  });

  getTotalItems = computed(() => {
    const CartValues = Array.from(this.cart.values());
    const reducedValues = CartValues.reduce(
      (total, item) => total + item.quantity,
      0,
    );
    return reducedValues;
  });

  setError = (value: TranslationKey | "") => {
    runInAction(() => {
      this.error.set(value);
    });
  };

  setItemPrice = (price: string) => {
    runInAction(() => {
      this.itemPrice.set(price);
    });
  };

  setItemName = (name: string) => {
    runInAction(() => {
      this.itemName.set(name);
    });
  };

  setItemQuantity = (quantity: string) => {
    runInAction(() => {
      this.itemQuantity.set(quantity);
    });
  };

  setCartItemQuantity = (itemId: number, amount: number): boolean => {
    const item = this.cart.get(itemId);
    if (!item) return false;

    const newQuantity = item.quantity + amount;
    if (newQuantity < 1 || newQuantity > E_CART_CONSTRAINTS.MAX_QUANTITY) {
      return false;
    }

    item.quantity = newQuantity;
    return true;
  };

  setCartItem = (item: CartItem) => {
    runInAction(() => {
      const existingItem = this.cart.get(item.id);

      if (existingItem) {
        if (this.setCartItemQuantity(existingItem.id, item.quantity)) {
          this.storeCart();
        } else {
          this.setError(TranslationKey.ERROR_CART_QUANTITY_TOO_HIGH);
        }
        return;
      }

      if (
        isValidItemName(item.name) &&
        isValidPrice(item.price) &&
        isValidQuantity(item.quantity)
      ) {
        this.cart.set(item.id, item);
        this.storeCart();
      } else {
        this.setError(TranslationKey.ERROR_CART_INVALID_PRICE_QUANTITY);
      }
    });
  };

  removeItem = (itemId: number) => {
    runInAction(() => {
      this.cart.delete(itemId);
      this.storeCart();
    });
  };

  clearCart = () => {
    if (this.cart.size === 0) {
      return;
    }

    runInAction(() => {
      this.cart.clear();
      this.storeCart();
    });
  };

  addItem = () => {
    const name = this.itemName.get().trim();
    const price = Number(this.itemPrice.get());
    const quantity = Number(this.itemQuantity.get());

    if (!name || !this.itemPrice.get() || !this.itemQuantity.get()) {
      this.setError(TranslationKey.ERROR_CART_ALL_VALUES_REQUIRED);
      return;
    }

    const nameError = validateItemName(name);
    if (nameError) {
      this.setError(nameError);
      return;
    }

    const priceError = validatePrice(price);
    if (priceError) {
      this.setError(priceError);
      return;
    }

    const quantityError = validateQuantity(quantity);
    if (quantityError) {
      this.setError(quantityError);
      return;
    }

    runInAction(() => {
      const existingItem = Array.from(this.cart.values()).find(
        (item) => item.name === name,
      );

      if (existingItem) {
        if (!this.setCartItemQuantity(existingItem.id, quantity)) {
          this.setError(TranslationKey.ERROR_CART_QUANTITY_TOO_HIGH);
          return;
        }
      } else {
        const id = nextCartId++;
        this.cart.set(id, { id, name, price, quantity });
      }

      this.itemName.set("");
      this.itemPrice.set("");
      this.itemQuantity.set("");
      this.setError("");
      this.storeCart();
    });
  };

  storeCart = () => {
    localStorageStore.storageSet(
      this.storageKey,
      Array.from(this.cart.values()),
    );
  };

  loadStoredCart = () => {
    const stored = localStorageStore.storageGet(this.storageKey);
    if (!Array.isArray(stored)) {
      return;
    }

    runInAction(() => {
      stored.filter(isValidCartItem).forEach((entry) => {
        this.cart.set(entry.id, entry);
        if (entry.id >= nextCartId) {
          nextCartId = entry.id + 1;
        }
      });
    });
  };

  setUserId = (userId: number | null) => {
    this.storageKey = userId
      ? `${E_STORAGE_KEY.CART}_${userId}`
      : E_STORAGE_KEY.CART;
  };
}
