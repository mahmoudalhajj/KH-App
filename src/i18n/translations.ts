import { TranslationKey } from "./translationKeys";
import { E_TEXT_DIRECTION } from "../enums/direction";

export type Language = "en" | "fr" | "ar";

export const translations = {
  direction: {
    ar: E_TEXT_DIRECTION.RTL,
    en: E_TEXT_DIRECTION.LTR,
    fr: E_TEXT_DIRECTION.LTR,
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
    fr: "Naviguez à l'aide de la barre de navigation pour consulter le panier, le chat.",
    ar: "تنقّل عبر شريط التنقل للاطلاع على السلة والدردشة.",
  },

  [TranslationKey.CREATE_ACCOUNT]: {
    en: "Create Account",
    fr: "Créer un compte",
    ar: "إنشاء حساب",
  },

  [TranslationKey.WELCOME_BACK]: {
    en: "Welcome Back",
    fr: "Bon retour",
    ar: "مرحباً بعودتك",
  },

  [TranslationKey.SIGN_UP_SUBTITLE]: {
    en: "Sign up to get started",
    fr: "Inscrivez-vous pour commencer",
    ar: "سجّل للبدء",
  },

  [TranslationKey.LOGIN_SUBTITLE]: {
    en: "Login to your account",
    fr: "Connectez-vous à votre compte",
    ar: "سجّل الدخول إلى حسابك",
  },

  [TranslationKey.REGISTER]: {
    en: "Register",
    fr: "S'inscrire",
    ar: "تسجيل",
  },

  [TranslationKey.LOGIN]: {
    en: "Login",
    fr: "Connexion",
    ar: "تسجيل الدخول",
  },

  [TranslationKey.SWITCH_TO_LOGIN]: {
    en: "Already have an account? Login",
    fr: "Vous avez déjà un compte? Connectez-vous",
    ar: "لديك حساب بالفعل؟ تسجّل الدخول",
  },

  [TranslationKey.SWITCH_TO_REGISTER]: {
    en: "Don't have an account? Register",
    fr: "Vous n'avez pas de compte? Inscrivez-vous",
    ar: "ليس لديك حساب؟ سجّل",
  },

  [TranslationKey.FULL_NAME]: {
    en: "Full Name",
    fr: "Nom complet",
    ar: "الاسم الكامل",
  },

  [TranslationKey.EMAIL_ADDRESS]: {
    en: "Email Address",
    fr: "Adresse e-mail",
    ar: "البريد الإلكتروني",
  },

  [TranslationKey.PASSWORD_LABEL]: {
    en: "Password",
    fr: "Mot de passe",
    ar: "كلمة المرور",
  },
};
