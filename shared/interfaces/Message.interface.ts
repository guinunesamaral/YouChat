import User from './User.interface';

export default interface Message {
  id: string;
  text: string;
  image: Blob;
  author: User;
  dispatchTimestamp: Date;
  lastEditionTimestamp: Date;
}
