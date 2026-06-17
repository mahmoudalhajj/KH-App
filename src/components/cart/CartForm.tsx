import React from "react";
import { View, StyleSheet } from "react-native";
import { observer } from "mobx-react-lite";
import type { CartStore } from "../../stores/CartStore";
import { useTranslation } from "react-i18next";
import { Colors } from "../../enums/color";
import { TranslationKey } from "../../i18n/translationKeys";
import AppTextInput from "../common/AppTextInput";
import AppButton from "../common/AppButton";
import { DynamicView } from "../common/DynamicView";
import { DynamicText } from "../common/DynamicText";
import { uiStore } from "../../stores/ThemeStore";

interface CartFormProps {
  cartStore: CartStore;
}

export const CartForm = observer(({ cartStore }: CartFormProps) => {
  const { t } = useTranslation();
  return (
    <View style={styles.form}>
      <DynamicView row>
        <DynamicText style={uiStore.getLabelStyle()}>
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

const styles = StyleSheet.create({
  form: {
    marginBottom: 40,
  },
  inputRow: {
    justifyContent: "space-between",
    marginBottom: 8,
  },
  addButton: {
    marginTop: 16,
  },
  errorText: {
    color: Colors.ERROR,
    fontSize: 14,
    textAlign: "center",
    marginBottom: 16,
    fontWeight: 500,
  },
});
