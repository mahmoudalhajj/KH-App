import { E_ROUTE } from "../enums/routes";

export type RootStackParamList = {
  [E_ROUTE.AUTH]: undefined;
  [E_ROUTE.HOME]: undefined;
  [E_ROUTE.CART]: undefined;
  [E_ROUTE.CHAT]: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
