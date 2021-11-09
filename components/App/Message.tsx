import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MessageInterface from '../../shared/interfaces/Message.interface';
import User from '../../shared/interfaces/User.interface';
import Colors from '../../shared/interfaces/Colors.interface';

interface PolygonProps {
  user: User;
  author_id: string;
  colors: Colors;
}

const Polygon: React.FunctionComponent<PolygonProps> = props => {
  const { user, author_id, colors } = props;
  return (
    <View
      style={
        user.id === author_id
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
  );
};

interface MessageProps extends MessageInterface {
  navigation: any;
}

const Message: React.FunctionComponent<MessageProps> = props => {
  const { text, isStarry, dispatchTimestamp, lastEditionTimestamp, author_id } =
    props;
  const colors = useSelector((state: any) => state.colorReducer);
  const user = useSelector((state: any) => state.userReducer);

  return (
    <View>
      <TouchableOpacity
        style={
          user.id === author_id
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
        <Polygon user={user} author_id={author_id} colors={colors} />
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
            {isStarry === 1 && (
              <MaterialCommunityIcons
                name="star"
                color={colors.black_1}
                size={15}
              />
            )}
            <Text style={styles.timestamp}>{dispatchTimestamp}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const MessagePressIcons = () => {
  const colors = useSelector((state: any) => state.colorReducer);
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

export default Message;

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
