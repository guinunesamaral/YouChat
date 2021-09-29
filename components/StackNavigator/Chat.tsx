import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MessageInterface from '../../shared/interfaces/Message.interface';
import Message from './Message';
import ChatKeyboard from './ChatKeyboard';

interface ChatProps {
  title: string;
  route: any;
  navigation: any;
}

const Chat: React.FunctionComponent<ChatProps> = props => {
  const { title, route, navigation } = props;
  const messageHistory = route.params.messageHistory;

  return (
    <View style={styles.chat}>
      <ScrollView>
        {messageHistory.map((message: MessageInterface) => {
          return (
            <Message
              key={message.id}
              {...message}
              title={title}
              navigation={navigation}
            />
          );
        })}
      </ScrollView>
      <ChatKeyboard />
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
