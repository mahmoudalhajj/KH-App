import { i18nStore } from "./i18nStore";
import { Colors } from "../enums/color";
import { TextStyle } from "react-native";

class UIStore {
  getTextAlign = (): TextStyle => {
    return { textAlign: i18nStore.getIsRTL() ? "right" : "left" };
  };

  getLabelStyle = (): TextStyle => {
    return {
      ...this.getTextAlign(),
      fontSize: 14,
      fontWeight: "600",
      color: Colors.SECONDARY,
    };
  };

  getHeaderStyle = (): TextStyle => {
    return {
      ...this.getTextAlign(),
      fontSize: 22,
      fontWeight: "bold",
      color: Colors.TEXT_PRIMARY,
    };
  };

  getInputStyle = (): TextStyle => {
    return {
      fontSize: 16,
      color: Colors.TEXT_PRIMARY,
      ...this.getTextAlign(),
    };
  };
}

export const uiStore = new UIStore();
