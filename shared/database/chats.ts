import { ChatModel } from '../interfaces/Chat.interface';
import Message from '../interfaces/Message.interface';
import { messages } from './messages.database';
import { oliviaSantos, paulo } from './users';

export const chat: ChatModel = {
  id: '1',
  userOne: paulo,
  userTwo: oliviaSantos,
  messageHistory: [],
};

const arr: Message[] = messages.filter(
  (message: Message) => message.chat === chat,
);

chat.messageHistory.push(arr);
