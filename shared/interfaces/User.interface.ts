import Contact from './Contact.interface';
import Chat from './Chat.interface';

export default interface User {
  id: string;
  name: string;
  email: string;
  photo: Blob;
  contacts: Array<Contact>;
  chatList: Array<Chat>;

  addContact: (email: string) => Contact;
  removeContact: (email: string) => void;
  makeChat: (contact: User) => Chat;
  deleteChat: (chat: Chat) => void;
  deleteAllChats: () => void;
  changeName: (newName: string) => User;
  changePhoto: (newPhoto: Blob) => User;
  changeEmail: (newEmail: string) => User;
  deleteAccount: () => void;
}
