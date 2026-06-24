import React from "react";
import { StyleSheet, ViewStyle } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { E_COLORS } from "../../enums/color";
import { E_LAYOUT, E_KEYBOARD, E_UI } from "../../enums/designTokens";

interface ScreenContainerProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

const ScreenContainer = ({ children, style }: ScreenContainerProps) => (
  <SafeAreaView style={[styles.container, style]}>
    <KeyboardAvoidingView
      behavior={E_KEYBOARD.BEHAVIOR_IOS}
      style={styles.keyboardView}
      keyboardVerticalOffset={E_UI.KEYBOARD_VERTICAL_OFFSET}
    >
      {children}
    </KeyboardAvoidingView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  keyboardView: {
    flex: E_LAYOUT.FLEX_1,
  },
  container: {
    flex: E_LAYOUT.FLEX_1,
    backgroundColor: E_COLORS.BACKGROUND,
  },
});

export default ScreenContainer;
