import React from 'react';
import { View, ViewProps} from 'react-native';
import { observer } from 'mobx-react-lite';
import { i18nStore } from '../../stores/i18nStore'

interface Props extends ViewProps{
  row?: boolean;
}

  export const DynamicView = observer(({ style, row, children, ...props }: Props) => {
  const isRTL = i18nStore.getIsRTL();

  const combinedStyle = [
    style,
    { flexDirection: isRTL ? 'row-reverse' : 'row' }
  ];

  return (
    <View 
      style={[row && { flexDirection: isRTL ? 'row-reverse' : 'row' }, style]} 
      {...props}
    >
      {children}
    </View>
  );
});
