import React from "react";
import { observer } from "mobx-react-lite";
import type { CartStore } from "../stores/CartStore";
import { View, StyleSheet, ScrollView } from "react-native";
import AppTextInput from "../components/common/AppTextInput";
import AppButton from "../components/common/AppButton";
import { useTranslation } from "react-i18next";
import { Colors } from "../enums/color";
import ScreenContainer from "./common/ScreenContainer";
import { TranslationKey } from "../i18n/translationKeys";
import LanguageSelector from "./common/LanguageSelector";
import { DynamicView } from "./common/DynamicView";
import { DynamicText } from "./common/DynamicText";

interface CartProps {
  cartStore: CartStore;
}

const CartStats = observer(({ cartStore }: CartProps) => {
  const { t } = useTranslation();
  return (
    <DynamicView row style={styles.statsRow}>
      <DynamicView style={styles.statItem}>
        <DynamicText style={styles.statLabel}>
          {t(TranslationKey.TOTAL_ITEMS)}
        </DynamicText>
        <DynamicText style={styles.statValue}>
          {cartStore.getTotalItems()}
        </DynamicText>
      </DynamicView>
      <DynamicView style={styles.statItem}>
        <DynamicText style={styles.statLabel}>
          {t(TranslationKey.TOTAL_PRICE)}
        </DynamicText>
        <DynamicText style={styles.statValue}>
          ${cartStore.getTotalPrice()}
        </DynamicText>
      </DynamicView>
    </DynamicView>
  );
});

const CartForm = observer(({ cartStore }: CartProps) => {
  const { t } = useTranslation();
  return (
    <View style={styles.form}>
      <DynamicView row>
        <DynamicText style={styles.sectionLabel}>
          {t(TranslationKey.ADD_NEW_ITEM)}
        </DynamicText>
      </DynamicView>
      <AppTextInput
        value={cartStore.itemName.get()}
        onChangeText={cartStore.setItemName}
        placeholder={t(TranslationKey.ITEM_NAME)}
      />
      <DynamicView row style={styles.inputRow}>
        <View style={{ flex: 1, marginEnd: 8 }}>
          <AppTextInput
            value={cartStore.itemPrice.get()}
            onChangeText={cartStore.setItemPrice}
            placeholder={t(TranslationKey.PRICE)}
            keyboardType="numeric"
          />
        </View>
        <View style={{ flex: 1, marginStart: 8 }}>
          <AppTextInput
            value={cartStore.itemQuantity.get()}
            onChangeText={cartStore.setItemQuantity}
            placeholder={t(TranslationKey.QUANTITY)}
            keyboardType="numeric"
          />
        </View>
      </DynamicView>

      {!!cartStore.error.get() && (
        <DynamicText style={styles.errorText}>
          {cartStore.error.get()}
        </DynamicText>
      )}

      <AppButton
        title={t(TranslationKey.ADD_TO_CART)}
        onPress={cartStore.addItem}
        style={styles.addButton}
      />
    </View>
  );
});

const CartSummary = observer(({ cartStore }: CartProps) => {
  const { t } = useTranslation();

  return (
    <ScreenContainer>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <DynamicText style={styles.headerTitle}>
          {t(TranslationKey.CART_SUMMARY)}
        </DynamicText>

        <CartStats cartStore={cartStore} />
        <CartForm cartStore={cartStore} />

        <View style={styles.footerButtons}>
          <AppButton
            title={t(TranslationKey.CLEAR_CART)}
            onPress={cartStore.clearCart}
            style={styles.clearButton}
          />
          <View style={styles.divider} />
          <LanguageSelector />
        </View>
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
  headerTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: Colors.TEXT_PRIMARY,
    textAlign: "center",
    marginBottom: 32,
  },
  statsRow: {
    justifyContent: "space-around",
    marginBottom: 40,
    backgroundColor: Colors.SURFACE,
    padding: 20,
    borderRadius: 20,
  },
  statItem: {
    alignItems: "center",
    paddingVertical: 10,
  },
  statLabel: {
    fontSize: 14,
    color: Colors.TEXT_SECONDARY,
    marginBottom: 8,
    textTransform: "uppercase",
    letterSpacing: 0.8,
  },
  statValue: {
    fontSize: 24,
    fontWeight: "800",
    color: Colors.BUTTON,
  },
  form: {
    marginBottom: 40,
  },
  sectionLabel: {
    fontSize: 16,
    fontWeight: "700",
    color: Colors.SECONDARY,
    marginBottom: 16,
  },
  inputRow: {
    justifyContent: "space-between",
    marginBottom: 8,
  },
  addButton: {
    marginTop: 16,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.BORDER,
    marginVertical: 32,
  },
  footerButtons: {
    gap: 16,
    paddingBottom: 24,
  },
  clearButton: {
    backgroundColor: Colors.ERROR,
  },
  errorText: {
    color: Colors.ERROR,
    fontSize: 14,
    textAlign: "center",
    marginBottom: 16,
    fontWeight: 500,
  },
});

export default CartSummary;
