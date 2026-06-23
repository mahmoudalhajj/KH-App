import React from "react";
import { StyleSheet } from "react-native";
import { observer } from "mobx-react-lite";
import { getCartStore } from "../../stores/getCartStore";
import { authStore } from "../../stores/AuthStore";
import { i18nStore } from "../../stores/i18nStore";
import { E_COLORS } from "../../enums/color";
import { TranslationKey } from "../../i18n/translationKeys";
import { DynamicView } from "../common/DynamicView";
import { DynamicText } from "../common/DynamicText";
import { themeStore } from "../../stores/ThemeStore";
import { E_FONT_SIZE, E_FONT_WEIGHT, E_SPACING, E_BORDER_RADIUS, E_LAYOUT, E_UI } from "../../enums/designTokens";
import { E_APP } from "../../enums/strings";

export const CartStats = observer(() => {
  const cartStore = getCartStore(authStore.getUserId());

  return (
    <DynamicView row style={styles.statsRow}>
      <DynamicView style={styles.statItem}>
        <DynamicText style={themeStore.getLabelStyle()}>
          {i18nStore.translate(TranslationKey.TOTAL_ITEMS)}
        </DynamicText>
        <DynamicText style={styles.statValue}>
          {cartStore.getTotalItems.get()}
        </DynamicText>
      </DynamicView>
      <DynamicView style={styles.statItem}>
        <DynamicText style={themeStore.getLabelStyle()}>
          {i18nStore.translate(TranslationKey.TOTAL_PRICE)}
        </DynamicText>
        <DynamicText style={styles.statValue}>
          {E_APP.CURRENCY_SYMBOL}{cartStore.getTotalPrice.get()}
        </DynamicText>
      </DynamicView>
    </DynamicView>
  );
});

const styles = StyleSheet.create({
  statsRow: {
    justifyContent: E_LAYOUT.SPACE_AROUND,
    marginBottom: E_SPACING.XXXXL,
    backgroundColor: E_COLORS.SURFACE,
    padding: E_SPACING.XL,
    borderRadius: E_BORDER_RADIUS.XL,
  },
  statItem: {
    alignItems: E_LAYOUT.CENTER,
    paddingVertical: E_UI.COMPACT_PADDING,
  },
  statValue: {
    fontSize: E_FONT_SIZE.XL,
    fontWeight: E_FONT_WEIGHT.EXTRA_BOLD,
    color: E_COLORS.BUTTON,
  },
});
