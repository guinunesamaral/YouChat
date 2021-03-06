import { ImageProps } from 'react-native';

export default interface Chat {
  readonly id: string;
  readonly friend_id: string;
  readonly friend_name: string;
  readonly friend_email: string;
  readonly friend_photo: Blob | ImageProps;
}
