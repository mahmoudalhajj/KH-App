import memoize from "lodash/memoize";
import { CartStore } from "./CartStore";
import { User } from "../types/user";

export const getCartStore = memoize(
  (user: User) => {
    return new CartStore();
  },
  (user: User) => user.id,
);
