import { i18nStore } from "./i18nStore";
import { E_COLORS } from "../enums/color";
import { TextStyle } from "react-native";
import { E_TEXT_ALIGN } from "../enums/direction";
import { E_FONT_SIZE, E_FONT_WEIGHT } from "../enums/designTokens";

class ThemeStore {
  getTextAlign = (): TextStyle => {
    return {
      textAlign: i18nStore.getIsRTL() ? E_TEXT_ALIGN.RIGHT : E_TEXT_ALIGN.LEFT,
    };
  };

  getLabelStyle = (): TextStyle => {
    return {
      ...this.getTextAlign(),
      fontSize: E_FONT_SIZE.S,
      fontWeight: E_FONT_WEIGHT.SEMI_BOLD,
      color: E_COLORS.SECONDARY,
    };
  };
}

export const themeStore = new ThemeStore();
