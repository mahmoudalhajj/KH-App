import { TranslationKey } from "./translationKeys";

export type Language = "en" | "fr" | "ar";

export const translations = {
  direction: {
    ar: "rtl",
    en: "ltr",
    fr: "ltr",
  },

  [TranslationKey.CART_SUMMARY]: {
    en: "Cart Summary",
    fr: "Résumé du panier",
    ar: "ملخص السلة",
  },

  [TranslationKey.TOTAL_ITEMS]: {
    en: "Total Items",
    fr: "Articles totaux",
    ar: "إجمالي العناصر",
  },

  [TranslationKey.TOTAL_PRICE]: {
    en: "Total Price",
    fr: "Prix total",
    ar: "السعر الإجمالي",
  },

  [TranslationKey.ADD_NEW_ITEM]: {
    en: "Add New Item",
    fr: "Ajouter un article",
    ar: "إضافة عنصر جديد",
  },

  [TranslationKey.ITEM_NAME]: {
    en: "Item Name",
    fr: "Nom de l'article",
    ar: "اسم العنصر",
  },

  [TranslationKey.PRICE]: {
    en: "Price",
    fr: "Prix",
    ar: "السعر",
  },

  [TranslationKey.QUANTITY]: {
    en: "Quantity",
    fr: "Quantité",
    ar: "الكمية",
  },

  [TranslationKey.ADD_TO_CART]: {
    en: "Add to Cart",
    fr: "Ajouter au panier",
    ar: "أضف إلى السلة",
  },

  [TranslationKey.CLEAR_CART]: {
    en: "Clear Cart",
    fr: "Vider le panier",
    ar: "إفراغ السلة",
  },

  [TranslationKey.CHANGE_LANGUAGE]: {
    en: "Language",
    fr: "Langue",
    ar: "اللغة",
  },

  [TranslationKey.CHAT_TITLE]: {
    en: "Chat",
    fr: "Discuter",
    ar: "المحادثة",
  },

  [TranslationKey.CHAT_SUBTITLE]: {
    en: "Type a message and press send.",
    fr: "Tapez un message et appuyez sur envoyer.",
    ar: "اكتب رسالة واضغط على إرسال.",
  },

  [TranslationKey.CHAT_CLEAR]: {
    en: "Clear",
    fr: "Effacer",
    ar: "مسح",
  },

  [TranslationKey.CHAT_PLACEHOLDER]: {
    en: "Write a message...",
    fr: "Écrire un message...",
    ar: "اكتب رسالة...",
  },

  [TranslationKey.CHAT_SEND]: {
    en: "Send",
    fr: "Envoyer",
    ar: "إرسال",
  },

  [TranslationKey.CHAT_EMPTY]: {
    en: "No messages yet, start chatting!",
    fr: "Pas encore de messages, commencez à discuter!",
    ar: "لا توجد رسائل بعد، ابدأ المحادثة!",
  },

  [TranslationKey.LOGOUT]: {
    en: "Logout",
    fr: "Se déconnecter",
    ar: "تسجيل الخروج",
  },

  [TranslationKey.HOME_CART]: {
    en: "Cart",
    fr: "Panier",
    ar: "السلة",
  },

  [TranslationKey.HOME_CHAT]: {
    en: "Chat",
    fr: "Discuter",
    ar: "المحادثة",
  },
  [TranslationKey.HOME_DESCRIPTION]: {
    en: "Use the navigation bar to access the cart, chat.",
    fr: "Naviguez à l’aide de la barre de navigation pour consulter le panier, le chat.",
    ar: "تنقّل عبر شريط التنقل للاطلاع على السلة والدردشة.",
  },
};
