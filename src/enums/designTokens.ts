export enum E_AUTH_CONSTRAINTS {
  MAX_EMAIL_LENGTH = 254,
  MIN_PASSWORD_LENGTH = 6,
  MAX_PASSWORD_LENGTH = 128,
  MAX_NAME_LENGTH = 100,
}

export enum E_CART_CONSTRAINTS {
  MAX_NAME_LENGTH = 50,
  MAX_PRICE = 999999,
  MAX_QUANTITY = 99,
}

export enum E_FONT_SIZE {
  XS = 11,
  S = 14,
  SEND = 15,
  M = 16,
  L = 17,
  XL = 22,
  XXL = 28,
}

export enum E_FONT_WEIGHT {
  NORMAL = "normal",
  MEDIUM = "500",
  SEMI_BOLD = "600",
  BOLD = "700",
  EXTRA_BOLD = "800",
}

export enum E_SPACING {
  XS = 4,
  S = 8,
  M = 12,
  L = 16,
  XL = 20,
  XXL = 24,
  XXXL = 32,
  XXXXL = 40,
  XXXXXL = 48,
}

export enum E_BORDER_RADIUS {
  S = 10,
  M = 12,
  L = 14,
  XL = 20,
  XXL = 24,
  XXXL = 32,
}

export enum E_BORDER_WIDTH {
  DEFAULT = 1,
}

export enum E_ELEVATION {
  DEFAULT = 5,
}

export enum E_SHADOW {
  OFFSET_X = 0,
  OFFSET_Y = 2,
  OPACITY_LIGHT = 0.05,
  OPACITY_DEFAULT = 0.1,
  RADIUS_SM = 8,
  RADIUS_MD = 10,
}

export enum E_UI {
  ICON_CIRCLE_SIZE = 50,
  ICON_CIRCLE_RADIUS = 25,
  AVATAR_SIZE = 40,
  AVATAR_RADIUS = 20,
  CHECKMARK_SIZE = 10,
  CHECKMARK_RADIUS = 5,
  BADGE_MIN_WIDTH = 24,
  BADGE_HEIGHT = 24,
  BADGE_PADDING_X = 6,
  BADGE_BORDER_WIDTH = 2,
  CHAT_INPUT_MAX_HEIGHT = 120,
  SEND_BUTTON_MIN_WIDTH = 90,
  LINE_HEIGHT = 20,
  INPUT_PADDING_V = 14,
  INPUT_PADDING_H = 18,
  COMPACT_PADDING = 10,
  TIGHT_PADDING_V = 6,
  SEND_BUTTON_PADDING_H = 22,
  KEYBOARD_VERTICAL_OFFSET = 0,
}

export const E_UI_STRING = {
  CARD_WIDTH_PERCENT: "46%",
  BUBBLE_MAX_WIDTH_PERCENT: "85%",
  FULL_WIDTH: "100%",
} as const;

export const E_LAYOUT = {
  FLEX_1: 1,
  FLEX_2: 2,
  CENTER: "center",
  FLEX_START: "flex-start",
  FLEX_END: "flex-end",
  SPACE_BETWEEN: "space-between",
  SPACE_AROUND: "space-around",
  SPACE_EVENLY: "space-evenly",
  STRETCH: "stretch",
  RELATIVE: "relative",
  ABSOLUTE: "absolute",
  AUTO: "auto",
} as const;

export const E_KEYBOARD = {
  BEHAVIOR_IOS: "padding" as const,
  BEHAVIOR_ANDROID: "height" as const,
} as const;
