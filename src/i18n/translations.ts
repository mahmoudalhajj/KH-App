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
        en: "Français",
        fr: "العربية",
        ar: "English",
    },
} as const;
