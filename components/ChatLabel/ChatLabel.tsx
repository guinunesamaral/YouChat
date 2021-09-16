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

const ChatLabel = ({
  name,
  photo,
  navigation,
}: {
  name: string;
  photo: ImageProps;
  navigation: any;
}) => {
  const colors = useSelector((state: any) => state.colorReducer.colors);

  return (
    <TouchableOpacity
      style={{
        ...styles.chat,
        borderBottomColor: colors.purple_1,
      }}
      onPress={() =>
        navigation.navigate('Chat', {
          navigation: navigation,
          title: name,
        })
      }>
      <View>
        <Image style={styles.userPhoto} source={photo} />
      </View>
      <View>
        <Text>{name}</Text>
        <Text>Lorem, ipsum dolor sit amet</Text>
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
  userPhoto: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
    borderRadius: 32,
  },
});

export default ChatLabel;
