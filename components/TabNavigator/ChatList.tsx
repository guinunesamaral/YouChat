import React from 'react';
import { ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import ChatLabel from './ChatLabel';
import { UserModel } from '../../shared/interfaces/User.interface';
import { chats as chatDatabase } from '../../shared/database/chats.database';

const ChatList = ({ navigation }: { navigation: any }) => {
  const appUser = useSelector((state: any) => state.userReducer.user);

  const getContact = (userOne: UserModel, userTwo: UserModel) => {
    return userOne.id !== appUser.id ? userOne : userTwo;
  };

  return (
    <ScrollView>
      {chatDatabase
        .filter(
          chat =>
            chat.userOne.id === appUser.id || chat.userTwo.id === appUser.id,
        )
        .map(chat => {
          const { id, userOne, userTwo, messageHistory } = chat;
          const contact = getContact(userOne, userTwo);
          return (
            <ChatLabel
              key={id}
              contactName={contact.name}
              contactPhoto={contact.photo}
              messageHistory={messageHistory()}
              navigation={navigation}
            />
          );
        })}
    </ScrollView>
  );
};

export default ChatList;
