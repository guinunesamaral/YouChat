import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MessageInterface from '../../shared/interfaces/Message.interface';
import Message from './Message';
import ChatKeyboard from './ChatKeyboard';

interface ChatProps {
  route: any;
  navigation: any;
}

const Chat: React.FunctionComponent<ChatProps> = props => {
  const { route, navigation } = props;
  const chatId = route.params.chatId;
  const messageHistory = route.params.messageHistory;

  return (
    <View style={styles.chat}>
      <ScrollView>
        {messageHistory &&
          messageHistory.map((message: MessageInterface) => {
            return (
              <Message key={message.id} {...message} navigation={navigation} />
            );
          })}
      </ScrollView>
      <ChatKeyboard chatId={chatId} />
    </View>
  );
};

const styles = StyleSheet.create({
  chat: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
});

export default Chat;
