import { ImageProps } from 'react-native';
import Chat from '../../../shared/interfaces/Chat.interface';
import Friendship from '../../../shared/interfaces/Friendship.interface';
import * as userTypes from './Types';

const initialState: State = {
  user_id: '',
  name: '',
  email: '',
  password: '',
  photo: undefined,
  friendships: undefined,
  chats: undefined,
  mayEnterApp: false,
};

interface State {
  readonly user_id: string;
  name: string;
  email: string;
  password: string;
  photo: ImageProps | Blob | undefined;
  friendships: Friendship[] | undefined;
  chats: Chat[] | undefined;
  mayEnterApp: boolean;
}

export const Reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case userTypes.login:
      return {
        ...state,
        ...action.payload.user,
      };
    case userTypes.fetchFriendships:
      return {
        ...state,
        friendships: action.payload.friendships,
      };
    case userTypes.fetchChats:
      return {
        ...state,
        chats: action.payload.chats,
      };
    case userTypes.mayEnterApp:
      return {
        ...state,
        mayEnterApp: action.payload.mayEnterApp,
      };
    default:
      return state;
  }
};
