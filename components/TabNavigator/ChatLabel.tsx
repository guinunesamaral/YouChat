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
import MessageInterface from '../../shared/interfaces/Message.interface';

interface ChatLabelProps {
  contactName: string;
  contactPhoto: ImageProps;
  messageHistory: MessageInterface[];
  navigation: any;
}

const ChatLabel: React.FunctionComponent<ChatLabelProps> = props => {
  const { contactName, contactPhoto, messageHistory, navigation } = props;
  const colors = useSelector((state: any) => state.colorReducer.colors);

  return (
    <TouchableOpacity
      style={{
        ...styles.chat,
        borderBottomColor: colors.purple_1,
      }}
      onPress={() =>
        navigation.navigate('Chat', {
          title: contactName,
          messageHistory: messageHistory,
        })
      }>
      <View>
        <Image style={styles.photo} source={contactPhoto} />
      </View>
      <View>
        <Text style={styles.contactName}>{contactName}</Text>
        <TextTicker
          duration={8000}
          loop
          scroll
          repeatSpacer={20}
          marqueeDelay={0}>
          {messageHistory.length >= 1 &&
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
  contactName: {
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default ChatLabel;
