import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import { Colors } from "../../enums/color";
import { useTranslation } from "react-i18next";
import { TranslationKey } from "../../i18n/translationKeys";
import { DynamicView } from "../common/DynamicView";
import { DynamicText } from "../common/DynamicText";
import { observer } from "mobx-react-lite";
import { i18nStore } from "../../stores/i18nStore";

interface ChatInputProps {
  draft: string;
  onDraftChange: (text: string) => void;
  onSend: () => void;
}

const ChatInput = observer(({ draft, onDraftChange, onSend }: ChatInputProps) => {
  const { t } = useTranslation();
  const isRTL = i18nStore.getIsRTL();

  return (
    <KeyboardAvoidingView>
      <DynamicView row style={styles.inputRow}>
        <TextInput
          style={[styles.input, { textAlign: isRTL ? "right" : "left" }]}
          placeholder={t(TranslationKey.CHAT_PLACEHOLDER)}
          value={draft}
          onChangeText={onDraftChange}
          multiline
        />

        <TouchableOpacity 
          style={styles.sendButton} 
          onPress={(e) => {
            e?.preventDefault?.();
            onSend();
          }}
        >
          <DynamicText style={styles.sendButtonText}>
            {t(TranslationKey.CHAT_SEND)}
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
    borderTopColor: Colors.CHAT_INPUT,
    backgroundColor: Colors.BACKGROUND,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.BORDER,
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: "#F9F9F9",
    maxHeight: 120,
  },
  sendButton: {
    backgroundColor: Colors.SECONDARY,
    paddingHorizontal: 22,
    paddingVertical: 12,
    borderRadius: 20,
    minWidth: 90,
    alignItems: "center",
    justifyContent: "center",
  },
  sendButtonText: {
    color: Colors.BACKGROUND,
    fontWeight: "700",
    fontSize: 15,
  },
});

export default ChatInput;
