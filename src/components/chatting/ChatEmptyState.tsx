import { View, Text, StyleSheet } from "react-native";

const ChatEmptyState = () => {
  return (
    <View style={styles.emptyContainer}>
      <View style={styles.emptyChip}>
        <Text style={styles.emptyText}>No messages yet, start chatting!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default ChatEmptyState;
