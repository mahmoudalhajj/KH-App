import React from "react";
import { observer } from "mobx-react-lite";
import type { CartStore } from "../stores/CartStore";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
} from "react-native";
import AppTextInput from "../components/common/AppTextInput";
import AppButton from "../components/common/AppButton";
import { useTranslation } from "react-i18next";
import { Colors } from "../enums/color";
import ScreenContainer from "./common/ScreenContainer";

interface CartProps {
    cartStore: CartStore;
}

const CartSummary = observer(({ cartStore }: CartProps) => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        const nextLang = i18n.language === 'en' ? 'fr' : 'en';
        i18n.changeLanguage(nextLang);
    };

    return (
        <ScreenContainer>
            <ScrollView 
                contentContainerStyle={styles.scrollContent}
                keyboardShouldPersistTaps="handled"
            >
                <View style={styles.card}>
                    <Text style={styles.headerTitle}>Cart Summary</Text>
                    
                    <View style={styles.statsRow}>
                        <View style={styles.statItem}>
                            <Text style={styles.statLabel}>{t("totalItems")}</Text>
                            <Text style={styles.statValue}>{cartStore.getTotalItems()}</Text>
                        </View>
                        <View style={styles.statItem}>
                            <Text style={styles.statLabel}>{t("totalPrice")}</Text>
                            <Text style={styles.statValue}>${cartStore.getTotalPrice()}</Text>
                        </View>
                    </View>

                    <View style={styles.form}>
                        <Text style={styles.sectionLabel}>Add New Item</Text>
                        <AppTextInput
                            value={cartStore.itemName.get()}
                            onChangeText={cartStore.setItemName}
                            placeholder="Item Name"
                        />
                        <View style={styles.inputRow}>
                            <View style={{ flex: 1, marginRight: 8 }}>
                                <AppTextInput
                                    value={cartStore.itemPrice.get()}
                                    onChangeText={cartStore.setItemPrice}
                                    placeholder="Price"
                                    keyboardType="numeric"
                                />
                            </View>
                            <View style={{ flex: 1, marginLeft: 8 }}>
                                <AppTextInput
                                    value={cartStore.itemQuantity.get()}
                                    onChangeText={cartStore.setItemQuantity}
                                    placeholder="Qty"
                                    keyboardType="numeric"
                                />
                            </View>
                        </View>

                        {!!cartStore.error.get() && (
                            <Text style={styles.errorText}>{cartStore.error.get()}</Text>
                        )}

                        <AppButton
                            title="Add to Cart"
                            onPress={cartStore.addItem}
                            style={styles.addButton}
                        />
                    </View>

                    <View style={styles.divider} />

                    <View style={styles.footerButtons}>
                        <AppButton
                            title="Clear Cart"
                            onPress={cartStore.clearCart}
                            style={styles.clearButton}
                        />
                        <AppButton
                            title={i18n.language === 'en' ? "Switch to French" : "Passer en Anglais"}
                            onPress={toggleLanguage}
                            style={styles.langButton}
                        />
                    </View>
                </View>
            </ScrollView>
        </ScreenContainer>
    );
});

const styles = StyleSheet.create({
    scrollContent: {
        flexGrow: 1,
        padding: 20,
        justifyContent: 'center',
    },
    card: {
        backgroundColor: Colors.BACKGROUND,
        borderRadius: 24,
        padding: 24,
        elevation: 4,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: Colors.TEXT_PRIMARY,
        textAlign: 'center',
        marginBottom: 24,
    },
    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 32,
        backgroundColor: Colors.SURFACE,
        padding: 16,
        borderRadius: 16,
    },
    statItem: {
        alignItems: 'center',
    },
    statLabel: {
        fontSize: 12,
        color: Colors.TEXT_SECONDARY,
        marginBottom: 4,
        textTransform: 'uppercase',
    },
    statValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.BUTTON,
    },
    form: {
        marginBottom: 24,
    },
    sectionLabel: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.SECONDARY,
        marginBottom: 12,
    },
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    addButton: {
        marginTop: 8,
        borderRadius: 12,
    },
    divider: {
        height: 1,
        backgroundColor: Colors.BORDER,
        marginVertical: 24,
    },
    footerButtons: {
        gap: 12,
    },
    clearButton: {
        backgroundColor: Colors.ERROR,
        borderRadius: 12,
    },
    langButton: {
        backgroundColor: Colors.SECONDARY,
        borderRadius: 12,
    },
    errorText: {
        color: Colors.ERROR,
        fontSize: 13,
        textAlign: 'center',
        marginBottom: 12,
    },
});

export default CartSummary;
