import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import Friendship from '../../../shared/interfaces/Friendship.interface';

interface FriendLabelProps {
  friendship: Friendship;
  navigation: any;
}

const FriendLabel: React.FunctionComponent<FriendLabelProps> = props => {
  const { friendship, navigation } = props;
  const colors = useSelector((state: any) => state.colorReducer);

  return (
    <TouchableOpacity
      style={{
        ...styles.friend,
        borderBottomColor: colors.purple_1,
      }}
      onPress={() =>
        navigation.navigate('Friendship', {
          title: friendship.friend_name,
          friendship: friendship,
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
        <Text style={styles.friendName}>{friendship.friend_name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FriendLabel;

const styles = StyleSheet.create({
  friend: {
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
