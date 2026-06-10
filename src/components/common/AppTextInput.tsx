
import { TextInput, TextInputProps, StyleSheet } from "react-native";

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
        backgroundColor: "#fff",
        borderRadius: 12,
        paddingVertical: 12,
        paddingHorizontal: 16,
        marginBottom: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#ddd",
    },
});

export default AppTextInput;