import React from "react";
import { message } from "../types/message";
import { messageStore } from "../stores/MessageStore";
import MessageBubble from "../components/chatting/ChatMessageBubble";

export const renderItem = ({ item }: { item: message }) => (
  <MessageBubble
    message={item}
    formattedTime={messageStore.formatCreatedAt(item.createdAt)}
  />
);
