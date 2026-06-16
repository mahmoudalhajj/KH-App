import React from "react";
import { SafeAreaView, StyleSheet, ViewStyle, StatusBar } from "react-native";
import { Colors } from "../../enums/color";
interface ScreenContainerProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

const ScreenContainer = ({ children, style }: ScreenContainerProps) => (
  <SafeAreaView style={[styles.container, style]}>
    <StatusBar barStyle="dark-content" backgroundColor={Colors.BACKGROUND} />
    {children}
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
  },
});

export default ScreenContainer;
