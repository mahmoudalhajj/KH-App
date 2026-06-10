import {
    Pressable,
    Text,
    StyleSheet,
} from "react-native";

interface AppButtonProps {
    title: string;
    onPress: () => void;
}

const AppButton = ({ title, onPress }: AppButtonProps) => {
    return (
        <Pressable
            style={styles.button}
            onPress={onPress}
        >
            <Text style={styles.text}>
                {title}
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#007AFF",
        borderRadius: 20,
        paddingVertical: 10,
        flex: 1,
        alignItems: "center",
        marginHorizontal: 4,
    },

    text: {
        color: "#fff",
        fontWeight: "600",
    },
});

export default AppButton;