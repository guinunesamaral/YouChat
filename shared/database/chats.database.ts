import { ChatModel } from '../interfaces/Chat.interface';
import { messages } from './messages.database';
import { users } from './users.database';
import { getUUID } from '../functions.util';

export const chats: ChatModel[] = [
  {
    id: getUUID(),
    userOne: users[13],
    userTwo: users[0],
    messageHistory: () => messages.filter(message => message.chat === chats[1]),
  },
  {
    id: getUUID(),
    userOne: users[13],
    userTwo: users[1],
    messageHistory: () => messages.filter(message => message.chat === chats[1]),
  },
  {
    id: getUUID(),
    userOne: users[13],
    userTwo: users[2],
    messageHistory: () => messages.filter(message => message.chat === chats[2]),
  },
  {
    id: getUUID(),
    userOne: users[13],
    userTwo: users[3],
    messageHistory: () => messages.filter(message => message.chat === chats[3]),
  },
  {
    id: getUUID(),
    userOne: users[13],
    userTwo: users[4],
    messageHistory: () => messages.filter(message => message.chat === chats[4]),
  },
  {
    id: getUUID(),
    userOne: users[13],
    userTwo: users[5],
    messageHistory: () => messages.filter(message => message.chat === chats[5]),
  },
  {
    id: getUUID(),
    userOne: users[13],
    userTwo: users[6],
    messageHistory: () => messages.filter(message => message.chat === chats[6]),
  },
  {
    id: getUUID(),
    userOne: users[13],
    userTwo: users[7],
    messageHistory: () => messages.filter(message => message.chat === chats[7]),
  },
  {
    id: getUUID(),
    userOne: users[13],
    userTwo: users[8],
    messageHistory: () => messages.filter(message => message.chat === chats[8]),
  },
  {
    id: getUUID(),
    userOne: users[13],
    userTwo: users[9],
    messageHistory: () => messages.filter(message => message.chat === chats[9]),
  },
  {
    id: getUUID(),
    userOne: users[13],
    userTwo: users[10],
    messageHistory: () =>
      messages.filter(message => message.chat === chats[10]),
  },
  {
    id: getUUID(),
    userOne: users[13],
    userTwo: users[11],
    messageHistory: () =>
      messages.filter(message => message.chat === chats[11]),
  },
  {
    id: getUUID(),
    userOne: users[13],
    userTwo: users[12],
    messageHistory: () =>
      messages.filter(message => message.chat === chats[12]),
  },
];
