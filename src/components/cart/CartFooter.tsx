import React from "react";
import { StyleSheet } from "react-native";
import { observer } from "mobx-react-lite";
import { getCartStore } from "../../stores/getCartStore";
import { authStore } from "../../stores/AuthStore";
import { i18nStore } from "../../stores/i18nStore";
import { E_COLORS } from "../../enums/color";
import { TranslationKey } from "../../i18n/translationKeys";
import AppButton from "../common/AppButton";
import { E_SPACING } from "../../enums/designTokens";

export const CartFooter = observer(() => {
  const cartStore = getCartStore(authStore.getUserId());
  const isCartEmpty = cartStore.cart.size === 0;

  return (
    <AppButton
      title={i18nStore.translate(TranslationKey.CLEAR_CART)}
      onPress={cartStore.clearCart}
      style={styles.clearButton}
      disabled={isCartEmpty}
    />
  );
});

const styles = StyleSheet.create({
  clearButton: {
    backgroundColor: E_COLORS.ERROR,
    marginBottom: E_SPACING.XL,
  },
});
