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
import { uiStore } from "../../stores/ThemeStore";

const ChatInput = observer(() => {
  return (
    <KeyboardAvoidingView>
      <DynamicView row style={styles.inputRow}>
        <TextInput
          style={[styles.input, uiStore.getTextAlign()]}
          placeholder={i18nStore.translate(TranslationKey.CHAT_PLACEHOLDER)}
          value={messageStore.getDraft()}
          onChangeText={messageStore.setDraft}
          multiline
        />

        <TouchableOpacity
          style={styles.sendButton}
          onPress={(e) => {
            e?.preventDefault?.();
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
    gap: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderTopWidth: 1,
    borderTopColor: E_COLORS.CHAT_INPUT,
    backgroundColor: E_COLORS.BACKGROUND,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: E_COLORS.BORDER,
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: "#F9F9F9",
    maxHeight: 120,
  },
  sendButton: {
    backgroundColor: E_COLORS.SECONDARY,
    paddingHorizontal: 22,
    paddingVertical: 12,
    borderRadius: 20,
    minWidth: 90,
    alignItems: "center",
    justifyContent: "center",
  },
  sendButtonText: {
    color: E_COLORS.BACKGROUND,
    fontWeight: "700",
    fontSize: 15,
  },
});

export default ChatInput;
