import React, { useCallback } from "react";
import { FlatList, StyleSheet } from "react-native";
import { observer } from "mobx-react-lite";
import { message } from "../../types/message";
import { messageStore } from "../../stores/MessageStore";
import MessageBubble from "./ChatMessageBubble";
import { E_SPACING, E_LAYOUT, E_KEYBOARD } from "../../enums/designTokens";
import { renderItem } from "../../helpers/chatHelper";

interface ChatListProps {
  listRef: React.RefObject<FlatList<message> | null>;
}
//"a ref whose .current is either a mounted FlatList of messages, or null"

const ChatList = observer(({ listRef }: ChatListProps) => {
  const messages = messageStore.getAllMessages();

  const handleContentSizeChange = useCallback(() => {
    listRef.current?.scrollToEnd({ animated: messages.length > 0 });
  }, [messages.length]);

  return (
    <FlatList
      ref={listRef}
      data={messages}
      keyExtractor={(item) => item.id.toString()}
      style={styles.list}
      contentContainerStyle={styles.messageList}
      contentInsetAdjustmentBehavior="automatic"
      onContentSizeChange={handleContentSizeChange}
      keyboardShouldPersistTaps={E_KEYBOARD.PERSIST_TAPS}
      renderItem={renderItem}
    />
  );
});

const styles = StyleSheet.create({
  list: {
    flex: E_LAYOUT.FLEX_1,
  },
  messageList: {
    padding: E_SPACING.L,
  },
});

export default ChatList;
