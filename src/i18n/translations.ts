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

  [TranslationKey.CLEAR_CART_TITLE]: {
    en: "Clear Cart",
    fr: "Vider le panier",
    ar: "إفراغ السلة",
  },

  [TranslationKey.CLEAR_CART_CONFIRM]: {
    en: "Are you sure? This will remove all items.",
    fr: "Êtes-vous sûr ? Cela supprimera tous les articles.",
    ar: "هل أنت متأكد؟ سيتم حذف جميع العناصر.",
  },

  [TranslationKey.CANCEL]: {
    en: "Cancel",
    fr: "Annuler",
    ar: "إلغاء",
  },

  [TranslationKey.ERROR_INVALID_CREDENTIALS]: {
    en: "Invalid Email/Password",
    fr: "Email/Mot de passe invalide",
    ar: "البريد الإلكتروني أو كلمة المرور غير صحيحة",
  },

  [TranslationKey.ERROR_ALL_FIELDS_REQUIRED]: {
    en: "All fields are required.",
    fr: "Tous les champs sont obligatoires.",
    ar: "جميع الحقول مطلوبة.",
  },

  [TranslationKey.ERROR_AUTH_EMAIL_TOO_LONG]: {
    en: "Email address is too long.",
    fr: "L'adresse e-mail est trop longue.",
    ar: "البريد الإلكتروني طويل جداً.",
  },

  [TranslationKey.ERROR_AUTH_INVALID_EMAIL]: {
    en: "Please enter a valid email address.",
    fr: "Veuillez entrer une adresse e-mail valide.",
    ar: "يرجى إدخال بريد إلكتروني صحيح.",
  },

  [TranslationKey.ERROR_AUTH_PASSWORD_TOO_LONG]: {
    en: "Password is too long.",
    fr: "Le mot de passe est trop long.",
    ar: "كلمة المرور طويلة جداً.",
  },

  [TranslationKey.ERROR_AUTH_PASSWORD_TOO_SHORT]: {
    en: "Password must be at least 6 characters.",
    fr: "Le mot de passe doit contenir au moins 6 caractères.",
    ar: "يجب أن تكون كلمة المرور 6 أحرف على الأقل.",
  },

  [TranslationKey.ERROR_AUTH_NAME_TOO_LONG]: {
    en: "Name must be 100 characters or fewer.",
    fr: "Le nom doit contenir 100 caractères ou moins.",
    ar: "يجب ألا يتجاوز الاسم 100 حرف.",
  },

  [TranslationKey.ERROR_CART_ALL_VALUES_REQUIRED]: {
    en: "All values required.",
    fr: "Toutes les valeurs sont requises.",
    ar: "جميع القيم مطلوبة.",
  },

  [TranslationKey.ERROR_CART_INVALID_PRICE_QUANTITY]: {
    en: "Price and quantity must be greater than zero.",
    fr: "Le prix et la quantité doivent être supérieurs à zéro.",
    ar: "يجب أن يكون السعر والكمية أكبر من صفر.",
  },

  [TranslationKey.ERROR_CART_INVALID_VALUE]: {
    en: "Please enter a valid value.",
    fr: "Veuillez entrer une valeur valide.",
    ar: "يرجى إدخال قيمة صحيحة.",
  },

  [TranslationKey.ERROR_CART_NAME_TOO_LONG]: {
    en: "Item name must be 50 characters or fewer.",
    fr: "Le nom de l'article doit contenir 50 caractères ou moins.",
    ar: "يجب ألا يتجاوز اسم العنصر 50 حرفاً.",
  },

  [TranslationKey.ERROR_CART_PRICE_TOO_HIGH]: {
    en: "Price cannot exceed 999,999.",
    fr: "Le prix ne peut pas dépasser 999 999.",
    ar: "لا يمكن أن يتجاوز السعر 999,999.",
  },

  [TranslationKey.ERROR_CART_QUANTITY_TOO_HIGH]: {
    en: "Quantity cannot exceed 99.",
    fr: "La quantité ne peut pas dépasser 99.",
    ar: "لا يمكن أن تتجاوز الكمية 99.",
  },

  [TranslationKey.ERROR_CART_QUANTITY_MIN]: {
    en: "Quantity must be at least 1.",
    fr: "La quantité doit être d'au moins 1.",
    ar: "يجب أن تكون الكمية 1 على الأقل.",
  },
};
