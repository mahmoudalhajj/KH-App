import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./src/screens/HomeScreen";
import { CartScreen } from "./src/screens/CartScreen";
import { ChatScreen } from "./src/screens/ChatScreen";
import { AuthScreen } from "./src/screens/AuthScreen";
import { cartStore } from "./src/stores/CartStore";
import { authStore } from "./src/stores/AuthStore";

const Stack = createNativeStackNavigator();

export default function App() {
    useEffect(() => {
        authStore.loadStoredUser();
        cartStore.loadStoredCart();
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={authStore.isLoggedIn() ? "Home" : "Auth"}
            >
                <Stack.Screen
                    name="Auth"
                    component={AuthScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                />
                <Stack.Screen
                    name="Cart"
                    component={CartScreen}
                />
                 <Stack.Screen
                  name="Chat"
                  component={ChatScreen}
                  />
            </Stack.Navigator>
        </NavigationContainer>
    );
}