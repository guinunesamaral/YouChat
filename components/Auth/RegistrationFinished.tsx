import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as userTypes from '../../redux/reducers/user/Types';

interface RegisterFinishedInterface {
  navigation: any;
}

const RegisterFinished: React.FunctionComponent<RegisterFinishedInterface> =
  props => {
    const colors = useSelector((state: any) => state.colorReducer.colors);
    const dispatch = useDispatch();

    useEffect(() => {
      setTimeout(() => {
        dispatch({ type: userTypes.login, payload: { isLoggedIn: true } });
      }, 3000);
    }, [dispatch, props.navigation]);

    return (
      <View style={styles.container}>
        <Text style={{ ...styles.message, color: colors.purple_2 }}>
          You have been registered! Now you can use the app.
        </Text>
      </View>
    );
  };

export default RegisterFinished;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    paddingHorizontal: 40,
  },
  message: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '700',
  },
});
