import {
    View,
    TextInput,
    TouchableOpacity,
    Text,
    StyleSheet,
    KeyboardAvoidingView
} from "react-native";

interface ChatInputProps {
    draft: string;
    onDraftChange: (text: string) => void;
    onSend: () => void;
}

const ChatInput = ({ draft, onDraftChange, onSend,}: ChatInputProps) => {
    return (
        <KeyboardAvoidingView>
            <View style={styles.inputRow}>
                <TextInput
                    style={styles.input}
                    placeholder="Write a message..."
                    value={draft}
                    onChangeText={onDraftChange}
                    multiline
                />

                <TouchableOpacity
                    style={styles.sendButton}
                    onPress={onSend}
                >
                    <Text style={styles.sendButtonText}>
                        Send
                    </Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
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

export default ChatInput;