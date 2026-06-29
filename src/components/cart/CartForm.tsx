import React, { useRef } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { observer } from "mobx-react-lite";
import { getCartStore } from "../../stores/getCartStore";
import { authStore } from "../../stores/AuthStore";
import { i18nStore } from "../../stores/i18nStore";
import { E_COLORS } from "../../enums/color";
import { TranslationKey } from "../../i18n/translationKeys";
import AppTextInput from "../common/AppTextInput";
import { DynamicView } from "../common/DynamicView";
import { DynamicText } from "../common/DynamicText";
import { themeStore } from "../../stores/ThemeStore";
import {
  E_FONT_SIZE,
  E_FONT_WEIGHT,
  E_SPACING,
  E_LAYOUT,
} from "../../enums/designTokens";
import { E_TEXT_ALIGN } from "../../enums/direction";

export const CartForm = observer(() => {
  const cartStore = getCartStore(authStore.getUserId());
  const priceRef = useRef<TextInput>(null);
  const quantityRef = useRef<TextInput>(null);

  return (
    <View style={styles.form}>
      {cartStore.error.get() && (
        <DynamicText style={styles.errorText}>
          {i18nStore.translate(cartStore.error.get() as TranslationKey)}
        </DynamicText>
      )}
      <DynamicView row>
        <DynamicText style={themeStore.getLabelStyle()}>
          {i18nStore.translate(TranslationKey.ADD_NEW_ITEM)}
        </DynamicText>
      </DynamicView>
      <AppTextInput
        value={cartStore.itemName.get()}
        onChangeText={cartStore.setItemName}
        placeholder={i18nStore.translate(TranslationKey.ITEM_NAME)}
        returnKeyType="next"
        onSubmitEditing={() => priceRef.current?.focus()}
      />
      <DynamicView row style={styles.inputRow}>
        <View style={styles.priceInputWrapper}>
          <AppTextInput
            ref={priceRef}
            value={cartStore.itemPrice.get()}
            onChangeText={cartStore.setItemPrice}
            placeholder={i18nStore.translate(TranslationKey.PRICE)}
            keyboardType="numeric"
            returnKeyType="next"
            onSubmitEditing={() => quantityRef.current?.focus()}
          />
        </View>
        <View style={styles.quantityInputWrapper}>
          <AppTextInput
            ref={quantityRef}
            value={cartStore.itemQuantity.get()}
            onChangeText={cartStore.setItemQuantity}
            placeholder={i18nStore.translate(TranslationKey.QUANTITY)}
            keyboardType="numeric"
            returnKeyType="done"
          />
        </View>
      </DynamicView>
    </View>
  );
});

const styles = StyleSheet.create({
  form: {
    marginBottom: E_SPACING.M,
  },
  inputRow: {
    justifyContent: E_LAYOUT.SPACE_BETWEEN,
    marginBottom: E_SPACING.S,
  },
  priceInputWrapper: {
    flex: E_LAYOUT.FLEX_1,
    marginEnd: E_SPACING.S,
  },
  quantityInputWrapper: {
    flex: E_LAYOUT.FLEX_1,
    marginStart: E_SPACING.S,
  },
  errorText: {
    color: E_COLORS.ERROR,
    fontSize: E_FONT_SIZE.S,
    textAlign: E_TEXT_ALIGN.CENTER,
    marginBottom: E_SPACING.L,
    fontWeight: E_FONT_WEIGHT.MEDIUM,
  },
});
