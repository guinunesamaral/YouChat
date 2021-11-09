import React, { useCallback, useEffect, useState } from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as userTypes from '../../redux/reducers/user/Types';

const Login = ({ navigation }: { navigation: any }) => {
  const user = useSelector((state: any) => state.userReducer);
  const colors = useSelector((state: any) => state.colorReducer);
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [isEmailValid, setIsEmailValid] = useState<boolean | undefined>(
    undefined,
  );
  const [isPasswordValid, setIsPasswordValid] = useState<boolean | undefined>(
    undefined,
  );

  const fetchUser = async () => {
    await fetch('http://localhost:9000/user/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(res => res.json())
      .then(res =>
        dispatch({
          type: userTypes.login,
          payload: {
            user: res[0],
          },
        }),
      )
      .catch(err => {
        throw err;
      });
  };

  const fetchChats = useCallback(async () => {
    await fetch(`http://localhost:9000/chat/${user.id}`)
      .then(res => res.json())
      .then(res =>
        dispatch({
          type: userTypes.fetchChats,
          payload: { chats: res },
        }),
      )
      .catch(err => {
        throw err;
      });
  }, [dispatch, user.id]);

  const fetchFriendships = useCallback(async () => {
    await fetch(`http://localhost:9000/friendship/${user.id}`)
      .then(res => res.json())
      .then(res =>
        dispatch({
          type: userTypes.fetchFriendships,
          payload: { friendships: res },
        }),
      )
      .catch(err => {
        throw err;
      });
  }, [dispatch, user.id]);

  const checkEmail = () => {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email) {
      setIsEmailValid(email.match(emailRegex) ? true : false);
    }
  };

  const checkPassword = () => {
    if (password) {
      setIsPasswordValid(password.length >= 6);
    }
  };

  const checkData = async () => {
    if (isEmailValid && isPasswordValid) {
      await fetchUser();
    } else {
      Alert.alert(
        'Problem while logging you',
        'You must provide a valid email and password',
      );
    }
  };

  useEffect(() => {
    if (!isEmailValid) {
      setEmail('');
    }
  }, [isEmailValid]);

  useEffect(() => {
    if (!isPasswordValid) {
      setPassword('');
    }
  }, [isPasswordValid]);

  useEffect(() => {
    if (user.id) {
      fetchChats();
      fetchFriendships();
    }
  }, [dispatch, fetchChats, fetchFriendships, user.id]);

  useEffect(() => {
    if (user.chats && user.friendships) {
      dispatch({
        type: userTypes.mayEnterApp,
        payload: {
          mayEnterApp: true,
        },
      });
    }
  }, [dispatch, user.chats, user.friendships]);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={
          isEmailValid === undefined || isEmailValid === true
            ? 'Email:'
            : 'Enter a valid email:'
        }
        onChangeText={text => setEmail(text)}
        onEndEditing={checkEmail}
        value={email}
        style={
          isEmailValid === undefined || isEmailValid === true
            ? { ...styles.input }
            : { ...styles.input, ...styles.redBorder }
        }
      />
      <TextInput
        placeholder={
          isPasswordValid === undefined || isPasswordValid === true
            ? 'Password:'
            : 'Enter a valid password:'
        }
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
        onEndEditing={checkPassword}
        value={password}
        style={
          isPasswordValid === undefined || isPasswordValid === true
            ? { ...styles.input }
            : { ...styles.input, ...styles.redBorder }
        }
      />
      <View style={styles.accessProblems}>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text>Don't have an account?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
          <Text>Forgot my password</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonWrapper}>
        <Button color={colors.purple_2} title="Enter" onPress={checkData} />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  input: {
    height: 50,
    paddingHorizontal: 10,
    marginVertical: 12,
    borderWidth: 1,
  },
  redBorder: {
    borderColor: 'red',
    borderWidth: 1,
  },
  accessProblems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonWrapper: {
    alignItems: 'center',
    marginTop: 10,
  },
});
