import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { authStore } from "../stores/AuthStore";
import { cartStore } from "../stores/CartStore";
import { observer } from "mobx-react-lite";
import { E_COLORS } from "../enums/color";
import ScreenContainer from "../components/common/ScreenContainer";
import { i18nStore } from "../stores/i18nStore";
import { TranslationKey } from "../i18n/translationKeys";
import { DynamicText } from "../components/common/DynamicText";
import { DynamicView } from "../components/common/DynamicView";
import LanguageSelector from "../components/common/LanguageSelector";
import { E_ROUTE } from "../enums/routes";
import { E_ICON } from "../enums/strings";
import {
  E_FONT_SIZE,
  E_FONT_WEIGHT,
  E_SPACING,
  E_BORDER_RADIUS,
  E_BORDER_WIDTH,
  E_SHADOW,
  E_UI,
} from "../enums/designTokens";

const HomeScreenComponent = () => {
  const navigation = useNavigation();

  return (
    <ScreenContainer style={styles.content}>
      <DynamicView style={styles.heroContainer}>
        <DynamicView row style={styles.grid}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.card}
            onPress={() => navigation.navigate(E_ROUTE.CART)}
          >
            <DynamicView style={styles.iconCircle}>
              <DynamicText style={styles.iconText}>{E_ICON.CART}</DynamicText>
            </DynamicView>
            <DynamicText style={styles.cardTitle}>
              {i18nStore.translate(TranslationKey.HOME_CART)}
            </DynamicText>
            {cartStore.getTotalItems.get() > 0 && (
              <DynamicView style={styles.badge}>
                <DynamicText style={styles.badgeText}>
                  {cartStore.getTotalItems.get()}
                </DynamicText>
              </DynamicView>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.card}
            onPress={() => navigation.navigate(E_ROUTE.CHAT)}
          >
            <DynamicView style={styles.iconCircle}>
              <DynamicText style={styles.iconText}>{E_ICON.CHAT}</DynamicText>
            </DynamicView>
            <DynamicText style={styles.cardTitle}>
              {i18nStore.translate(TranslationKey.HOME_CHAT)}
            </DynamicText>
          </TouchableOpacity>
        </DynamicView>
        <DynamicText style={styles.cardTitle}>
          {i18nStore.translate(TranslationKey.HOME_DESCRIPTION)}
        </DynamicText>
        <LanguageSelector />

        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => authStore.logout()}
        >
          <DynamicText style={styles.logoutText}>
            {i18nStore.translate(TranslationKey.LOGOUT)}
          </DynamicText>
        </TouchableOpacity>
      </DynamicView>
    </ScreenContainer>
  );
};

export const HomeScreen = observer(HomeScreenComponent);

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: E_SPACING.XXL,
    justifyContent: "center",
  },
  heroContainer: {
    flex: 1,
    justifyContent: "center",
  },
  grid: {
    justifyContent: "space-between",
    marginBottom: E_SPACING.XXXXXL,
  },
  card: {
    width: E_UI.CARD_WIDTH_PERCENT,
    aspectRatio: 1,
    borderRadius: E_BORDER_RADIUS.XXXL,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: E_COLORS.SURFACE,
    borderWidth: E_BORDER_WIDTH.DEFAULT,
    borderColor: E_COLORS.BORDER,
    elevation: 2,
    shadowColor: E_COLORS.SHADOW,
    shadowOffset: { width: E_SHADOW.OFFSET_X, height: E_SHADOW.OFFSET_Y },
    shadowOpacity: E_SHADOW.OPACITY_LIGHT,
    shadowRadius: E_SHADOW.RADIUS_MD,
    position: "relative",
  },
  iconCircle: {
    width: E_UI.ICON_CIRCLE_SIZE,
    height: E_UI.ICON_CIRCLE_SIZE,
    borderRadius: E_UI.ICON_CIRCLE_RADIUS,
    backgroundColor: E_COLORS.BACKGROUND,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: E_SPACING.M,
  },
  iconText: {
    fontSize: E_FONT_SIZE.XL,
  },
  cardTitle: {
    fontSize: E_FONT_SIZE.M,
    fontWeight: E_FONT_WEIGHT.SEMI_BOLD,
    color: E_COLORS.TEXT_PRIMARY,
  },
  badge: {
    position: "absolute",
    top: E_SPACING.M,
    right: E_SPACING.M,
    backgroundColor: E_COLORS.BADGE,
    borderRadius: E_SPACING.M,
    minWidth: E_UI.BADGE_MIN_WIDTH,
    height: E_UI.BADGE_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: E_UI.BADGE_PADDING_X,
    borderWidth: E_UI.BADGE_BORDER_WIDTH,
    borderColor: E_COLORS.SURFACE,
  },
  badgeText: {
    color: E_COLORS.ON_DARK,
    fontSize: E_FONT_SIZE.XS,
    fontWeight: E_FONT_WEIGHT.BOLD,
  },
  header: {
    justifyContent: "flex-end",
    padding: E_SPACING.M,
  },
  logoutButtonTop: {
    padding: E_SPACING.M,
  },
  logoutButton: {
    alignSelf: "center",
    padding: E_SPACING.M,
  },
  logoutText: {
    color: E_COLORS.TEXT_SECONDARY,
    fontWeight: E_FONT_WEIGHT.MEDIUM,
    fontSize: E_FONT_SIZE.S,
  },
});
