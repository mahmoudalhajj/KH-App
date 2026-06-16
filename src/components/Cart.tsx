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
import { RTLExample } from "./common/RTLExample";
import { DynamicView } from "./common/DynamicView";
import { DynamicText } from "./common/DynamicText";

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
        <View style={styles.card}>
          <DynamicText style={styles.headerTitle}>
            {" "}
            {t(TranslationKey.CART_SUMMARY)}
          </DynamicText>
          <RTLExample />

          <DynamicView row style={styles.statsRow}>
            <DynamicView style={styles.statItem}>
              <DynamicText style={styles.statLabel}>
                {" "}
                {t(TranslationKey.TOTAL_ITEMS)}
              </DynamicText>
              <DynamicText style={styles.statValue}>
                {cartStore.getTotalItems()}
              </DynamicText>
            </DynamicView>
            <DynamicView style={styles.statItem}>
              <DynamicText style={styles.statLabel}>
                {" "}
                {t(TranslationKey.TOTAL_PRICE)}{" "}
              </DynamicText>
              <DynamicText style={styles.statValue}>
                ${cartStore.getTotalPrice()}
              </DynamicText>
            </DynamicView>
          </DynamicView>

          <View style={styles.form}>
            <DynamicView row style={{}}>
              <DynamicText style={styles.sectionLabel}>
                {" "}
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

          <View style={styles.footerButtons}>
            <AppButton
              title={t(TranslationKey.CLEAR_CART)}
              onPress={cartStore.clearCart}
              style={styles.clearButton}
            />

            <View style={styles.divider} />

            <LanguageSelector />
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
});

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    padding: 20,
    justifyContent: "center",
  },
  card: {
    backgroundColor: Colors.BACKGROUND,
    borderRadius: 24,
    padding: 24,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: Colors.TEXT_PRIMARY,
    textAlign: "center",
    marginBottom: 24,
  },
  statsRow: {
    justifyContent: "space-around",
    marginBottom: 32,
    backgroundColor: Colors.SURFACE,
    padding: 16,
    borderRadius: 16,
  },
  statItem: {
    alignItems: "center",
  },
  statLabel: {
    fontSize: 12,
    color: Colors.TEXT_SECONDARY,
    marginBottom: 4,
    textTransform: "uppercase",
  },
  statValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.BUTTON,
  },
  form: {
    marginBottom: 24,
  },
  sectionLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.SECONDARY,
    marginBottom: 12,
  },
  inputRow: {
    justifyContent: "space-between",
  },
  addButton: {
    marginTop: 8,
    borderRadius: 12,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.BORDER,
    marginVertical: 24,
  },
  footerButtons: {
    gap: 12,
  },
  clearButton: {
    backgroundColor: Colors.ERROR,
    borderRadius: 12,
  },
  errorText: {
    color: Colors.ERROR,
    fontSize: 13,
    textAlign: "center",
    marginBottom: 12,
  },
});
export default CartSummary;
