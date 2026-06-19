import { E_AUTH_CONSTRAINTS, E_CART_CONSTRAINTS } from "../enums/designTokens";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX =
  /^(\+?[1-9]\d{0,2}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;

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

export const isValidUsername = (username: string): boolean => {
  if (!username) {
    return false;
  }
  return username.length <= E_AUTH_CONSTRAINTS.MAX_NAME_LENGTH;
};

export const isValidPhone = (phone: string): boolean => {
  if (!phone) {
    return false;
  }
  return PHONE_REGEX.test(phone);
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
