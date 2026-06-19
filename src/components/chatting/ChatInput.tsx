import React from "react";
import {
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
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
} from "../../enums/designTokens";

const ChatInput = observer(() => {
  return (
    <KeyboardAvoidingView>
      <DynamicView row style={styles.inputRow}>
        <TextInput
          style={[styles.input, themeStore.getTextAlign()]}
          placeholder={i18nStore.translate(TranslationKey.CHAT_PLACEHOLDER)}
          value={messageStore.getDraft()}
          onChangeText={messageStore.setDraft}
          multiline
        />

        <TouchableOpacity
          style={styles.sendButton}
          onPress={(e) => {
            e.preventDefault();
            messageStore.sendMessages();
          }}
        >
          <DynamicText style={styles.sendButtonText}>
            {i18nStore.translate(TranslationKey.CHAT_SEND)}
          </DynamicText>
        </TouchableOpacity>
      </DynamicView>
    </KeyboardAvoidingView>
  );
});

const styles = StyleSheet.create({
  inputRow: {
    alignItems: "center",
    gap: E_SPACING.M,
    paddingHorizontal: E_SPACING.L,
    paddingVertical: E_SPACING.S + 2,
    borderTopWidth: E_BORDER_WIDTH.DEFAULT,
    borderTopColor: E_COLORS.CHAT_INPUT,
    backgroundColor: E_COLORS.BACKGROUND,
  },
  input: {
    flex: 1,
    borderWidth: E_BORDER_WIDTH.DEFAULT,
    borderColor: E_COLORS.BORDER,
    borderRadius: E_BORDER_RADIUS.XXL,
    paddingHorizontal: E_SPACING.L,
    paddingVertical: E_SPACING.M - 2,
    fontSize: E_FONT_SIZE.M,
    backgroundColor: E_COLORS.INPUT_FILL,
    maxHeight: E_UI.CHAT_INPUT_MAX_HEIGHT,
  },
  sendButton: {
    backgroundColor: E_COLORS.SECONDARY,
    paddingHorizontal: E_SPACING.XL + 2,
    paddingVertical: E_SPACING.M,
    borderRadius: E_BORDER_RADIUS.XL,
    minWidth: E_UI.SEND_BUTTON_MIN_WIDTH,
    alignItems: "center",
    justifyContent: "center",
  },
  sendButtonText: {
    color: E_COLORS.BACKGROUND,
    fontWeight: E_FONT_WEIGHT.BOLD,
    fontSize: E_FONT_SIZE.M - 1,
  },
});

export default ChatInput;
