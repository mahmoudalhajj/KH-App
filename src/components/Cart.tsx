import React from "react";
import { observer } from "mobx-react-lite";
import { ScrollView, StyleSheet } from "react-native";
import { i18nStore } from "../stores/i18nStore";
import ScreenContainer from "./common/ScreenContainer";
import { TranslationKey } from "../i18n/translationKeys";
import { DynamicText } from "./common/DynamicText";
import { CartStats } from "./cart/CartStats";
import { CartForm } from "./cart/CartForm";
import { CartFooter } from "./cart/CartFooter";
import { E_COLORS } from "../enums/color";

const CartSummary = observer(() => {
  return (
    <ScreenContainer>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <DynamicText style={styles.header}>
          {i18nStore.translate(TranslationKey.CART_SUMMARY)}
        </DynamicText>

        <CartStats />
        <CartForm />
        <CartFooter />
      </ScrollView>
    </ScreenContainer>
  );
});

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    color: E_COLORS.TEXT_PRIMARY,
  },
});

export default CartSummary;
