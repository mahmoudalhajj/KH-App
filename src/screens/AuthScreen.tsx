import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { observer } from "mobx-react-lite";
import { authStore } from "../stores/AuthStore";
import { E_COLORS } from "../enums/color";
import AppTextInput from "../components/common/AppTextInput";
import AppButton from "../components/common/AppButton";
import { i18nStore } from "../stores/i18nStore";
import { TranslationKey } from "../i18n/translationKeys";
import { E_PLACEHOLDER } from "../enums/strings";
import { E_TEXT_ALIGN } from "../enums/direction";
import {
  E_FONT_SIZE,
  E_FONT_WEIGHT,
  E_SPACING,
  E_BORDER_RADIUS,
  E_SHADOW,
  E_ELEVATION,
  E_LAYOUT,
  E_KEYBOARD,
} from "../enums/designTokens";
import { SafeAreaView } from "react-native-safe-area-context";
import { E_PLATFORMS } from "../enums/platforms";

export const AuthScreen = observer(() => {
  const isRegistering = authStore.isRegistering.get();

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={
          Platform.OS === E_PLATFORMS.IOS
            ? E_KEYBOARD.BEHAVIOR_IOS
            : E_KEYBOARD.BEHAVIOR_ANDROID
        }
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.card}>
            <Text style={styles.title}>
              {isRegistering
                ? i18nStore.translate(TranslationKey.CREATE_ACCOUNT)
                : i18nStore.translate(TranslationKey.WELCOME_BACK)}
            </Text>
            <Text style={styles.subtitle}>
              {isRegistering
                ? i18nStore.translate(TranslationKey.SIGN_UP_SUBTITLE)
                : i18nStore.translate(TranslationKey.LOGIN_SUBTITLE)}
            </Text>

            {isRegistering && (
              <View style={styles.inputContainer}>
                <Text style={styles.label}>
                  {i18nStore.translate(TranslationKey.FULL_NAME)}
                </Text>
                <AppTextInput
                  placeholder={E_PLACEHOLDER.NAME}
                  value={authStore.name.get()}
                  onChangeText={(text) => authStore.setName(text)}
                  returnKeyType="next"
                  autoComplete="name"
                  textContentType="name"
                  importantForAutofill="yes"
                />
              </View>
            )}

            <View style={styles.inputContainer}>
              <Text style={styles.label}>
                {i18nStore.translate(TranslationKey.EMAIL_ADDRESS)}
              </Text>
              <AppTextInput
                placeholder={E_PLACEHOLDER.EMAIL}
                value={authStore.email.get()}
                onChangeText={(text) => authStore.setEmail(text)}
                keyboardType="email-address"
                returnKeyType="next"
                autoComplete="email"
                textContentType="emailAddress"
                importantForAutofill="yes"
                autoCorrect={false}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>
                {i18nStore.translate(TranslationKey.PASSWORD_LABEL)}
              </Text>
              <AppTextInput
                placeholder={E_PLACEHOLDER.PASSWORD}
                value={authStore.password.get()}
                onChangeText={(text) => authStore.setPassword(text)}
                secureTextEntry
                returnKeyType="done"
                autoComplete="password"
                textContentType="password"
                importantForAutofill="yes"
              />
            </View>

            {!!authStore.error.get() && (
              <Text style={styles.errorText}>
                {i18nStore.translate(authStore.error.get() as TranslationKey)}
              </Text>
            )}

            <AppButton
              title={
                isRegistering
                  ? i18nStore.translate(TranslationKey.REGISTER)
                  : i18nStore.translate(TranslationKey.LOGIN)
              }
              onPress={authStore.handleAuth}
              disabled={authStore.isLoading.get()}
              style={styles.mainButton}
            />

            <TouchableOpacity
              onPress={() => authStore.setIsRegistering(!isRegistering)}
              style={styles.switchButton}
            >
              <Text style={styles.switchText}>
                {isRegistering
                  ? i18nStore.translate(TranslationKey.SWITCH_TO_LOGIN)
                  : i18nStore.translate(TranslationKey.SWITCH_TO_REGISTER)}
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
    flex: E_LAYOUT.FLEX_1,
    backgroundColor: E_COLORS.BACKGROUND,
  },
  keyboardView: {
    flex: E_LAYOUT.FLEX_1,
  },
  scrollContent: {
    flexGrow: E_LAYOUT.FLEX_1,
    justifyContent: E_LAYOUT.CENTER,
    padding: E_SPACING.XL,
  },
  card: {
    backgroundColor: E_COLORS.BACKGROUND,
    borderRadius: E_BORDER_RADIUS.XXL,
    padding: E_SPACING.XXL,
    shadowColor: E_COLORS.SHADOW,
    shadowOffset: { width: E_SHADOW.OFFSET_X, height: E_SHADOW.OFFSET_Y },
    shadowOpacity: E_SHADOW.OPACITY_DEFAULT,
    shadowRadius: E_SHADOW.RADIUS_SM,
    elevation: E_ELEVATION.DEFAULT,
  },
  title: {
    fontSize: E_FONT_SIZE.XXL,
    fontWeight: E_FONT_WEIGHT.BOLD,
    color: E_COLORS.SECONDARY,
    marginBottom: E_SPACING.S,
    textAlign: E_TEXT_ALIGN.CENTER,
  },
  subtitle: {
    fontSize: E_FONT_SIZE.M,
    color: E_COLORS.TEXT_MUTED,
    marginBottom: E_SPACING.XXL,
    textAlign: E_TEXT_ALIGN.CENTER,
  },
  inputContainer: {
    marginBottom: E_SPACING.L,
  },
  label: {
    fontSize: E_FONT_SIZE.S,
    fontWeight: E_FONT_WEIGHT.SEMI_BOLD,
    color: E_COLORS.TEXT_LABEL,
    marginBottom: E_SPACING.S,
  },
  mainButton: {
    marginTop: E_SPACING.M - 2,
    borderRadius: E_BORDER_RADIUS.M,
  },
  switchButton: {
    marginTop: E_SPACING.XL,
    alignItems: E_LAYOUT.CENTER,
    padding: E_SPACING.M - 2,
  },
  switchText: {
    color: E_COLORS.BUTTON,
    fontSize: E_FONT_SIZE.S,
    fontWeight: E_FONT_WEIGHT.SEMI_BOLD,
  },
  errorText: {
    color: E_COLORS.ERROR,
    fontSize: E_FONT_SIZE.S,
    marginBottom: E_SPACING.L,
    textAlign: E_TEXT_ALIGN.CENTER,
  },
});
