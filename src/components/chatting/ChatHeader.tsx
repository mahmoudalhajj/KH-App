import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { E_COLORS } from "../../enums/color";
import { i18nStore } from "../../stores/i18nStore";
import { TranslationKey } from "../../i18n/translationKeys";
import { DynamicView } from "../common/DynamicView";
import { DynamicText } from "../common/DynamicText";
import { messageStore } from "../../stores/MessageStore";
import { observer } from "mobx-react-lite";
import { E_APP } from "../../enums/strings";
import {
  E_FONT_SIZE,
  E_FONT_WEIGHT,
  E_SPACING,
  E_UI,
} from "../../enums/designTokens";

const ChatHeader = observer(() => {
  return (
    <DynamicView row style={styles.header}>
      <View style={styles.avatar}>
        <DynamicText style={styles.avatarText}>
          {E_APP.CHAT_AVATAR_INITIAL}
        </DynamicText>
      </View>

      <View style={styles.headerTextWrapper}>
        <DynamicText style={styles.headerTitle}>
          {i18nStore.translate(TranslationKey.CHAT_TITLE)}
        </DynamicText>

        <DynamicText style={styles.headerSubtitle}>
          {i18nStore.translate(TranslationKey.CHAT_SUBTITLE)}
        </DynamicText>
      </View>

      <TouchableOpacity
        style={styles.clearButton}
        onPress={messageStore.clearMessages}
      >
        <DynamicText style={styles.clearButtonText}>
          {i18nStore.translate(TranslationKey.CHAT_CLEAR)}
        </DynamicText>
      </TouchableOpacity>
    </DynamicView>
  );
});

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    gap: E_SPACING.M,
    backgroundColor: E_COLORS.HEADER,
    paddingHorizontal: E_SPACING.L,
    paddingVertical: E_SPACING.M,
  },
  avatar: {
    width: E_UI.AVATAR_SIZE,
    height: E_UI.AVATAR_SIZE,
    borderRadius: E_UI.AVATAR_RADIUS,
    backgroundColor: E_COLORS.SECONDARY,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    color: E_COLORS.ON_DARK,
    fontWeight: E_FONT_WEIGHT.BOLD,
    fontSize: E_FONT_SIZE.M,
  },
  headerTextWrapper: {
    flex: 1,
  },
  headerTitle: {
    color: E_COLORS.ON_DARK,
    fontWeight: E_FONT_WEIGHT.BOLD,
    fontSize: E_FONT_SIZE.M,
  },
  headerSubtitle: {
    color: E_COLORS.HEADER_SUBTITLE,
    fontSize: E_FONT_SIZE.XS,
  },
  clearButton: {
    marginLeft: "auto",
    paddingHorizontal: E_SPACING.M,
    paddingVertical: E_SPACING.XS + 2,
  },
  clearButtonText: {
    color: E_COLORS.ON_DARK,
    fontSize: E_FONT_SIZE.S,
  },
});

export default ChatHeader;
