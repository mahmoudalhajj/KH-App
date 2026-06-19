import React from "react";
import { SafeAreaView, StyleSheet, ViewStyle } from "react-native";
import { E_COLORS } from "../../enums/color";
import { E_LAYOUT } from "../../enums/designTokens";

interface ScreenContainerProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

const ScreenContainer = ({ children, style }: ScreenContainerProps) => (
  <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: E_LAYOUT.FLEX_1,
    backgroundColor: E_COLORS.BACKGROUND,
  },
});

export default ScreenContainer;
