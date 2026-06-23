import React from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";
import { E_COLORS } from "../../enums/color";
import { E_FONT_SIZE, E_FONT_WEIGHT, E_SPACING, E_BORDER_RADIUS, E_LAYOUT, E_UI } from "../../enums/designTokens";

interface AppButtonProps {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
}

const AppButton = ({ title, onPress, style, disabled }: AppButtonProps) => {
  return (
    <Pressable
      style={[styles.button, style, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.text, disabled && styles.disabledText]}>
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: E_COLORS.BUTTON,
    borderRadius: E_BORDER_RADIUS.L,
    paddingVertical: E_UI.INPUT_PADDING_V,
    paddingHorizontal: E_SPACING.XL,
    alignItems: E_LAYOUT.CENTER,
    justifyContent: E_LAYOUT.CENTER,
    marginVertical: E_SPACING.S,
  },

  text: {
    color: E_COLORS.BACKGROUND,
    fontWeight: E_FONT_WEIGHT.BOLD,
    fontSize: E_FONT_SIZE.L,
  },
  disabled: {
    opacity: 0.5,
  },
  disabledText: {
    opacity: 0.7,
  },
});
export default AppButton;
