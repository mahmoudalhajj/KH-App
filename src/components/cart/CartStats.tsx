import React from "react";
import { StyleSheet } from "react-native";
import { observer } from "mobx-react-lite";
import { cartStore } from "../../stores/CartStore";
import { useTranslation } from "react-i18next";
import { E_COLORS } from "../../enums/color";
import { TranslationKey } from "../../i18n/translationKeys";
import { DynamicView } from "../common/DynamicView";
import { DynamicText } from "../common/DynamicText";
import { uiStore } from "../../stores/ThemeStore";

export const CartStats = observer(() => {
  const { t } = useTranslation();

  return (
    <DynamicView row style={styles.statsRow}>
      <DynamicView style={styles.statItem}>
        <DynamicText style={uiStore.getLabelStyle()}>
          {t(TranslationKey.TOTAL_ITEMS)}
        </DynamicText>
        <DynamicText style={styles.statValue}>
          {cartStore.getTotalItems()}
        </DynamicText>
      </DynamicView>
      <DynamicView style={styles.statItem}>
        <DynamicText style={uiStore.getLabelStyle()}>
          {t(TranslationKey.TOTAL_PRICE)}
        </DynamicText>
        <DynamicText style={styles.statValue}>
          ${cartStore.getTotalPrice()}
        </DynamicText>
      </DynamicView>
    </DynamicView>
  );
});

const styles = StyleSheet.create({
  statsRow: {
    justifyContent: "space-around",
    marginBottom: 40,
    backgroundColor: E_COLORS.SURFACE,
    padding: 20,
    borderRadius: 20,
  },
  statItem: {
    alignItems: "center",
    paddingVertical: 10,
  },
  statValue: {
    fontSize: 24,
    fontWeight: "800",
    color: E_COLORS.BUTTON,
  },
});
