import React from "react";
import { View, Pressable, StyleSheet } from "react-native";
import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
import { Colors } from "../../enums/color";
import { TranslationKey } from "../../i18n/translationKeys";
import { i18nStore } from "../../stores/i18nStore";
import { Language } from "../../i18n/translations";
import { DynamicView } from "./DynamicView";
import { DynamicText } from "./DynamicText";
import { uiStore } from "../../stores/ThemeStore";

const LanguageSelector = observer(() => {
  const { t } = useTranslation();

  const languages: { key: Language; value: string }[] = [
    { key: "en", value: "English" },
    { key: "ar", value: "العربية" },
    { key: "fr", value: "Français" },
  ];

  const currentLang = i18nStore.getLanguage();

  return (
    <View style={styles.container}>
      <DynamicText style={uiStore.labelStyle}>
        {t(TranslationKey.CHANGE_LANGUAGE)}
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
    backgroundColor: Colors.SURFACE,
    borderWidth: 1,
    borderColor: Colors.BORDER,
  },
  itemContent: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "space-between",
  },
  activeItem: {
    borderColor: Colors.BUTTON,
  },
  text: {
    fontSize: 16,
    color: Colors.TEXT_PRIMARY,
  },
  activeText: {
    color: Colors.BUTTON,
    fontWeight: "bold",
  },
  checkmark: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.BUTTON,
  },
});

export default LanguageSelector;
