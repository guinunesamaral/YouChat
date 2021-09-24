import { ChatModel } from '../interfaces/Chat.interface';
import { messages } from './messages.database';
import { users } from './users.database';

export const chats: ChatModel[] = [
  {
    id: '1',
    userOne: users[13],
    userTwo: users[0],
    messageHistory: () => messages.filter(message => message.chat === chats[0]),
  },
  {
    id: '2',
    userOne: users[13],
    userTwo: users[1],
    messageHistory: () => messages.filter(message => message.chat === chats[1]),
  },
  {
    id: '3',
    userOne: users[13],
    userTwo: users[2],
    messageHistory: () => messages.filter(message => message.chat === chats[2]),
  },
  {
    id: '4',
    userOne: users[13],
    userTwo: users[3],
    messageHistory: () => messages.filter(message => message.chat === chats[3]),
  },
  {
    id: '5',
    userOne: users[13],
    userTwo: users[4],
    messageHistory: () => messages.filter(message => message.chat === chats[4]),
  },
  {
    id: '6',
    userOne: users[13],
    userTwo: users[5],
    messageHistory: () => messages.filter(message => message.chat === chats[5]),
  },
  {
    id: '7',
    userOne: users[13],
    userTwo: users[6],
    messageHistory: () => messages.filter(message => message.chat === chats[6]),
  },
  {
    id: '8',
    userOne: users[13],
    userTwo: users[7],
    messageHistory: () => messages.filter(message => message.chat === chats[7]),
  },
  {
    id: '9',
    userOne: users[13],
    userTwo: users[8],
    messageHistory: () => messages.filter(message => message.chat === chats[8]),
  },
  {
    id: '10',
    userOne: users[13],
    userTwo: users[9],
    messageHistory: () => messages.filter(message => message.chat === chats[9]),
  },
  {
    id: '11',
    userOne: users[13],
    userTwo: users[10],
    messageHistory: () =>
      messages.filter(message => message.chat === chats[10]),
  },
  {
    id: '12',
    userOne: users[13],
    userTwo: users[11],
    messageHistory: () =>
      messages.filter(message => message.chat === chats[11]),
  },
  {
    id: '13',
    userOne: users[13],
    userTwo: users[12],
    messageHistory: () =>
      messages.filter(message => message.chat === chats[12]),
  },
];
