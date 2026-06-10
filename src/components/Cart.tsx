import { observer } from "mobx-react-lite";
import type { CartStore } from "../stores/CartStore";
import {
    View,
    Text,
    StyleSheet,
} from "react-native";
import AppTextInput from "./common/AppTextInput";
import AppButton from "./common/AppButton";


interface CartProps {
    cartStore: CartStore;
}

const CartSummary = observer(({ cartStore }: CartProps) => {

    return (
        <View style={styles.container}>
            <Text style={styles.label}>
                Total Items: {cartStore.getTotalItems()}
            </Text>

            <Text style={styles.label}>
                Total Price: ${cartStore.getTotalPrice()}
            </Text>

 
            <AppTextInput
                    value={cartStore.itemName.get()}
                    onChangeText={cartStore.setItemName}
                    placeholder="Item Name"
                />
                <AppTextInput
                    value={cartStore.itemPrice.get()}
                    onChangeText={cartStore.setItemPrice}
                    placeholder="Price"
                    keyboardType="numeric"
                /> 
                <AppTextInput
                    value={cartStore.itemQuantity.get()}
                    onChangeText={cartStore.setItemQuantity}
                    placeholder="Quantity"
                    keyboardType="numeric"
                />

            {!!cartStore.error.get() && (
                <Text style={styles.error}>
                    {cartStore.error.get()}
                </Text>
            )}

            <View style={styles.buttonRow}>
                        <AppButton
                        title="Clear Cart"
                        onPress={cartStore.clearCart}
                    />
            </View>
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: "#f8f8f8",
        borderRadius: 40,
        alignItems: "center",
    },

    label: {
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 12,
    },

    error: {
        color: "red",
        marginBottom: 12,
    },

    buttonRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginTop: 12,
    },
});

export default CartSummary;