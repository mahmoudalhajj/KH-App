import React from "react";
import { View, StyleSheet } from "react-native";
import { message } from "../../types/message";
import { E_COLORS } from "../../enums/color";
import { DynamicText } from "../common/DynamicText";
import { observer } from "mobx-react-lite";
import { DynamicView } from "../common/DynamicView";
import { i18nStore } from "../../stores/i18nStore";
import {
  E_FONT_SIZE,
  E_SPACING,
  E_BORDER_RADIUS,
  E_UI,
  E_UI_STRING,
  E_LAYOUT,
} from "../../enums/designTokens";

interface MessageBubbleProps {
  message: message;
  formattedTime: string;
}

const MessageBubble = observer(
  ({ message, formattedTime }: MessageBubbleProps) => {
    const isRTL = i18nStore.getIsRTL();

    return (
      <View style={styles.wrapper}>
        <View
          style={[
            styles.bubble,
            { alignSelf: isRTL ? E_LAYOUT.FLEX_END : E_LAYOUT.FLEX_START },
          ]}
        >
          <DynamicText style={styles.text}>{message.text}</DynamicText>
          <DynamicText style={styles.time}>{formattedTime}</DynamicText>
        </View>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  wrapper: {
    width: E_UI_STRING.FULL_WIDTH,
    marginBottom: E_SPACING.M,
  },
  bubble: {
    backgroundColor: E_COLORS.BUBBLE,
    padding: E_SPACING.M,
    borderRadius: E_BORDER_RADIUS.XXL,
    maxWidth: E_UI_STRING.BUBBLE_MAX_WIDTH_PERCENT,
    alignSelf: E_LAYOUT.FLEX_END,
  },
  text: {
    fontSize: E_FONT_SIZE.M - 1,
    lineHeight: E_UI.LINE_HEIGHT,
    color: E_COLORS.BACKGROUND,
  },
  time: {
    fontSize: E_FONT_SIZE.XS,
    marginTop: E_SPACING.XS,
    color: E_COLORS.HEADER_SUBTITLE,
  },
});

export default MessageBubble;
