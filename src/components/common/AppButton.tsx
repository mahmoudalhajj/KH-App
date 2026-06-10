import {
    Pressable,
    Text,
    StyleSheet,
} from "react-native";
import {Colors} from "../../enums/color";
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
        backgroundColor: Colors.BUTTON,
        borderRadius: 20,
        paddingVertical: 10,
        flex: 1,
        alignItems: "center",
        marginHorizontal: 4,
    },

    text: {
        color: Colors.BACKGROUND,
        fontWeight: "600",
    },
});

export default AppButton;