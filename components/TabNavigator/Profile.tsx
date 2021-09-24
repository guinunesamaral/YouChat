import React from 'react';
import { Image, SafeAreaView, StyleSheet, TextInput, View } from 'react-native';
import { users as userDatabase } from '../../shared/database/users.database';

const Profile = () => {
  const user = userDatabase[0];

  return (
    <View style={styles.profile}>
      <Image style={styles.userPhoto} source={user.photo} />
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
