import React from "react";
import { StyleSheet, View } from "react-native";
import { observer } from "mobx-react-lite";
import { getCartStore } from "../../stores/getCartStore";
import { authStore } from "../../stores/AuthStore";
import { i18nStore } from "../../stores/i18nStore";
import { TranslationKey } from "../../i18n/translationKeys";
import AppButton from "../common/AppButton";
import { E_COLORS } from "../../enums/color";
import {
  E_BORDER_WIDTH,
  E_LAYOUT,
  E_SPACING,
} from "../../enums/designTokens";

export const CartActions = observer(() => {
  const cartStore = getCartStore(authStore.getUserId());
  const isCartEmpty = cartStore.cart.size === 0;

  return (
    <View style={styles.container}>
      <AppButton
        title={i18nStore.translate(TranslationKey.ADD_TO_CART)}
        onPress={cartStore.addItem}
        style={styles.addButton}
      />
      <AppButton
        title={i18nStore.translate(TranslationKey.CLEAR_CART)}
        onPress={cartStore.clearCart}
        style={styles.clearButton}
        disabled={isCartEmpty}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: E_SPACING.M,
    paddingHorizontal: E_SPACING.XXL,
    paddingVertical: E_SPACING.L,
    backgroundColor: E_COLORS.BACKGROUND,
    borderTopWidth: E_BORDER_WIDTH.DEFAULT,
    borderTopColor: E_COLORS.BORDER,
  },
  addButton: {
    flex: E_LAYOUT.FLEX_1,
  },
  clearButton: {
    flex: E_LAYOUT.FLEX_1,
    backgroundColor: E_COLORS.ERROR,
  },
});
