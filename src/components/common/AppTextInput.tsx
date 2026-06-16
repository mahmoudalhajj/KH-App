import React from "react";
import { TextInput, TextInputProps, StyleSheet } from "react-native";
import {Colors} from "../../enums/color";
import { observer } from "mobx-react-lite";
import { i18nStore } from "../../stores/i18nStore";


interface AppTextInputProps extends TextInputProps {}

const AppTextInput = observer((props: AppTextInputProps) => {
  const isRTL = i18nStore.getIsRTL();

  return (
    <TextInput
      {...props}
      style={[
        styles.input,
        { textAlign: isRTL ? "right" : "left" },
        props.style,
      ]}
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
