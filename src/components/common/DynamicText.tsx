import React from "react";
import { Text, TextProps } from "react-native";
import { observer } from "mobx-react-lite";
import { i18nStore } from "../../stores/i18nStore";
import { uiStore } from "../../stores/UIStore";

export const DynamicText = observer(
  ({ style, children, ...props }: TextProps) => {
    const isRTL = i18nStore.getIsRTL();

    return (
      <Text style={uiStore.getTextAlign()} {...props}>
        {children}
      </Text>
    );
  },
);
