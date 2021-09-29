import { ChatModel } from './Chat.interface';
import { UserModel } from './User.interface';

export default interface Message {
  readonly id: string;
  text?: string;
  image?: Blob;
  isStarry: boolean;
  wasReceived: boolean;
  dispatchTimestamp: Date;
  lastEditionTimestamp?: Date;
  author: UserModel;
  chat: ChatModel;
}
