import CartSummary from "../components/Cart";
import { useNavigation } from "@react-navigation/native";
import { authStore } from "../stores/AuthStore";
import { observer } from "mobx-react-lite";

export const CartScreen = observer(() => {
  const navigation = useNavigation();

  //   if (!authStore.getIsLoggedIn()) {
  //     navigation.replace("Auth");
  //     return null;
  //   }

  return <CartSummary />;
});
