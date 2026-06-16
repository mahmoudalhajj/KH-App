import React from "react";
import { observer } from "mobx-react-lite";
import type { CartStore } from "../stores/CartStore";
import { ScrollView, StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";
import { Colors } from "../enums/color";
import ScreenContainer from "./common/ScreenContainer";
import { TranslationKey } from "../i18n/translationKeys";
import { DynamicText } from "./common/DynamicText";
import { uiStore } from "../stores/UIStore";
import { CartStats } from "./cart/CartStats";
import { CartForm } from "./cart/CartForm";
import { CartFooter } from "./cart/CartFooter";

interface CartProps {
  cartStore: CartStore;
}

const CartSummary = observer(({ cartStore }: CartProps) => {
  const { t } = useTranslation();

  return (
    <ScreenContainer>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <DynamicText style={uiStore.headerStyle}>
          {t(TranslationKey.CART_SUMMARY)}
        </DynamicText>

        <CartStats cartStore={cartStore} />
        <CartForm cartStore={cartStore} />
        <CartFooter cartStore={cartStore} />
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
});

export default CartSummary;
