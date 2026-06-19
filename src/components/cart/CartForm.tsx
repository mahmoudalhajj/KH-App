import React from "react";
import { View, StyleSheet } from "react-native";
import { observer } from "mobx-react-lite";
import { cartStore } from "../../stores/CartStore";
import { i18nStore } from "../../stores/i18nStore";
import { E_COLORS } from "../../enums/color";
import { TranslationKey } from "../../i18n/translationKeys";
import AppTextInput from "../common/AppTextInput";
import AppButton from "../common/AppButton";
import { DynamicView } from "../common/DynamicView";
import { DynamicText } from "../common/DynamicText";
import { themeStore } from "../../stores/ThemeStore";
import { E_FONT_SIZE, E_SPACING } from "../../enums/designTokens";

export const CartForm = observer(() => {
  return (
    <View style={styles.form}>
      <DynamicView row>
        <DynamicText style={themeStore.getLabelStyle()}>
          {i18nStore.translate(TranslationKey.ADD_NEW_ITEM)}
        </DynamicText>
      </DynamicView>
      <AppTextInput
        value={cartStore.itemName.get()}
        onChangeText={cartStore.setItemName}
        placeholder={i18nStore.translate(TranslationKey.ITEM_NAME)}
      />
      <DynamicView row style={styles.inputRow}>
        <View style={styles.priceInputWrapper}>
          <AppTextInput
            value={cartStore.itemPrice.get()}
            onChangeText={cartStore.setItemPrice}
            placeholder={i18nStore.translate(TranslationKey.PRICE)}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.quantityInputWrapper}>
          <AppTextInput
            value={cartStore.itemQuantity.get()}
            onChangeText={cartStore.setItemQuantity}
            placeholder={i18nStore.translate(TranslationKey.QUANTITY)}
            keyboardType="numeric"
          />
        </View>
      </DynamicView>

      {cartStore.error.get() && (
        <DynamicText style={styles.errorText}>
          {cartStore.error.get()}
        </DynamicText>
      )}

      <AppButton
        title={i18nStore.translate(TranslationKey.ADD_TO_CART)}
        onPress={cartStore.addItem}
        style={styles.addButton}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  form: {
    marginBottom: E_SPACING.XXXXL,
  },
  inputRow: {
    justifyContent: "space-between",
    marginBottom: E_SPACING.S,
  },
  priceInputWrapper: {
    flex: 1,
    marginEnd: E_SPACING.S,
  },
  quantityInputWrapper: {
    flex: 1,
    marginStart: E_SPACING.S,
  },
  addButton: {
    marginTop: E_SPACING.L,
  },
  errorText: {
    color: E_COLORS.ERROR,
    fontSize: E_FONT_SIZE.S,
    textAlign: "center",
    marginBottom: E_SPACING.L,
    fontWeight: 500,
  },
});
