import Chat from './interfaces/Chat.interface';
import User from './interfaces/User.interface';

interface Database {
  searchUser: (id: string) => User;
  addUser: (user: User) => void;
  updateUser: (user: User) => void;
  deleteUser: (id: string) => void;
  searchChat: (id: string) => Chat;
  addChat: (chat: Chat) => void;
  updateChat: (chat: Chat) => void;
  deleteChat: (id: string) => void;
}
