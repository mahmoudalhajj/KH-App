import { useEffect } from "react";
import CartSummary from "../components/Cart";
import { cartStore } from "../stores/CartStore";
import { useNavigation } from "@react-navigation/native";
import { authStore } from "../stores/AuthStore";

import { observer } from "mobx-react-lite";

export const CartScreen = observer(() => {
const navigation = useNavigation();
    
      // useEffect(() => {
      //   if (!authStore.isLoggedIn()) {
      //     navigation.replace("Auth");
      //   }
      // }, [authStore.status.get()]);
    
    return (
        <CartSummary cartStore={cartStore} />
    );
    });