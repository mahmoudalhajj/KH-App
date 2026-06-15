import memoize from "lodash/memoize";
import { CartStore } from "./CartStore";
 import { CartItem } from '../types/cartItem';

export const getCartStore = memoize(
    (item: CartItem) => { return new CartStore(); },
    (item) => item.id   
);