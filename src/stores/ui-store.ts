import { memoize } from "lodash";

class UiStore {
  getTextAlign = () => {};
}

export const getUiStore = memoize(
  () => {
    return new UiStore();
  },
  () => 1,
);
