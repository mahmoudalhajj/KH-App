import React from "react";
import { View, StyleSheet } from "react-native";
import { message } from "../../types/message";
import { E_COLORS } from "../../enums/color";
import { DynamicText } from "../common/DynamicText";
import { observer } from "mobx-react-lite";
import { DynamicView } from "../common/DynamicView";
import { i18nStore } from "../../stores/i18nStore";

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
            { alignSelf: isRTL ? "flex-end" : "flex-start" },
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
    width: "100%",
    marginBottom: 12,
  },
  bubble: {
    backgroundColor: E_COLORS.BUBBLE,
    padding: 12,
    borderRadius: 16,
    maxWidth: "85%",
    alignSelf: "flex-end",
  },
  text: {
    fontSize: 15,
    lineHeight: 20,
    color: E_COLORS.BACKGROUND,
  },
  time: {
    fontSize: 11,
    marginTop: 4,
    color: E_COLORS.HEADER_SUBTITLE,
  },
});

export default MessageBubble;
