import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { E_COLORS } from "../../enums/color";
import { i18nStore } from "../../stores/i18nStore";
import { TranslationKey } from "../../i18n/translationKeys";
import { DynamicView } from "../common/DynamicView";
import { DynamicText } from "../common/DynamicText";
import { messageStore } from "../../stores/MessageStore";
import { observer } from "mobx-react-lite";

const ChatHeader = observer(() => {
  return (
    <DynamicView row style={styles.header}>
      <View style={styles.avatar}>
        <DynamicText style={styles.avatarText}>C</DynamicText>
      </View>

      <View style={{ flex: 1 }}>
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
    gap: 12,
    backgroundColor: E_COLORS.HEADER,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: E_COLORS.SECONDARY,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    color: E_COLORS.ON_DARK,
    fontWeight: "700",
    fontSize: 16,
  },
  headerTitle: {
    color: E_COLORS.ON_DARK,
    fontWeight: "700",
    fontSize: 16,
  },
  headerSubtitle: {
    color: E_COLORS.HEADER_SUBTITLE,
    fontSize: 12,
  },
  clearButton: {
    marginLeft: "auto",
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  clearButtonText: {
    color: E_COLORS.ON_DARK,
    fontSize: 14,
  },
});

export default ChatHeader;
