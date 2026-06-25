import { E_MESSAGE_SENDER } from "../enums/MessageSender";

export type message = {
  id: number;
  text: string;
  sender: E_MESSAGE_SENDER;
  createdAt: Date;
};
