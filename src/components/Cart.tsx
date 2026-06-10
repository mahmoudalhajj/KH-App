import { observer } from "mobx-react-lite";
import type { CartStore } from "../stores/CartStore";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Pressable,
    TouchableOpacity,
} from "react-native";

interface CartProps {
    cartStore: CartStore;
}

const CartSummary = observer(({ cartStore }: CartProps) => {
    const totalItems = cartStore.getTotalItems();
    const totalPrice = cartStore.getTotalPrice();

    const handleAddItem = () => {
        cartStore.setCartItem({
            id: Date.now(),
            name: cartStore.itemName.get(),
            price: Number(cartStore.itemPrice.get()),
            quantity: Number(cartStore.itemQuantity.get()),
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>
                Total Items: {totalItems}
            </Text>

            <Text style={styles.label}>
                Total Price: ${totalPrice}
            </Text>

            <TextInput
                style={styles.input}
                value={cartStore.itemName.get()}
                onChangeText={cartStore.setItemName}
                placeholder="Item Name"
                placeholderTextColor="#888"
            />

            <TextInput
                style={styles.input}
                value={cartStore.itemPrice.get()}
                onChangeText={cartStore.setItemPrice}
                placeholder="Price"
                keyboardType="numeric"
                placeholderTextColor="#888"
            />

            <TextInput
                style={styles.input}
                value={cartStore.itemQuantity.get()}
                onChangeText={cartStore.setItemQuantity}
                placeholder="Quantity"
                keyboardType="numeric"
                placeholderTextColor="#888"
            />

            {!!cartStore.error.get() && (
                <Text style={styles.error}>
                    {cartStore.error.get()}
                </Text>
            )}

            <View style={styles.buttonRow}>
                <Pressable
                    style={styles.button}
                    onPress={handleAddItem}
                >
                    <Text style={styles.buttonText}>
                        Add Item
                    </Text>
                </Pressable>

                <TouchableOpacity
                    style={styles.button}
                    onPress={cartStore.clearCart}
                >
                    <Text style={styles.buttonText}>
                        Clear Cart
                    </Text>
                </TouchableOpacity>
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
    input: {
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: 12,
        paddingVertical: 12,
        paddingHorizontal: 46,
        marginBottom: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#ddd",
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
    button: {
        backgroundColor: "#007AFF",
        borderRadius: 20,
        paddingVertical: 10,
        flex: 1,
        alignItems: "center",
        marginHorizontal: 4,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "600",
    },
});

export default CartSummary;