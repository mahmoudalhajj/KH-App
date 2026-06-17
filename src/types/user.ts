import { E_AUTH_STATUS } from "../enums/authStatus";

export interface User {
  id: number;
  name: string;
  email: string;
}

export type TAuthentication = `${E_AUTH_STATUS}`;
