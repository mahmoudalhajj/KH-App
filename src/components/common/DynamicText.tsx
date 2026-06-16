import React from "react";
import { Text, TextProps } from "react-native";
import { observer } from "mobx-react-lite";
import { uiStore } from "../../stores/UIStore";

export const DynamicText = observer(
  ({ style, children, ...props }: TextProps) => {
    return (
      <Text style={[uiStore.getTextAlign(), style]} {...props}>
        {children}
      </Text>
    );
  },
);
