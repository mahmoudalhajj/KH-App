import { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { authStore } from "../stores/AuthStore";
import Chatting from "../components/Chatting";

import { observer } from "mobx-react-lite";

export const ChatScreen = observer(() => {
  const navigation = useNavigation();

  // useEffect(() => {
  //   if (!authStore.isLoggedIn()) {
  //     navigation.replace("Auth");
  //   }
  // }, [authStore.status.get()]);

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
