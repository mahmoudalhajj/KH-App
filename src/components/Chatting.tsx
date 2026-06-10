import { useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import {
    View,
    FlatList,
    StyleSheet,
} from "react-native";

import { messageStore } from "../stores/MessageStore";
import { message } from "../types/message";

import ChatHeader from "../components/chatting/ChatHeader";
import ChatEmptyState from "../components/chatting/ChatEmptyState";
import ChatInput from "../components/chatting/ChatInput";
import MessageBubble from "../components/chatting/ChatMessageBubble";

const Chatting = observer(() => {
    const messages = messageStore.getAllMessages();
    const draft = messageStore.getDraft();

    const flatListRef = useRef<FlatList<message>>(null);

    useEffect(() => {
        messageStore.loadStoredMessages();
    }, []);

    useEffect(() => {
        if (messages.length > 0) {
            flatListRef.current?.scrollToEnd({
                animated: true,
            });
        }
    }, [messages.length]);

    return (
        <View style={styles.container}>

            <ChatHeader onClear={messageStore.clearMessages}/>

            {messages.length === 0 ? (
                <ChatEmptyState />
            ) : (
                <FlatList
                    ref={flatListRef}
                    data={messages}
                    keyExtractor={(item) =>
                        item.id.toString()
                    }
                    contentContainerStyle={
                        styles.messageList
                    }
                    renderItem={({ item }) => (
                        <MessageBubble
                            message={item}
                            formattedTime={
                                messageStore.formatCreatedAt(item.createdAt)} /> )}
                />
            )}

            <ChatInput
                draft={draft}
                onDraftChange={messageStore.setDraft}
                onSend={messageStore.sendMessages}
            />

        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },

    messageList: {
        padding: 16,
    },
});

export default Chatting;