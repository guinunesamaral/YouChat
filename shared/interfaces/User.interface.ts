import { ImageProps } from 'react-native';

export default interface User {
  readonly id: string;
  name: string;
  email: string;
  password: string;
  photo: Blob | ImageProps;
}
