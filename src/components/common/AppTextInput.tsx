
import { TextInput, TextInputProps, StyleSheet } from "react-native";
import {Colors} from "../../enums/color";
interface AppTextInputProps extends TextInputProps {}

const AppTextInput = (props: AppTextInputProps) => {
    return (
        <TextInput
            {...props}
            style={[styles.input, props.style]}
            placeholderTextColor="#888"
        />
    );
};

const styles = StyleSheet.create({
    input: {
        width: "100%",
        backgroundColor: Colors.BACKGROUND,
        borderRadius: 12,
        paddingVertical: 12,
        paddingHorizontal: 16,
        marginBottom: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor: Colors.TEXT_INPUT_BORDER,
    },
});

export default AppTextInput;