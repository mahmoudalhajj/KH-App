import React from "react";
import { View, Pressable, StyleSheet } from "react-native";
import { observer } from "mobx-react-lite";
import { E_COLORS } from "../../enums/color";
import { TranslationKey } from "../../i18n/translationKeys";
import { i18nStore } from "../../stores/i18nStore";
import { Language } from "../../i18n/translations";
import { DynamicView } from "./DynamicView";
import { DynamicText } from "./DynamicText";
import { themeStore } from "../../stores/ThemeStore";
import { E_LANGUAGE_LABELS } from "../../enums/language";
import {
  E_FONT_SIZE,
  E_FONT_WEIGHT,
  E_SPACING,
  E_BORDER_RADIUS,
  E_BORDER_WIDTH,
  E_UI,
} from "../../enums/designTokens";

const languages: { key: Language; value: string }[] = [
  { key: "en", value: E_LANGUAGE_LABELS.EN },
  { key: "ar", value: E_LANGUAGE_LABELS.AR },
  { key: "fr", value: E_LANGUAGE_LABELS.FR },
];

const LanguageSelector = observer(() => {
  const currentLang = i18nStore.getLanguage();

  return (
    <View style={styles.container}>
      <DynamicText style={themeStore.getLabelStyle()}>
        {i18nStore.translate(TranslationKey.CHANGE_LANGUAGE)}
      </DynamicText>

      {languages.map((lang) => (
        <Pressable
          key={lang.key}
          style={[styles.item, currentLang === lang.key && styles.activeItem]}
          onPress={() => i18nStore.setLanguage(lang.key)}
        >
          <DynamicView row style={styles.itemContent}>
            <DynamicText
              style={[
                styles.text,
                currentLang === lang.key && styles.activeText,
              ]}
            >
              {lang.value}
            </DynamicText>
            {currentLang === lang.key && <View style={styles.checkmark} />}
          </DynamicView>
        </Pressable>
      ))}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    marginTop: E_SPACING.L,
  },
  item: {
    borderRadius: E_BORDER_RADIUS.M,
    marginBottom: E_SPACING.S,
    backgroundColor: E_COLORS.SURFACE,
    borderWidth: E_BORDER_WIDTH.DEFAULT,
    borderColor: E_COLORS.BORDER,
  },
  itemContent: {
    paddingVertical: E_SPACING.M,
    paddingHorizontal: E_SPACING.L,
    alignItems: "center",
    justifyContent: "space-between",
  },
  activeItem: {
    borderColor: E_COLORS.BUTTON,
  },
  text: {
    fontSize: E_FONT_SIZE.M,
    color: E_COLORS.TEXT_PRIMARY,
  },
  activeText: {
    color: E_COLORS.BUTTON,
    fontWeight: E_FONT_WEIGHT.BOLD,
  },
  checkmark: {
    width: E_UI.CHECKMARK_SIZE,
    height: E_UI.CHECKMARK_SIZE,
    borderRadius: E_UI.CHECKMARK_RADIUS,
    backgroundColor: E_COLORS.BUTTON,
  },
});

export default LanguageSelector;
