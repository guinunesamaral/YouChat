import Message from './Message.interface';
import { UserModel } from './User.interface';

export interface ChatModel {
  readonly id: string;
  userOne: UserModel;
  userTwo: UserModel;
  messageHistory: () => Message[];
}

export default interface Chat extends ChatModel {
  writeMessage: () => Message;
  sendMessage: (message: Message, contact: UserModel) => void;
  editMessage: (message: Message) => Message;
  starMessage: (message: Message) => void;
  unstarMessage: (message: Message) => void;
  deleteMessage: (message: Message) => void;
}
