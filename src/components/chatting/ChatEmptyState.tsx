import React from "react";
import { View, StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";
import { TranslationKey } from "../../i18n/translationKeys";
import { DynamicText } from "../common/DynamicText";

const ChatEmptyState = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.emptyContainer}>
      <View style={styles.emptyChip}>
        <DynamicText style={styles.emptyText}>
          {t(TranslationKey.CHAT_EMPTY)}
        </DynamicText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyChip: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  emptyText: {
    color: "#888",
    fontSize: 14,
  },
});

export default ChatEmptyState;
