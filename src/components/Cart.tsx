import React from "react";
import { observer } from "mobx-react-lite";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { i18nStore } from "../stores/i18nStore";
import { TranslationKey } from "../i18n/translationKeys";
import { DynamicText } from "./common/DynamicText";
import { CartStats } from "./cart/CartStats";
import { CartForm } from "./cart/CartForm";
import { CartFooter } from "./cart/CartFooter";
import { E_COLORS } from "../enums/color";
import {
  E_FONT_SIZE,
  E_FONT_WEIGHT,
  E_SPACING,
  E_LAYOUT,
} from "../enums/designTokens";

const CartSummary = observer(() => {
  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        automaticallyAdjustKeyboardInsets={true}
      >
        <DynamicText style={styles.header}>
          {i18nStore.translate(TranslationKey.CART_SUMMARY)}
        </DynamicText>

        <CartStats />
        <CartForm />
        <CartFooter />
      </ScrollView>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: E_LAYOUT.FLEX_1,
    backgroundColor: E_COLORS.BACKGROUND,
  },
  scrollContent: {
    flexGrow: E_LAYOUT.FLEX_1,
    paddingHorizontal: E_SPACING.XXL,
    paddingVertical: E_SPACING.XXXL,
  },
  header: {
    fontSize: E_FONT_SIZE.XL,
    fontWeight: E_FONT_WEIGHT.BOLD,
    color: E_COLORS.TEXT_PRIMARY,
  },
});

export default CartSummary;
