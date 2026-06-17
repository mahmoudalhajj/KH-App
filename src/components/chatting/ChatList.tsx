import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { observer } from "mobx-react-lite";
import { message } from "../../types/message";
import { messageStore } from "../../stores/MessageStore";
import MessageBubble from "./ChatMessageBubble";

interface ChatListProps {
  listRef: React.RefObject<FlatList<message> | null>;
}

const ChatList = observer(({ listRef }: ChatListProps) => {
  const messages = messageStore.getAllMessages();

  return (
    <FlatList
      ref={listRef}
      data={messages}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.messageList}
      renderItem={({ item }) => (
        <MessageBubble
          message={item}
          formattedTime={messageStore.formatCreatedAt(item.createdAt)}
        />
      )}
    />
  );
});

const styles = StyleSheet.create({
  messageList: {
    padding: 16,
  },
});

export default ChatList;
