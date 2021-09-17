import { users } from './users.database';

export const messages = [
  {
    id: '1',
    text: 'Hello there',
    image: '',
    author: users[0],
    dispatchTimestamp: new Date(),
    lastEditionTimestamp: new Date(),
  },
];
