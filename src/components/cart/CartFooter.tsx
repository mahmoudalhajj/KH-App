import React from "react";
import { View, StyleSheet } from "react-native";
import { observer } from "mobx-react-lite";
import { cartStore } from "../../stores/CartStore";
import { useTranslation } from "react-i18next";
import { E_COLORS } from "../../enums/color";
import { TranslationKey } from "../../i18n/translationKeys";
import AppButton from "../common/AppButton";

export const CartFooter = observer(() => {
  const { t } = useTranslation();
  return (
    <View style={styles.footerButtons}>
      <AppButton
        title={t(TranslationKey.CLEAR_CART)}
        onPress={cartStore.clearCart}
        style={styles.clearButton}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  footerButtons: {
    gap: 16,
    paddingBottom: 24,
  },
  clearButton: {
    backgroundColor: E_COLORS.ERROR,
  },
});
