import React, { useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import { View, FlatList, StyleSheet } from "react-native";

import { messageStore } from "../stores/MessageStore";
import { message } from "../types/message";

import ChatHeader from "../components/chatting/ChatHeader";
import ChatEmptyState from "../components/chatting/ChatEmptyState";
import ChatInput from "../components/chatting/ChatInput";
import ChatList from "../components/chatting/ChatList";
import { Colors } from "../enums/color";
import ScreenContainer from "./common/ScreenContainer";

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
        <ScreenContainer style={styles.container}>
            <ChatHeader onClear={messageStore.clearMessages}/>

            <View style={styles.listWrapper}>
                {messages.length === 0 ? (
                    <ChatEmptyState />
                ) : (
                    <ChatList messages={messages} listRef={flatListRef} />
                )}
            </View>

            <ChatInput
                draft={draft}
                onDraftChange={messageStore.setDraft}
                onSend={messageStore.sendMessages}
            />
        </ScreenContainer>
    );
});

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.BACKGROUND,
    },
    listWrapper: {
        flex: 1,
    },
});

export default Chatting;
