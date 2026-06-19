import React, { useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import { View, FlatList, StyleSheet } from "react-native";

import { messageStore } from "../stores/MessageStore";
import { message } from "../types/message";

import ChatHeader from "../components/chatting/ChatHeader";
import ChatEmptyState from "../components/chatting/ChatEmptyState";
import ChatInput from "../components/chatting/ChatInput";
import ChatList from "../components/chatting/ChatList";
import { E_COLORS } from "../enums/color";
import { E_LAYOUT } from "../enums/designTokens";
import ScreenContainer from "./common/ScreenContainer";

const Chatting = observer(() => {
  const messages = messageStore.getAllMessages();
  const flatListRef = useRef<FlatList<message>>(null);

  useEffect(() => {
    messageStore.loadStoredMessages();
  }, []);

  return (
    <ScreenContainer style={styles.container}>
      <ChatHeader />

      <View style={styles.listWrapper}>
        {messages.length === 0 ? (
          <ChatEmptyState />
        ) : (
          <ChatList listRef={flatListRef} />
        )}
      </View>

      <ChatInput />
    </ScreenContainer>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: E_COLORS.BACKGROUND,
  },
  listWrapper: {
    flex: E_LAYOUT.FLEX_1,
  },
});

export default Chatting;
