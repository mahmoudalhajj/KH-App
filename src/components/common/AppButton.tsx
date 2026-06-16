import React from "react";
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
        borderRadius: 14,
        paddingVertical: 14,
        paddingHorizontal: 20,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 8,
    },

    text: {
        color: Colors.BACKGROUND,
        fontWeight: "700",
        fontSize: 17,
    },
});
export default AppButton;
