import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { useSelector } from 'react-redux';

interface RegisterProps {
  navigation: any;
}

const Register: React.FunctionComponent<RegisterProps> = props => {
  const colors = useSelector((state: any) => state.colorReducer.colors);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState<boolean | undefined>(
    undefined,
  );
  const [isPasswordValid, setIsPasswordValid] = useState<boolean | undefined>(
    undefined,
  );

  const verifyData = () => {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"] + (\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email.match(emailRegex)) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
    if (password.length > 6) {
      setIsPasswordValid(false);
    } else {
      setIsPasswordValid(true);
    }
    if (isEmailValid && isPasswordValid) {
      props.navigation.navigate('EnterVerificationCode');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Name:" style={styles.input} />
      <TextInput
        placeholder={isEmailValid ? 'Email:' : 'Enter a valid email:'}
        onChangeText={value => setEmail(value)}
        style={
          isEmailValid === undefined || isEmailValid === true
            ? { ...styles.input }
            : { ...styles.input, ...styles.redBorder }
        }
      />
      <TextInput
        placeholder={isPasswordValid ? 'Password:' : 'Enter a valid password:'}
        secureTextEntry={true}
        onChangeText={value => setPassword(value)}
        style={
          isPasswordValid === undefined || isPasswordValid === true
            ? { ...styles.input }
            : { ...styles.input, ...styles.redBorder }
        }
      />
      <TextInput
        secureTextEntry={true}
        placeholder="Repeat password:"
        style={styles.input}
      />
      <View style={styles.buttonWrapper}>
        <Button
          title="Send code"
          color={colors.purple_2}
          onPress={verifyData}
        />
      </View>
    </View>
  );
};

export default Register;

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
  buttonWrapper: {
    alignItems: 'center',
    marginTop: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: 100,
    borderRadius: 4,
    elevation: 3,
  },
  text: {
    color: 'white',
  },
});
