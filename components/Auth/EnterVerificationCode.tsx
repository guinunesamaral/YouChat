import React from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useSelector } from 'react-redux';

interface EnterVerificationCodeInterface {
  navigation: any;
}

const EnterVerificationCode: React.FunctionComponent<EnterVerificationCodeInterface> =
  props => {
    const colors = useSelector((state: any) => state.colorReducer.colors);

    return (
      <View style={styles.container}>
        <TextInput
          secureTextEntry={true}
          placeholder="Enter the code sent to your email:"
          style={styles.input}
        />
        <View style={styles.buttonWrapper}>
          <Pressable
            style={{ ...styles.button, backgroundColor: colors.purple_2 }}
            onPress={() => props.navigation.navigate('RegisterFinished')}>
            <Text style={styles.text}>Confirm code</Text>
          </Pressable>
        </View>
      </View>
    );
  };

export default EnterVerificationCode;

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
  buttonWrapper: {
    alignItems: 'center',
    marginTop: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: 120,
    borderRadius: 4,
    elevation: 3,
  },
  text: {
    color: 'white',
  },
});
