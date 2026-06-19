import React from "react";
import { View, ViewProps } from "react-native";
import { observer } from "mobx-react-lite";
import { i18nStore } from "../../stores/i18nStore";
import { E_FLEX_DIRECTION } from "../../enums/direction";

interface Props extends ViewProps {
  row?: boolean;
}

export const DynamicView = observer(
  ({ style, row, children, ...props }: Props) => {
    const isRTL = i18nStore.getIsRTL();

    return (
      <View
        style={[
          row && {
            flexDirection: isRTL
              ? E_FLEX_DIRECTION.ROW_REVERSE
              : E_FLEX_DIRECTION.ROW,
          },
          style,
        ]}
        {...props}
      >
        {children}
      </View>
    );
  },
);
