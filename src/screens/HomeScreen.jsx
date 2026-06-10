import { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { authStore } from "../stores/AuthStore";
import { observer } from "mobx-react-lite";

export const HomeScreen = observer(() => {
  const navigation = useNavigation();

  useEffect(() => {
    if (!authStore.isLoggedIn()) {
      navigation.replace("Auth");
    }
  }, [authStore.status.get()]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      <View style={styles.content}>
        <View style={styles.grid}>
          <TouchableOpacity 
            style={[styles.card, { backgroundColor: "#f8f9fa" }]}
            onPress={() => navigation.navigate("Cart")}
          >
            <Text style={styles.cardTitle}>Cart</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.card, { backgroundColor: "#f8f9fa" }]}
            onPress={() => navigation.navigate("Chat")}
          >
            <Text style={styles.cardTitle}>Chat</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          style={styles.logoutButton} 
          onPress={() => authStore.logout()}
        >
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
  },
  grid: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40,
  },
  card: {
    width: "46%",
    aspectRatio: 1,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#eee",
  },
  iconText: {
    fontSize: 32,
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#212121",
  },
  logoutButton: {
    alignSelf: "center",
    padding: 12,
  },
  logoutText: {
    color: "#999",
    fontWeight: "500",
    fontSize: 14,
  },
});