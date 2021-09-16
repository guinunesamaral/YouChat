import User from './User.interface';
import Contact from './Contact.interface';
import Message from './Message.interface';

interface MessageId extends String {}

export default interface Chat {
  id: string;
  sender: User;
  receiver: Contact;
  lastMessage: MessageId;
  fixedMessages: Array<Message>;
  messageHistory: Array<Message>;

  writeMessage: () => Message;
  sendMessage: (message: string) => void;
  editMessage: (message: Message) => Message;
  deleteMessage: (message: Message) => void;
}
