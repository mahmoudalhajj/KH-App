import React from "react";
import { observer } from "mobx-react-lite";
import {
  Platform,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import { i18nStore } from "../stores/i18nStore";
import ScreenContainer from "./common/ScreenContainer";
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
    <ScreenContainer>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: E_LAYOUT.FLEX_1 }}
      >
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
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
});

const styles = StyleSheet.create({
  scrollContent: {
    flex: E_LAYOUT.FLEX_1,
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
