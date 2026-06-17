import React from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { observer } from "mobx-react-lite";
import { authStore } from "../stores/AuthStore";
import { Colors } from "../enums/color";
import AppTextInput from "../components/common/AppTextInput";
import AppButton from "../components/common/AppButton";

export const AuthScreen = observer(() => {
  const isRegistering = authStore.isRegistering.get();

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.keyboardView}>
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.card}>
            <Text style={styles.title}>
              {isRegistering ? "Create Account" : "Welcome Back"}
            </Text>
            <Text style={styles.subtitle}>
              {isRegistering
                ? "Sign up to get started"
                : "Login to your account"}
            </Text>

            {isRegistering && (
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Full Name</Text>
                <AppTextInput
                  placeholder="John Doe"
                  value={authStore.name.get()}
                  onChangeText={(text) => authStore.setName(text)}
                />
              </View>
            )}

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email Address</Text>
              <AppTextInput
                placeholder="email@example.com"
                value={authStore.email.get()}
                onChangeText={(text) => authStore.setEmail(text)}
                keyboardType="email-address"
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Password</Text>
              <AppTextInput
                placeholder="••••••••"
                value={authStore.password.get()}
                onChangeText={(text) => authStore.setPassword(text)}
                secureTextEntry
              />
            </View>

            {!!authStore.error.get() && (
              <Text style={styles.errorText}>{authStore.error.get()}</Text>
            )}

            <AppButton 
              title={isRegistering ? "Register" : "Login"}
              onPress={authStore.handleAuth}
              style={styles.mainButton}
            />

            <TouchableOpacity
              onPress={() => authStore.setIsRegistering(!isRegistering)}
              style={styles.switchButton}
            >
              <Text style={styles.switchText}>
                {isRegistering
                  ? "Already have an account? Login"
                  : "Don't have an account? Register"}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
  },
  keyboardView: {
    flex: 1,
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
    color: Colors.SECONDARY,
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
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#444",
    marginBottom: 8,
  },
  mainButton: {
    marginTop: 10,
    borderRadius: 12,
  },
  switchButton: {
    marginTop: 20,
    alignItems: "center",
    padding: 10,
  },
  switchText: {
    color: Colors.BUTTON,
    fontSize: 14,
    fontWeight: "600",
  },
  errorText: {
    color: Colors.ERROR,
    fontSize: 14,
    marginBottom: 16,
    textAlign: "center",
  },
});
