import React from 'react';
import {
  Image,
  ImageProps,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';
import TextTicker from 'react-native-text-ticker';
import MessageInterface from '../../../shared/interfaces/Message.interface';

interface ChatLabelProps {
  chatId: string;
  friendName: string;
  friendPhoto: ImageProps;
  messageHistory: MessageInterface[];
  navigation: any;
}

const ChatLabel: React.FunctionComponent<ChatLabelProps> = props => {
  const { chatId, friendName, messageHistory, navigation } = props;
  const colors = useSelector((state: any) => state.colorReducer);

  return (
    <TouchableOpacity
      style={{
        ...styles.chat,
        borderBottomColor: colors.purple_1,
      }}
      onPress={() =>
        navigation.navigate('Chat', {
          title: friendName,
          chatId: chatId,
          messageHistory: messageHistory,
        })
      }>
      <View>
        <Image
          style={styles.photo}
          source={{
            uri: 'https://reactjs.org/logo-og.png',
          }}
        />
      </View>
      <View>
        <Text style={styles.friendName}>{friendName}</Text>
        <TextTicker
          duration={8000}
          loop
          scroll
          repeatSpacer={20}
          marqueeDelay={0}>
          {messageHistory &&
            messageHistory.length >= 1 &&
            messageHistory[messageHistory.length - 1].text}
        </TextTicker>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  chat: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 70,
    borderBottomWidth: 1,
  },
  photo: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
    borderRadius: 32,
  },
  friendName: {
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default ChatLabel;
