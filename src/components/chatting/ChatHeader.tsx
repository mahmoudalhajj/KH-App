import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Colors } from "../../enums/color";

interface ChatHeaderProps {
  onClear: () => void;
}

const ChatHeader = ({ onClear }: ChatHeaderProps) => {
  return (
    <View style={styles.header}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>C</Text>
      </View>

      <View>
        <Text style={styles.headerTitle}>Chat</Text>

        <Text style={styles.headerSubtitle}>
          Type a message and press send.
        </Text>
      </View>

      <TouchableOpacity style={styles.clearButton} onPress={onClear}>
        <Text style={styles.clearButtonText}>Clear</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: Colors.HEADER,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.SECONDARY,
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
    color: Colors.HEADER_SUBTITLE,
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
});

export default ChatHeader;
