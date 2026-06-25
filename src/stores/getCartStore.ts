import memoize from "lodash/memoize";
import { CartStore } from "./CartStore";

export const getCartStore = memoize((userId: number | null) => {
  const store = new CartStore();
  store.setUserId(userId);
  return store;
});
