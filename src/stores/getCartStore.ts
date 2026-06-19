import memoize from "lodash/memoize";
import { CartStore } from "./CartStore";

export const getCartStore = memoize((userId: number | null) => {
  return new CartStore();
});
