import React, { useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import { View, FlatList, StyleSheet } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { messageStore } from "../stores/MessageStore";
import { message } from "../types/message";

import ChatHeader from "../components/chatting/ChatHeader";
import ChatEmptyState from "../components/chatting/ChatEmptyState";
import ChatInput from "../components/chatting/ChatInput";
import ChatList from "../components/chatting/ChatList";
import { E_COLORS } from "../enums/color";
import { E_LAYOUT, E_KEYBOARD, E_UI } from "../enums/designTokens";

const Chatting = observer(() => {
  const messages = messageStore.getAllMessages();
  const flatListRef = useRef<FlatList<message>>(null);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    messageStore.loadStoredMessages();
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={E_KEYBOARD.BEHAVIOR_IOS}
      style={styles.keyboardView}
      keyboardVerticalOffset={E_UI.KEYBOARD_VERTICAL_OFFSET}
    >
      <View style={[styles.container, { paddingBottom: insets.bottom }]}>
        <ChatHeader />
        <View style={styles.listWrapper}>
          {messages.length === 0 ? (
            <ChatEmptyState />
          ) : (
            <ChatList listRef={flatListRef} />
          )}
        </View>
        <ChatInput />
      </View>
    </KeyboardAvoidingView>
  );
});

const styles = StyleSheet.create({
  keyboardView: {
    flex: E_LAYOUT.FLEX_1,
  },
  container: {
    flex: E_LAYOUT.FLEX_1,
    backgroundColor: E_COLORS.BACKGROUND,
  },
  listWrapper: {
    flex: E_LAYOUT.FLEX_1,
  },
});

export default Chatting;
