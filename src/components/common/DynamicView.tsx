import React from "react";
import { View, ViewProps, ViewStyle } from "react-native";
import { observer } from "mobx-react-lite";
import { i18nStore } from "../../stores/i18nStore";

interface Props extends ViewProps {
  row?: boolean;
  style: ViewStyle;
}

export const DynamicView = observer(
  ({ style, row, children, ...props }: Props) => {
    const isRTL = i18nStore.getIsRTL();

    const combinedStyle: ViewStyle = {
      ...style,
      flexDirection: isRTL ? "row-reverse" : "row",
    };

    return (
      <View style={combinedStyle} {...props}>
        {children}
      </View>
    );
  },
);
