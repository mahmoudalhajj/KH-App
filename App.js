import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./src/screens/HomeScreen";
import { CartScreen } from "./src/screens/CartScreen";
import { ChatScreen } from "./src/screens/ChatScreen";
import { AuthScreen } from "./src/screens/AuthScreen";
import { cartStore } from "./src/stores/CartStore";
import { authStore } from "./src/stores/AuthStore";
import { observer } from "mobx-react-lite";
const Stack = createNativeStackNavigator();

const App = observer(() => {
    useEffect(() => {
        authStore.loadStoredUser();
        cartStore.loadStoredCart();
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {!authStore.isLoggedIn ? (
                    <Stack.Screen
                        name="Auth"
                        component={AuthScreen}
                    />
                ) : (
                    <>
                        <Stack.Screen
                            name="Home"
                            component={HomeScreen}
                            options={{ headerShown: true, title: "Khattabat" }}
                        />
                        <Stack.Screen
                            name="Cart"
                            component={CartScreen}
                            options={{ headerShown: true }}
                        />
                        <Stack.Screen
                            name="Chat"
                            component={ChatScreen}
                            options={{ headerShown: true }}
                        />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
});

export default App;