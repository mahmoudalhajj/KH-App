import { useEffect } from "react";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./src/screens/HomeScreen";
import { CartScreen } from "./src/screens/CartScreen";
import { ChatScreen } from "./src/screens/ChatScreen";
import { AuthScreen } from "./src/screens/AuthScreen";
import { getCartStore } from "./src/stores/getCartStore";
import { messageStore } from "./src/stores/MessageStore";
import { authStore } from "./src/stores/AuthStore";
import { i18nStore } from "./src/stores/i18nStore";
import { observer } from "mobx-react-lite";
import { E_ROUTE } from "./src/enums/routes";
import { E_NAV_OPTION } from "./src/enums/navigation";
import { E_APP } from "./src/enums/strings";

const Stack = createNativeStackNavigator();

const App = observer(() => {
  useEffect(() => {
    authStore.loadStoredUser();
    const userId = authStore.getUserId();
    const cartStore = getCartStore(userId);
    cartStore.loadStoredCart();
    messageStore.setUserId(userId);
    messageStore.loadStoredMessages();
    i18nStore.loadStoredLanguage();
  }, []);

  return (
    <KeyboardProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: E_NAV_OPTION.HIDDEN }}>
          {!authStore.getIsLoggedIn() ? (
            <Stack.Screen name={E_ROUTE.AUTH} component={AuthScreen} />
          ) : (
            <>
              <Stack.Screen
                name={E_ROUTE.HOME}
                component={HomeScreen}
                options={{
                  headerShown: E_NAV_OPTION.SHOWN,
                  title: E_APP.NAME,
                }}
              />
              <Stack.Screen
                name={E_ROUTE.CART}
                component={CartScreen}
                options={{ headerShown: E_NAV_OPTION.SHOWN }}
              />
              <Stack.Screen
                name={E_ROUTE.CHAT}
                component={ChatScreen}
                options={{ headerShown: E_NAV_OPTION.SHOWN }}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </KeyboardProvider>
  );
});

export default App;
