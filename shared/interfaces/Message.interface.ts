import { ImageProps } from 'react-native';

export default interface Message {
  readonly id: string;
  text?: string;
  image?: Blob | ImageProps;
  isStarry: number;
  wasReceived: number;
  dispatchTimestamp: Date;
  lastEditionTimestamp?: Date;
  readonly author_id: string;
  readonly chat_id: string;
}
