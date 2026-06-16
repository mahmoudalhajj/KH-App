import {
  Pressable,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";
import { Colors } from "../../enums/color";

interface AppButtonProps {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const AppButton = ({ title, onPress, style }: AppButtonProps) => {
  return (
    <Pressable style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.BUTTON,
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: Colors.BACKGROUND,
    fontWeight: "600",
    fontSize: 16,
  },
});

export default AppButton;
