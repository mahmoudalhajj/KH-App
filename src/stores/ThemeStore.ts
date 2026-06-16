import { i18nStore } from "./i18nStore";
import { Colors } from "../enums/color";
import { TextStyle } from "react-native";

class UIStore {
  getTextAlign(): TextStyle {
    return { textAlign: i18nStore.getIsRTL() ? "right" : "left" };
  }

  get labelStyle(): TextStyle {
    return {
      textAlign: i18nStore.getIsRTL() ? "right" : "left",
      fontSize: 14,
      fontWeight: "600",
      color: Colors.SECONDARY,
    };
  }

  get headerStyle(): TextStyle {
    return {
      textAlign: i18nStore.getIsRTL() ? "right" : "left",
      fontSize: 22,
      fontWeight: "bold",
      color: Colors.TEXT_PRIMARY,
    };
  }

  get inputStyle(): TextStyle {
    return {
      textAlign: i18nStore.getIsRTL() ? "right" : "left",
      fontSize: 16,
      color: Colors.TEXT_PRIMARY,
    };
  }
}

export const uiStore = new UIStore();
