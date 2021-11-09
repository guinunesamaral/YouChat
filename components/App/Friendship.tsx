import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface FriendshipProps {
  route: any;
  navigation: any;
}

const Friendship: React.FunctionComponent<FriendshipProps> = props => {
  const { route, navigation } = props;
  const friendship = route.params.friendship;
  const colors = useSelector((state: any) => state.colorReducer);

  return (
    <View style={styles.friendship}>
      <View style={styles.photo}>
        <Image
          style={styles.userPhoto}
          source={{
            uri: 'https://reactjs.org/logo-og.png',
          }}
        />
      </View>
      <View style={styles.container}>
        <View style={{ ...styles.infoBox, borderColor: colors.purple_1 }}>
          <View style={styles.infoBoxText}>
            <MaterialCommunityIcons
              name="clipboard-account"
              color={colors.purple_1}
              size={25}
            />
            <Text style={{ ...styles.text, color: colors.purple_1 }}>
              {friendship.friend_name}
            </Text>
          </View>
        </View>
        <View style={{ ...styles.infoBox, borderColor: colors.purple_1 }}>
          <View style={styles.infoBoxText}>
            <MaterialCommunityIcons
              name="at"
              color={colors.purple_1}
              size={25}
            />
            <Text style={{ ...styles.text, color: colors.purple_1 }}>
              {friendship.friend_email}
            </Text>
          </View>
        </View>
      </View>
      <Button
        title="Enter chat"
        color={colors.purple_2}
        onPress={() => {
          navigation.navigate('Chat', {
            title: friendship.friend_name,
            friendship: friendship,
          });
        }}
      />
    </View>
  );
};

export default Friendship;

const styles = StyleSheet.create({
  friendship: {
    alignItems: 'center',
    paddingTop: 20,
  },
  photo: {
    position: 'relative',
    marginBottom: 30,
  },
  userPhoto: {
    width: 200,
    height: 200,
    marginHorizontal: 10,
    borderRadius: 100,
  },
  container: {
    width: '90%',
  },
  infoBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 5,
    paddingVertical: 7,
    marginBottom: 15,
    borderWidth: 1,
  },
  infoBoxText: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 17,
    marginLeft: 4,
  },
});
