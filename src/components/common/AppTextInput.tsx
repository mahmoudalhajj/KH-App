import { TextInput, TextInputProps, StyleSheet } from "react-native";
import { E_COLORS } from "../../enums/color";
import { observer } from "mobx-react-lite";
import { themeStore } from "../../stores/ThemeStore";
import {
  E_FONT_SIZE,
  E_SPACING,
  E_BORDER_RADIUS,
  E_BORDER_WIDTH,
  E_UI_STRING,
} from "../../enums/designTokens";

interface AppTextInputProps extends TextInputProps {
  ref?: React.Ref<TextInput>;
}

const AppTextInput = observer(({ ref, ...props }: AppTextInputProps) => {
  return (
    <TextInput
      ref={ref}
      {...props}
      style={[styles.input, themeStore.getTextAlign(), props.style]}
      placeholderTextColor={E_COLORS.PLACEHOLDER}
      autoCapitalize={props.autoCapitalize ?? "none"}
      returnKeyType={props.returnKeyType ?? "done"}
      textContentType={props.textContentType}
      importantForAutofill={props.importantForAutofill}
      autoComplete={props.autoComplete}
    />
  );
});
const styles = StyleSheet.create({
  input: {
    width: E_UI_STRING.FULL_WIDTH,
    backgroundColor: E_COLORS.BACKGROUND,
    borderRadius: E_BORDER_RADIUS.L,
    paddingVertical: E_SPACING.S + 6,
    paddingHorizontal: E_SPACING.S + 10,
    marginBottom: E_SPACING.M,
    fontSize: E_FONT_SIZE.M,
    color: E_COLORS.TEXT_PRIMARY,
    borderWidth: E_BORDER_WIDTH.DEFAULT,
    borderColor: E_COLORS.TEXT_INPUT_BORDER,
  },
});
export default AppTextInput;
