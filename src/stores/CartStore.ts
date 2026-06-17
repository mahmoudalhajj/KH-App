import { CartItem } from "../types/cartItem";
import { observable, runInAction } from "mobx";
import { localStorageStore } from "./LocalStorageStore";
import { E_STORAGE_KEY } from "../enums/StorageKeys";
export class CartStore {
  cart = observable.map<number, CartItem>();
  itemName = observable.box<string>("");
  itemPrice = observable.box<string>("");
  itemQuantity = observable.box<string>("");
  error = observable.box<string>("");

  setError = (value: string) => {
    runInAction(() => {
      this.error.set(value);
    });
  };

  getTotalPrice = () => {
    const CartValues = Array.from(this.cart.values());
    const reducedValues = CartValues.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
    return reducedValues;
  };

  getTotalItems = () => {
    const CartValues = Array.from(this.cart.values());
    const reducedValues = CartValues.reduce(
      (total, item) => total + item.quantity,
      0,
    );
    return reducedValues;
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
    item.quantity += amount;
  };

  storeCart() {
    localStorageStore.storageSet(
      E_STORAGE_KEY.CART,
      Array.from(this.cart.values()),
    );
  }

  setCartItem(item: CartItem) {
    runInAction(() => {
      const existingItem = this.cart.get(item.id);

      if (existingItem) {
        this.setCartItemQuantity(existingItem, item.quantity);
        this.storeCart();
        return;
      }

      if (item.quantity > 0 && item.price > 0) {
        this.cart.set(item.id, item);
        this.storeCart();
      } else {
        this.setError("Price and quantity must be greater than zero.");
      }
    });
  }

  removeItem(itemId: number) {
    runInAction(() => {
      this.cart.delete(itemId);
      this.storeCart();
    });
  }

  clearCart = () => {
    if (this.cart.size === 0) {
      return;
    }

    runInAction(() => {
      this.cart.clear();
      this.storeCart();
    });
  };

  showAllItems() {
    return Array.from(this.cart.values());
  }

  loadStoredCart() {
    const stored = localStorageStore.storageGet(E_STORAGE_KEY.CART);
    if (!Array.isArray(stored)) {
      return;
    }

    runInAction(() => {
      stored.forEach((entry) => {
        this.cart.set(entry.id, entry);
      });
    });
  }

  addItem = () => {
    const name = this.itemName.get().trim();
    const price = Number(this.itemPrice.get());
    const quantity = Number(this.itemQuantity.get());

    if (!name || !price || !quantity) {
      this.setError("All values required.");
      return;
    }

    if (price <= 0 || quantity <= 0) {
      this.setError("Price and quantity must be greater than zero.");
      return;
    }

    runInAction(() => {
      const existingItem = Array.from(this.cart.values()).find(
        (item) => item.name === name,
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        this.cart.set(Date.now(), {
          id: Date.now(),
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
}

export const cartStore = new CartStore();
