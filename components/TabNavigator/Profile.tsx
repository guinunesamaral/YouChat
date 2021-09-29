import React from 'react';
import { Image, SafeAreaView, StyleSheet, TextInput, View } from 'react-native';
import { useSelector } from 'react-redux';

const Profile = () => {
  const appUser = useSelector((state: any) => state.userReducer.user);

  return (
    <View style={styles.profile}>
      <Image style={styles.userPhoto} source={appUser.photo} />
      <SafeAreaView style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Name" />
        <TextInput style={styles.input} placeholder="Email" />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  profile: {
    alignItems: 'center',
    paddingTop: 10,
  },
  userPhoto: {
    width: 200,
    height: 200,
    marginHorizontal: 10,
    borderRadius: 100,
  },
  inputContainer: {
    alignItems: 'center',
    width: '100%',
  },
  input: {
    width: '80%',
    height: 40,
    padding: 10,
    margin: 12,
    borderWidth: 1,
  },
});

export default Profile;
