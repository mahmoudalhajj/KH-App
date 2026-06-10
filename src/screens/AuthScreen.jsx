import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { observer } from "mobx-react-lite";
import { authStore } from "../stores/AuthStore";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

export const AuthScreen = observer(() => {
  const navigation = useNavigation();

  useEffect(() => {
    if (authStore.isLoggedIn()) {
      navigation.replace("Home");
    }
  }, [authStore.status.get()]);

  const handleAuth = () => {
    if (authStore.getIsRegistering()) {
      authStore.register(
        authStore.name.get(),
        authStore.email.get(),
        authStore.password.get()
      );
    } else {
      authStore.login();
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.card}>
          <Text style={styles.title}>
            {authStore.getIsRegistering() ? "Create Account" : "Welcome Back"}
          </Text>
          <Text style={styles.subtitle}>
            {authStore.getIsRegistering()
              ? "Sign up to get started"
              : "Login to your account"}
          </Text>

          {authStore.getIsRegistering() && (
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Full Name</Text>
              <TextInput
                style={styles.input}
                placeholder="John Doe"
                value={authStore.name.get()}
                onChangeText={(text) => authStore.setName(text)}
              />
            </View>
          )}

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email Address</Text>
            <TextInput
              style={styles.input}
              placeholder="email@example.com"
              value={authStore.email.get()}
              onChangeText={(text) => authStore.setEmail(text)}
              autoCapitalize="none"
              keyboardType="email-address"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="••••••••"
              value={authStore.password.get()}
              onChangeText={(text) => authStore.setPassword(text)}
              secureTextEntry
            />
          </View>

          {!!authStore.getError() && (
            <Text style={styles.errorText}>{authStore.getError()}</Text>
          )}

          <TouchableOpacity style={styles.button} onPress={handleAuth}>
            <Text style={styles.buttonText}>
              {authStore.getIsRegistering() ? "Register" : "Login"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => authStore.setIsRegistering(!authStore.getIsRegistering())}
            style={styles.switchButton}
          >
            <Text style={styles.switchText}>
              {authStore.getIsRegistering()
                ? "Already have an account? Login"
                : "Don't have an account? Register"}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 32,
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#444",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#f9f9f9",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: "#1a1a1a",
  },
  button: {
    backgroundColor: "#007AFF",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  switchButton: {
    marginTop: 20,
    alignItems: "center",
  },
  switchText: {
    color: "#007AFF",
    fontSize: 14,
  },
  errorText: {
    color: "#FF3B30",
    fontSize: 14,
    marginBottom: 16,
    textAlign: "center",
  },
});