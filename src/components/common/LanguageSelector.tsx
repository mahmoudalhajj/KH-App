import React from "react";
import { View, Pressable, StyleSheet } from "react-native";
import { observer } from "mobx-react-lite";
import { E_COLORS } from "../../enums/color";
import { TranslationKey } from "../../i18n/translationKeys";
import { i18nStore } from "../../stores/i18nStore";
import { Language } from "../../i18n/translations";
import { DynamicView } from "./DynamicView";
import { DynamicText } from "./DynamicText";
import { uiStore } from "../../stores/ThemeStore";

const LanguageSelector = observer(() => {
  const languages: { key: Language; value: string }[] = [
    { key: "en", value: "English" },
    { key: "ar", value: "العربية" },
    { key: "fr", value: "Français" },
  ];

  const currentLang = i18nStore.getLanguage();

  return (
    <View style={styles.container}>
      <DynamicText style={uiStore.getLabelStyle()}>
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
    marginTop: 16,
  },
  item: {
    borderRadius: 12,
    marginBottom: 8,
    backgroundColor: E_COLORS.SURFACE,
    borderWidth: 1,
    borderColor: E_COLORS.BORDER,
  },
  itemContent: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "space-between",
  },
  activeItem: {
    borderColor: E_COLORS.BUTTON,
  },
  text: {
    fontSize: 16,
    color: E_COLORS.TEXT_PRIMARY,
  },
  activeText: {
    color: E_COLORS.BUTTON,
    fontWeight: "bold",
  },
  checkmark: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: E_COLORS.BUTTON,
  },
});

export default LanguageSelector;
