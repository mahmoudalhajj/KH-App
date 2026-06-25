import CartSummary from "../components/Cart";
import { observer } from "mobx-react-lite";

export const CartScreen = observer(() => {
  return <CartSummary />;
});
