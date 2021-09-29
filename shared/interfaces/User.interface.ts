import { ImageProps } from 'react-native';
import { ChatModel } from './Chat.interface';

export interface UserModel {
  readonly id: string;
  name: string;
  email: string;
  photo: ImageProps;
  contacts: () => UserModel[];
  chatList: () => ChatModel[];
}

export default interface User extends UserModel {
  addContact: (email: string) => User;
  removeContact: (email: string) => void;
  makeChat: (contact: User) => ChatModel;
  fetchChats: () => ChatModel[];
  deleteChat: (chat: ChatModel) => void;
  deleteAllChats: () => void;
  changeName: (newName: string) => User;
  changePhoto: (newPhoto: Blob) => User;
  changeEmail: (newEmail: string) => User;
  deleteAccount: () => void;
}
