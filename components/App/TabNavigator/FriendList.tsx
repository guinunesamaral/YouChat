import React from 'react';
import { ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import Friendship from '../../../shared/interfaces/Friendship.interface';
import FriendLabel from './FriendLabel';

const ChatList = ({ navigation }: { navigation: any }) => {
  const user = useSelector((state: any) => state.userReducer);

  return (
    <ScrollView>
      {user.friendships &&
        user.friendships.map((friendship: Friendship) => {
          return (
            <FriendLabel
              key={friendship.id}
              friendship={friendship}
              navigation={navigation}
            />
          );
        })}
    </ScrollView>
  );
};

export default ChatList;
