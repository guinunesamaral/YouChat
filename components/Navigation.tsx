import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import AuthStackNavigator from './Auth/AuthStackNavigator';
import AppStackNavigator from './App/AppStackNavigator';

const Navigation = () => {
  const user = useSelector((state: any) => state.userReducer);

  return (
    <NavigationContainer>
      {user.mayEnterApp ? <AppStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
