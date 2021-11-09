import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Register from './Register';
import EnterVerificationCode from './EnterVerificationCode';
import RegisterFinished from './RegistrationFinished';
import ResetPassword from './ResetPassword';

const Auth = createStackNavigator();

const AuthStackNavigator = () => {
  return (
    <Auth.Navigator>
      <Auth.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Auth.Screen
        name="Register"
        component={Register}
        options={{
          headerTitle: '',
          headerStyle: {
            backgroundColor: 'transparent',
          },
        }}
      />
      <Auth.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{
          headerTitle: '',
          headerStyle: {
            backgroundColor: 'transparent',
          },
        }}
      />
      <Auth.Screen
        name="EnterVerificationCode"
        component={EnterVerificationCode}
        options={{
          headerTitle: '',
          headerStyle: {
            backgroundColor: 'transparent',
          },
        }}
      />
      <Auth.Screen
        name="RegisterFinished"
        component={RegisterFinished}
        options={{
          headerTitle: '',
          headerStyle: {
            backgroundColor: 'transparent',
          },
        }}
      />
    </Auth.Navigator>
  );
};

export default AuthStackNavigator;
