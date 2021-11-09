import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TabNavigator from './TabNavigator/TabNavigator';
import Chat from './Chat';
import Friendship from './Friendship';

const App = createStackNavigator();

const AppStackNavigator = () => {
  const colors = useSelector((state: any) => state.colorReducer);

  return (
    <App.Navigator
      initialRouteName="TabNavigator"
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: colors.purple_1 },
      }}>
      <App.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{
          title: 'Chats',
        }}
      />
      <App.Screen
        name="Chat"
        component={Chat}
        options={({ route }: { route: any }) => ({
          title: route.params.title,
          messageHistory: route.params.messageHistory,
          headerRight: () => (
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="dots-vertical"
                color={colors.white_1}
                size={26}
              />
            </TouchableOpacity>
          ),
        })}
      />
      <App.Screen
        name="Friendship"
        component={Friendship}
        options={({ route }: { route: any }) => ({
          title: route.params.title,
          friendship: route.params.friendship,
        })}
      />
    </App.Navigator>
  );
};

export default AppStackNavigator;
