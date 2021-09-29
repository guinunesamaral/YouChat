import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MessageInterface from '../../shared/interfaces/Message.interface';

const Icons = () => {
  const colors = useSelector((state: any) => state.colorReducer.colors);
  return (
    <View style={styles.buttons}>
      <TouchableOpacity>
        <MaterialCommunityIcons
          style={styles.button}
          name="pencil"
          color={colors.white_1}
          size={26}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialCommunityIcons
          style={styles.button}
          name="star"
          color={colors.white_1}
          size={26}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialCommunityIcons
          style={styles.button}
          name="delete"
          color={colors.white_1}
          size={26}
        />
      </TouchableOpacity>
    </View>
  );
};

interface MessageProps extends MessageInterface {
  title: string;
  navigation: any;
}

const Message: React.FunctionComponent<MessageProps> = props => {
  const { text, isStarry, dispatchTimestamp, lastEditionTimestamp, author } =
    props;
  const colors = useSelector((state: any) => state.colorReducer.colors);
  const appUser = useSelector((state: any) => state.userReducer.user);

  console.log('appUser', appUser.id, author.id);

  return (
    <View>
      <TouchableOpacity
        style={
          appUser.id === author.id
            ? {
                ...styles.message,
                ...styles.sentMessage,
                backgroundColor: colors.purple_2,
              }
            : {
                ...styles.message,
                ...styles.receivedMessage,
                backgroundColor: colors.pink_1,
              }
        }>
        <View
          style={
            appUser.id === author.id
              ? {
                  ...styles.polygon,
                  ...styles.polygonRight,
                  borderTopColor: colors.purple_2,
                }
              : {
                  ...styles.polygon,
                  ...styles.polygonLeft,
                  borderTopColor: colors.pink_1,
                }
          }
        />
        <View>
          <Text style={styles.text}>{text}</Text>
          <View style={styles.messageData}>
            {lastEditionTimestamp && (
              <MaterialCommunityIcons
                name="paperclip"
                color={colors.black_1}
                size={15}
              />
            )}
            {isStarry && (
              <MaterialCommunityIcons
                name="star"
                color={colors.black_1}
                size={15}
              />
            )}
            <Text style={styles.timestamp}>{dispatchTimestamp.toString()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  message: {
    position: 'relative',
    marginTop: 10,
    marginLeft: 5,
    marginRight: 10,
    borderRadius: 5,
  },
  sentMessage: {
    alignSelf: 'flex-end',
    marginRight: 15,
  },
  receivedMessage: {
    alignSelf: 'flex-start',
    marginLeft: 15,
  },
  polygon: {
    position: 'absolute',
    width: 0,
    height: 0,
    borderWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
  },
  polygonLeft: {
    left: -10,
  },
  polygonRight: {
    right: -10,
  },
  text: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    lineHeight: 20,
  },
  messageData: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 7,
    marginBottom: 5,
  },
  timestamp: {
    marginLeft: 3,
  },
  buttons: {},
  button: {
    marginRight: 15,
  },
});

export default Message;
