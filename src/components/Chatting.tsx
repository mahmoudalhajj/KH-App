import { useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import { messageStore } from "../stores/MessageStore";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

const Chatting = observer(() => {
  const messages = messageStore.getAllMessages();
  const draft = messageStore.getDraft();
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    messageStore.loadStoredMessages();
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      flatListRef.current?.scrollToEnd({ animated: true });
    }
  }, [messages.length]);



  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>C</Text>
        </View>
        <View>
          <Text style={styles.headerTitle}>Chat</Text>
          <Text style={styles.headerSubtitle}>Type a message and press send.</Text>
        </View>
        <TouchableOpacity style={styles.clearButton} onPress={() => messageStore.clearMessages()}>
          <Text style={styles.clearButtonText}>Clear</Text>
        </TouchableOpacity>
      </View>

      {/* Messages */}
      {messages.length === 0 ? (
        <View style={styles.emptyContainer}>
          <View style={styles.emptyChip}>
            <Text style={styles.emptyText}>No messages yet, start chatting!</Text>
          </View>
        </View>
      ) : (
        <FlatList
          ref={flatListRef}
          data={messages}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.messageList}
          onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
          renderItem={({ item }) => (
            <View style={styles.messageBubbleWrapper}>
              <View style={styles.messageBubble}>
                <Text style={styles.messageText}>{item.text}</Text>
                <Text style={styles.messageTime}>
                  {messageStore.formatCreatedAt(item.createdAt)}
                </Text>
              </View>
            </View>
          )}
        />
      )}

      {/* Input */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            placeholder="Write a message..."
            value={draft}
            onChangeText={(text) => messageStore.setDraft(text)}
            multiline
            onSubmitEditing={messageStore.sendMessages}
          />
          <TouchableOpacity style={styles.sendButton} onPress={messageStore.sendMessages}>
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>

    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#fff",
  },

  // Header
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: "#1976d2",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#9c27b0",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  headerTitle: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  headerSubtitle: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 12,
  },
  clearButton: {
    marginLeft: "auto",
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  clearButtonText: {
    color: "white",
    fontSize: 14,
  },

  // Empty state
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyChip: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  emptyText: {
    color: "#888",
    fontSize: 14,
  },

  // Messages
  messageList: {
    padding: 16,
    gap: 12,
  },
  messageBubbleWrapper: {
    alignSelf: "flex-end",
    maxWidth: "85%",
    marginBottom: 8,
  },
  messageBubble: {
    backgroundColor: "#212121",
    borderRadius: 12,
    padding: 12,
  },
  messageText: {
    color: "white",
    fontSize: 14,
  },
  messageTime: {
    color: "rgba(255,255,255,0.6)",
    fontSize: 11,
    marginTop: 4,
  },

  // Input
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    backgroundColor: "white",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 14,
    backgroundColor: "white",
    maxHeight: 100,
  },
  sendButton: {
    backgroundColor: "#9c27b0",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    minWidth: 80,
    alignItems: "center",
  },
  sendButtonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 14,
  },
});

export default Chatting;