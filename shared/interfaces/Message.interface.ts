import User from './User.interface';
import Chat from './Chat.interface';

export default interface Message {
  readonly id: string;
  text?: string;
  image?: Blob;
  isStarry: boolean;
  dispatchTimestamp: Date;
  lastEditionTimestamp: Date;
  author: User;
  chat: Chat;
}
