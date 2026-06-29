import { E_AUTH_CONSTRAINTS, E_CART_CONSTRAINTS } from "../enums/designTokens";
import { TranslationKey } from "../i18n/translationKeys";
import { User } from "../types/user";
import { message } from "../types/message";
import { CartItem } from "../types/cartItem";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const isValidEmail = (email: string): boolean => {
  if (!email) {
    return false;
  }
  if (email.length > E_AUTH_CONSTRAINTS.MAX_EMAIL_LENGTH) {
    return false;
  }
  return EMAIL_REGEX.test(email);
};

export const isValidPassword = (password: string): boolean => {
  if (!password) return false;
  if (password.length < E_AUTH_CONSTRAINTS.MIN_PASSWORD_LENGTH) {
    return false;
  }
  if (password.length > E_AUTH_CONSTRAINTS.MAX_PASSWORD_LENGTH) {
    return false;
  }
  return true;
};

export const isValidItemName = (name: string): boolean => {
  if (!name) {
    return false;
  }
  return name.length <= E_CART_CONSTRAINTS.MAX_NAME_LENGTH;
};

export const isValidPrice = (price: number): boolean => {
  if (isNaN(price) || price <= 0) {
    return false;
  }
  return price <= E_CART_CONSTRAINTS.MAX_PRICE;
};

export const isValidQuantity = (quantity: number): boolean => {
  if (isNaN(quantity) || quantity <= 0 || !Number.isInteger(quantity)) {
    return false;
  }
  return quantity <= E_CART_CONSTRAINTS.MAX_QUANTITY;
};

export const isValidUser = (data: User | null) => {
  return (
    typeof data === "object" &&
    data !== null &&
    typeof data.id === "number" &&
    typeof data.name === "string" &&
    typeof data.email === "string"
  );
};

export const isValidCartItem = (data: CartItem): boolean => {
  return (
    typeof data === "object" &&
    data !== null &&
    typeof data.id === "number" &&
    typeof data.name === "string" &&
    typeof data.price === "number" &&
    !isNaN(data.price) &&
    data.price > 0 &&
    typeof data.quantity === "number" &&
    Number.isInteger(data.quantity) &&
    data.quantity > 0
  );
};

export const isValidMessage = (data: message) => {
  return (
    typeof data === "object" &&
    data !== null &&
    typeof data.id === "number" &&
    typeof data.text === "string" &&
    typeof data.sender === "string"
  );
};

export const validateEmail = (email: string): TranslationKey | null => {
  if (email.length > E_AUTH_CONSTRAINTS.MAX_EMAIL_LENGTH) {
    return TranslationKey.ERROR_AUTH_EMAIL_TOO_LONG;
  }
  if (!EMAIL_REGEX.test(email)) return TranslationKey.ERROR_AUTH_INVALID_EMAIL;
  return null;
};

export const validatePassword = (password: string): TranslationKey | null => {
  if (password.length > E_AUTH_CONSTRAINTS.MAX_PASSWORD_LENGTH) {
    return TranslationKey.ERROR_AUTH_PASSWORD_TOO_LONG;
  }
  if (password.length < E_AUTH_CONSTRAINTS.MIN_PASSWORD_LENGTH) {
    return TranslationKey.ERROR_AUTH_PASSWORD_TOO_SHORT;
  }
  return null;
};

export const validateUsername = (username: string): TranslationKey | null => {
  if (username.length > E_AUTH_CONSTRAINTS.MAX_NAME_LENGTH) {
    return TranslationKey.ERROR_AUTH_NAME_TOO_LONG;
  }
  return null;
};

export const validatePrice = (price: number): TranslationKey | null => {
  if (isNaN(price) || price <= 0) {
    return TranslationKey.ERROR_CART_INVALID_VALUE;
  }
  if (price > E_CART_CONSTRAINTS.MAX_PRICE) {
    return TranslationKey.ERROR_CART_PRICE_TOO_HIGH;
  }
  return null;
};

export const validateQuantity = (quantity: number): TranslationKey | null => {
  if (isNaN(quantity) || !Number.isInteger(quantity)) {
    return TranslationKey.ERROR_CART_INVALID_VALUE;
  }
  if (quantity < 1) {
    return TranslationKey.ERROR_CART_QUANTITY_MIN;
  }
  if (quantity > E_CART_CONSTRAINTS.MAX_QUANTITY) {
    return TranslationKey.ERROR_CART_QUANTITY_TOO_HIGH;
  }
  return null;
};

export const validateItemName = (name: string): TranslationKey | null => {
  if (name.length > E_CART_CONSTRAINTS.MAX_NAME_LENGTH) {
    return TranslationKey.ERROR_CART_NAME_TOO_LONG;
  }
  return null;
};
