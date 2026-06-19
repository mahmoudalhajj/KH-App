import React from "react";
import { View, StyleSheet } from "react-native";
import { i18nStore } from "../../stores/i18nStore";
import { TranslationKey } from "../../i18n/translationKeys";
import { E_COLORS } from "../../enums/color";
import { DynamicText } from "../common/DynamicText";
import {
  E_FONT_SIZE,
  E_SPACING,
  E_BORDER_RADIUS,
  E_BORDER_WIDTH,
} from "../../enums/designTokens";

const ChatEmptyState = () => {
  return (
    <View style={styles.emptyContainer}>
      <View style={styles.emptyChip}>
        <DynamicText style={styles.emptyText}>
          {i18nStore.translate(TranslationKey.CHAT_EMPTY)}
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
    borderWidth: E_BORDER_WIDTH.DEFAULT,
    borderColor: E_COLORS.BORDER_MUTED,
    borderRadius: E_BORDER_RADIUS.XL,
    paddingHorizontal: E_SPACING.L,
    paddingVertical: E_SPACING.S,
  },
  emptyText: {
    color: E_COLORS.PLACEHOLDER,
    fontSize: E_FONT_SIZE.S,
  },
});

export default ChatEmptyState;
