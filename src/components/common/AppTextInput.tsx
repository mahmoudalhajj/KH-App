import React from "react";
import { TextInput, TextInputProps, StyleSheet } from "react-native";
import { Colors } from "../../enums/color";
import { observer } from "mobx-react-lite";
import { uiStore } from "../../stores/ThemeStore";

interface AppTextInputProps extends TextInputProps {}

const AppTextInput = observer((props: AppTextInputProps) => {
  return (
    <TextInput
      {...props}
      style={[styles.input, uiStore.getInputStyle(), props.style]}
      placeholderTextColor="#888"
      autoCapitalize="none"
    />
  );
});

const styles = StyleSheet.create({
  input: {
    width: "100%",
    backgroundColor: Colors.BACKGROUND,
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 18,
    marginBottom: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: Colors.TEXT_INPUT_BORDER,
  },
});
export default AppTextInput;
