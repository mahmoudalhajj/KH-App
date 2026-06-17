import { i18nStore } from "./i18nStore";
import { E_COLORS } from "../enums/color";
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
      color: E_COLORS.SECONDARY,
    };
  };
}

export const uiStore = new UIStore();
