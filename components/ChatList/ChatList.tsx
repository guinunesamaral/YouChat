import React from 'react';
import { ScrollView } from 'react-native';
import ChatLabel from '../ChatLabel/ChatLabel';
import { users as userDatabase } from '../../shared/database/users.database';

const ChatList = ({ navigation }: { navigation: any }) => {
  return (
    <ScrollView>
      {userDatabase.map(user => {
        const { id, name, photo } = user;
        return (
          <ChatLabel
            key={id}
            name={name}
            photo={photo}
            navigation={navigation}
          />
        );
      })}
    </ScrollView>
  );
};

export default ChatList;
