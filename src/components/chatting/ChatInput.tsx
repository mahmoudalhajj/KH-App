import {
    View,
    TextInput,
    TouchableOpacity,
    Text,
    StyleSheet,
    KeyboardAvoidingView
} from "react-native";
import {Colors} from "../../enums/color";
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
        borderTopColor: Colors.CHAT_INPUT,
        backgroundColor: Colors.BACKGROUND,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: Colors.BACKGROUND,
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
        fontSize: 14,
        backgroundColor: "white",
        maxHeight: 100,
    },
    sendButton: {
        backgroundColor: Colors.SECONDARY,
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 8,
        minWidth: 80,
        alignItems: "center",
    },
    sendButtonText: {
        color:Colors.BACKGROUND,
        fontWeight: "600",
        fontSize: 14,
    },
});

export default ChatInput;