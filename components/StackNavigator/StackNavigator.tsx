import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import TabNavigator from '../TabNavigator/TabNavigator';
import Chat from '../Chat/Chat';

const Stack = createStackNavigator();

const StackNavigator = () => {
  const colors = useSelector((state: any) => state.colorReducer.colors);

  return (
    <Stack.Navigator
      initialRouteName="TabNavigator"
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: colors.purple_1 },
      }}>
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{
          title: 'Chats',
        }}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={({ route }: { route: any }) => ({
          title: route.params.title,
        })}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
