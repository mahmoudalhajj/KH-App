import { E_AUTH_STATUS } from "../enums/authStatus";

export type User = {
  id: number;
  name: string;
  email: string;
};

export type TAuthentication = `${E_AUTH_STATUS}`;
