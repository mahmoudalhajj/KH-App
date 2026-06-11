import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { authStore } from "../stores/AuthStore";
import { cartStore } from "../stores/CartStore";
import { observer } from "mobx-react-lite";
import { Colors } from "../enums/color";
import ScreenContainer from "../components/common/ScreenContainer";

const HomeScreenComponent = () => {
  const navigation = useNavigation();

  return (
    <ScreenContainer style={styles.content}>
      <View style={styles.grid}>
        <TouchableOpacity 
          activeOpacity={0.7}
          style={styles.card}
          onPress={() => navigation.navigate("Cart")}
        >
          <View style={styles.iconCircle}>
            <Text style={styles.iconText}>🛒</Text>
          </View>
          <Text style={styles.cardTitle}>Cart</Text>
          {cartStore.getTotalItems() > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{cartStore.getTotalItems()}</Text>
            </View>
          )}
        </TouchableOpacity>

        <TouchableOpacity 
          activeOpacity={0.7}
          style={styles.card}
          onPress={() => navigation.navigate("Chat")}
        >
          <View style={styles.iconCircle}>
            <Text style={styles.iconText}>💬</Text>
          </View>
          <Text style={styles.cardTitle}>Chat</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
        style={styles.logoutButton} 
        onPress={() => authStore.logout()}
      >
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScreenContainer>
  );
};

export const HomeScreen = observer(HomeScreenComponent);

const styles = StyleSheet.create({
  content: {
    padding: 24,
    justifyContent: "center",
  },
  grid: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 48,
  },
  card: {
    width: "46%",
    aspectRatio: 1,
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.SURFACE,
    borderWidth: 1,
    borderColor: Colors.BORDER,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    position: 'relative',
  },
  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.BACKGROUND,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconText: {
    fontSize: 24,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.TEXT_PRIMARY,
  },
  badge: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: Colors.BADGE,
    borderRadius: 12,
    minWidth: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 6,
    borderWidth: 2,
    borderColor: Colors.SURFACE,
  },
  badgeText: {
    color: 'white',
    fontSize: 11,
    fontWeight: 'bold',
  },
  logoutButton: {
    alignSelf: "center",
    padding: 12,
  },
  logoutText: {
    color: Colors.TEXT_SECONDARY,
    fontWeight: "500",
    fontSize: 14,
  },
});
