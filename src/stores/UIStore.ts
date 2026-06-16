import { makeAutoObservable } from "mobx";
import { i18nStore } from "./i18nStore";
import { Colors } from "../enums/color";
import { TextStyle } from "react-native";

class UIStore {
  getLabelStyle(): TextStyle {
    const isRTL = i18nStore.getIsRTL();
    return {
      textAlign: isRTL ? "right" : "left",
      fontSize: 14,
      fontWeight: 600,
      color: Colors.SECONDARY,
    };
  }

  getTextAlign(): TextStyle {
    const isRTL = i18nStore.getIsRTL();
    return {
      textAlign: isRTL ? "right" : "left",
    };
  }
}

export const uiStore = new UIStore();
