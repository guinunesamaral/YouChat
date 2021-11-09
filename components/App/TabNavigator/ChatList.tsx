import React, { useState } from 'react';
import { ImageProps, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import ChatLabel from './ChatLabel';
import Chat from '../../../shared/interfaces/Chat.interface';
import Message from '../../../shared/interfaces/Message.interface';

const ChatList = ({ navigation }: { navigation: any }) => {
  const user = useSelector((state: any) => state.userReducer);
  const [messages, setMessages] = useState<Message[]>();

  const fetchMessages = async (id: string) => {
    await fetch(`http://localhost:9000/message/${id}`)
      .then(res => res.json())
      .then(res => setMessages(res))
      .catch(err => {
        throw err;
      });
  };

  return (
    <ScrollView>
      {user.chats &&
        user.chats.map((chat: Chat) => {
          const { id, friend_name, friend_photo } = chat;
          fetchMessages(id);
          return (
            <ChatLabel
              key={id}
              chatId={id}
              friendName={friend_name as string}
              friendPhoto={friend_photo as ImageProps}
              messageHistory={messages as Message[]}
              navigation={navigation}
            />
          );
        })}
    </ScrollView>
  );
};

export default ChatList;
