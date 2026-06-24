import React, { useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import { View, FlatList, StyleSheet, Platform } from "react-native";
import { KeyboardAvoidingView } from "react-native-keyboard-controller";

import { messageStore } from "../stores/MessageStore";
import { message } from "../types/message";

import ChatHeader from "../components/chatting/ChatHeader";
import ChatEmptyState from "../components/chatting/ChatEmptyState";
import ChatInput from "../components/chatting/ChatInput";
import ChatList from "../components/chatting/ChatList";
import { E_COLORS } from "../enums/color";
import { E_LAYOUT, E_KEYBOARD } from "../enums/designTokens";
import { E_PLATFORMS } from "../enums/platforms";

const Chatting = observer(() => {
  const messages = messageStore.getAllMessages();
  const flatListRef = useRef<FlatList<message>>(null);

  useEffect(() => {
    messageStore.loadStoredMessages();
  }, []);

  return (
    <View style={styles.container}>
      <ChatHeader />
      <KeyboardAvoidingView
        behavior={
          Platform.OS === E_PLATFORMS.IOS
            ? E_KEYBOARD.BEHAVIOR_IOS
            : E_KEYBOARD.BEHAVIOR_ANDROID
        }
        keyboardVerticalOffset={E_KEYBOARD.VERTICAL_OFFSET}
        style={styles.keyboardView}
      >
        <View style={styles.content}>
          {messages.length === 0 ? (
            <ChatEmptyState />
          ) : (
            <ChatList listRef={flatListRef} />
          )}
          <ChatInput />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: E_LAYOUT.FLEX_1,
    backgroundColor: E_COLORS.BACKGROUND,
  },
  keyboardView: {
    flex: E_LAYOUT.FLEX_1,
  },
  content: {
    flex: E_LAYOUT.FLEX_1,
  },
});

export default Chatting;
