import { View, StyleSheet } from "react-native";
import Chatting from "../components/Chatting";
import { observer } from "mobx-react-lite";

export const ChatScreen = observer(() => {
  return (
    <View style={styles.container}>
      <Chatting />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
