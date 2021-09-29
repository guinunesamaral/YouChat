import { getUUID } from '../../functions.util';
import { chats } from '../chats.database';
import { users } from '../users.database';

export const alex = [
  {
    id: getUUID(),
    text: 'It is a long established fact that a reader will be distracted by the readable content of a',
    image: undefined,
    isStarry: false,
    wasReceived: false,
    dispatchTimestamp: new Date(),
    lastEditionTimestamp: undefined,
    author: users[13],
    chat: chats[12],
  },
  {
    id: getUUID(),
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dol',
    image: undefined,
    isStarry: false,
    wasReceived: false,
    dispatchTimestamp: new Date(),
    lastEditionTimestamp: undefined,
    author: users[13],
    chat: chats[12],
  },
  {
    id: getUUID(),
    text: 'Lorem ipsum dolor sit amet',
    image: undefined,
    isStarry: false,
    wasReceived: false,
    dispatchTimestamp: new Date(),
    lastEditionTimestamp: undefined,
    author: users[13],
    chat: chats[12],
  },
  {
    id: getUUID(),
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: undefined,
    isStarry: false,
    wasReceived: false,
    dispatchTimestamp: new Date(),
    lastEditionTimestamp: undefined,
    author: users[13],
    chat: chats[12],
  },
];
