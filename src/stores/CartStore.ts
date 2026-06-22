import { CartItem } from "../types/cartItem";
import { computed, observable, runInAction } from "mobx";
import { localStorageStore } from "./LocalStorageStore";
import { E_STORAGE_KEY } from "../enums/StorageKeys";
import { E_CART_ERROR } from "../enums/cartErrors";
import {
  isValidItemName,
  isValidPrice,
  isValidQuantity,
} from "../helpers/validator";

export class CartStore {
  storageKey: string = E_STORAGE_KEY.CART;
  cart = observable.map<number, CartItem>();
  itemName = observable.box<string>("");
  itemPrice = observable.box<string>("");
  itemQuantity = observable.box<string>("");
  error = observable.box<string>("");

  getTotalPrice = computed(() => {
    const CartValues = this.cart.values();
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

  setError = (value: string) => {
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

  setCartItemQuantity = (item: CartItem, amount: number) => {
    runInAction(() => {
      item.quantity += amount;
    });
  };

  setCartItem = (item: CartItem) => {
    runInAction(() => {
      const existingItem = this.cart.get(item.id);

      if (existingItem) {
        this.setCartItemQuantity(existingItem, item.quantity);
        this.storeCart();
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
        this.setError(E_CART_ERROR.INVALID_PRICE_QUANTITY);
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

  showAllItems = () => {
    return Array.from(this.cart.values());
  };

  addItem = () => {
    const name = this.itemName.get().trim();
    const price = Number(this.itemPrice.get());
    const quantity = Number(this.itemQuantity.get());
    const id = Date.now() * Math.random();

    if (!name || !this.itemPrice.get() || !this.itemQuantity.get()) {
      this.setError(E_CART_ERROR.ALL_VALUES_REQUIRED);
      return;
    }

    if (!isValidItemName(name)) {
      this.setError(E_CART_ERROR.NAME_TOO_LONG);
      return;
    }

    if (!isValidPrice(price)) {
      this.setError(E_CART_ERROR.PRICE_EXCEEDS_MAX);
      return;
    }

    if (!isValidQuantity(quantity)) {
      this.setError(E_CART_ERROR.QUANTITY_EXCEEDS_MAX);
      return;
    }

    runInAction(() => {
      const existingItem = Array.from(this.cart.values()).find(
        (item) => item.name === name,
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        this.cart.set(id, {
          id: id,
          name,
          price,
          quantity,
        });
      }

      this.itemName.set("");
      this.itemPrice.set("");
      this.itemQuantity.set("");
      this.error.set("");

      this.storeCart();
    });
  };

  storeCart = () => {
    localStorageStore.storageSet(this.storageKey, this.cart);
  };

  loadStoredCart = () => {
    const stored = localStorageStore.storageGet(this.storageKey);
    if (!Array.isArray(stored)) {
      return;
    }

    runInAction(() => {
      stored.forEach((entry) => {
        this.cart.set(entry.id, entry);
      });
    });
  };

  setUserId = (userId: number | null) => {
    this.storageKey = `${E_STORAGE_KEY.CART}_${userId}`;
  };
}
