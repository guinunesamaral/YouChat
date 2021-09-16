import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import BottomTabs from '../BottomTabs/BottomTabs';
import Chat from '../Chat/Chat';

const Stack = createStackNavigator();

const StackNavigator = () => {
  const colors = useSelector((state: any) => state.colorReducer.colors);

  return (
    <Stack.Navigator
      initialRouteName="Chats"
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: colors.purple_1 },
      }}>
      <Stack.Screen name="Chats" component={BottomTabs} />
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
