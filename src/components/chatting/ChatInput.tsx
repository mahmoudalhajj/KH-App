import React from "react";
import {
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { E_COLORS } from "../../enums/color";
import { TranslationKey } from "../../i18n/translationKeys";
import { DynamicView } from "../common/DynamicView";
import { DynamicText } from "../common/DynamicText";
import { observer } from "mobx-react-lite";
import { i18nStore } from "../../stores/i18nStore";
import { messageStore } from "../../stores/MessageStore";
import { themeStore } from "../../stores/ThemeStore";
import {
  E_FONT_SIZE,
  E_FONT_WEIGHT,
  E_SPACING,
  E_BORDER_RADIUS,
  E_BORDER_WIDTH,
  E_UI,
  E_LAYOUT,
} from "../../enums/designTokens";

const ChatInput = observer(() => {
  return (
    <DynamicView row style={styles.inputRow}>
      <TextInput
        style={[styles.input, themeStore.getTextAlign()]}
        placeholder={i18nStore.translate(TranslationKey.CHAT_PLACEHOLDER)}
        value={messageStore.getDraft()}
        onChangeText={messageStore.setDraft}
        multiline
        returnKeyType="send"
        submitBehavior="newline"
      />

      <TouchableOpacity
        style={styles.sendButton}
        onPress={messageStore.sendMessages}
      >
        <DynamicText style={styles.sendButtonText}>
          {i18nStore.translate(TranslationKey.CHAT_SEND)}
        </DynamicText>
      </TouchableOpacity>
    </DynamicView>
  );
});

const styles = StyleSheet.create({
  inputRow: {
    alignItems: E_LAYOUT.CENTER,
    gap: E_SPACING.M,
    paddingHorizontal: E_SPACING.L,
    paddingVertical: E_UI.COMPACT_PADDING,
    borderTopWidth: E_BORDER_WIDTH.DEFAULT,
    borderTopColor: E_COLORS.CHAT_INPUT,
    backgroundColor: E_COLORS.BACKGROUND,
  },
  input: {
    flex: E_LAYOUT.FLEX_1,
    borderWidth: E_BORDER_WIDTH.DEFAULT,
    borderColor: E_COLORS.BORDER,
    borderRadius: E_BORDER_RADIUS.XXL,
    paddingHorizontal: E_SPACING.L,
    paddingVertical: E_UI.COMPACT_PADDING,
    fontSize: E_FONT_SIZE.M,
    backgroundColor: E_COLORS.INPUT_FILL,
    maxHeight: E_UI.CHAT_INPUT_MAX_HEIGHT,
  },
  sendButton: {
    backgroundColor: E_COLORS.SECONDARY,
    paddingHorizontal: E_UI.SEND_BUTTON_PADDING_H,
    paddingVertical: E_SPACING.M,
    borderRadius: E_BORDER_RADIUS.XL,
    minWidth: E_UI.SEND_BUTTON_MIN_WIDTH,
    alignItems: E_LAYOUT.CENTER,
    justifyContent: E_LAYOUT.CENTER,
  },
  sendButtonText: {
    color: E_COLORS.BACKGROUND,
    fontWeight: E_FONT_WEIGHT.BOLD,
    fontSize: E_FONT_SIZE.SEND,
  },
});

export default ChatInput;
