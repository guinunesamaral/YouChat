import Contact from './Contact.interface';
import Chat from './Chat.interface';

type Contacts = Contact | Array<Contact>;
type ChatList = Chat | Array<Chat>;

export default interface User {
  readonly id: string;
  name: string;
  email: string;
  photo: Blob;
  contacts: Contacts;
  chatList: ChatList;

  addContact: (email: string) => Contact;
  removeContact: (email: string) => void;
  makeChat: (contact: User) => Chat;
  fetchChats: () => Array<Chat>;
  deleteChat: (chat: Chat) => void;
  deleteAllChats: () => void;
  changeName: (newName: string) => User;
  changePhoto: (newPhoto: Blob) => User;
  changeEmail: (newEmail: string) => User;
  deleteAccount: () => void;
}
