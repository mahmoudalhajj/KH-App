import React from "react";
import { Text, TextProps } from "react-native";
import { observer } from "mobx-react-lite";
import { themeStore } from "../../stores/ThemeStore";

export const DynamicText = observer(
  ({ style, children, ...props }: TextProps) => {
    return (
      <Text style={[themeStore.getTextAlign(), style]} {...props}>
        {children}
      </Text>
    );
  },
);
