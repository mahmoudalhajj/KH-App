import { View, Text, StyleSheet } from "react-native";
import { message } from "../../types/message";
import { Colors } from "../../enums/color";

interface MessageBubbleProps {
  message: message;
  formattedTime: string;
}

const MessageBubble = ({ message, formattedTime }: MessageBubbleProps) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.bubble}>
        <Text style={styles.text}>{message.text}</Text>

        <Text style={styles.time}>{formattedTime}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: "flex-end",
    maxWidth: "85%",
    marginBottom: 8,
  },
  bubble: {
    backgroundColor: Colors.BUBBLE,
    borderRadius: 12,
    padding: 12,
  },
  text: {
    color: Colors.BACKGROUND,
    fontSize: 14,
  },
  time: {
    color: Colors.HEADER_SUBTITLE,
    fontSize: 11,
    marginTop: 4,
  },
});

export default MessageBubble;
