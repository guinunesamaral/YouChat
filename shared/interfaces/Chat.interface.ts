import Contact from './Contact.interface';
import Message from './Message.interface';

export default interface Chat {
  readonly id: string;
  contact: Contact;
  lastMessage: Message;
  fixedMessages: Array<Message>;
  messageHistory: Array<Message>;

  writeMessage: () => Message;
  sendMessage: (message: string) => void;
  /*
   * Can only edit the last message
   */
  editMessage: () => Message;
  starMessage: (message: Message) => void;
  deleteMessage: (message: Message) => void;
}
