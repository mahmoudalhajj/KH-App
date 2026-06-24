import React from "react";
import { observer } from "mobx-react-lite";
import { ScrollView, StyleSheet, Platform } from "react-native";
import { KeyboardAvoidingView } from "react-native-keyboard-controller";
import { SafeAreaView } from "react-native-safe-area-context";
import { i18nStore } from "../stores/i18nStore";
import { TranslationKey } from "../i18n/translationKeys";
import { DynamicText } from "./common/DynamicText";
import { CartStats } from "./cart/CartStats";
import { CartForm } from "./cart/CartForm";
import { CartActions } from "./cart/CartActions";
import { E_COLORS } from "../enums/color";
import {
  E_FONT_SIZE,
  E_FONT_WEIGHT,
  E_SPACING,
  E_LAYOUT,
  E_KEYBOARD,
} from "../enums/designTokens";
import { E_PLATFORMS } from "../enums/platforms";

const CartSummary = observer(() => {
  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <KeyboardAvoidingView
        behavior={
          Platform.OS === E_PLATFORMS.IOS
            ? E_KEYBOARD.BEHAVIOR_IOS
            : E_KEYBOARD.BEHAVIOR_ANDROID
        }
        keyboardVerticalOffset={E_KEYBOARD.VERTICAL_OFFSET}
        style={styles.keyboardView}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps={E_KEYBOARD.PERSIST_TAPS}
        >
          <DynamicText style={styles.header}>
            {i18nStore.translate(TranslationKey.CART_SUMMARY)}
          </DynamicText>

          <CartStats />
          <CartForm />
        </ScrollView>

        <CartActions />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: E_LAYOUT.FLEX_1,
    backgroundColor: E_COLORS.BACKGROUND,
  },
  keyboardView: {
    flex: E_LAYOUT.FLEX_1,
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
