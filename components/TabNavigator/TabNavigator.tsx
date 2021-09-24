import React from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';
import ChatList from './ChatList';
import Profile from './Profile';
import AddContact from './AddContact';

const getHeaderTitle = (route: any) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';

  switch (routeName) {
    case 'ChatList':
      return 'Chat List';
    case 'Profile':
      return 'Profile';
    case 'AddContact':
      return 'Add Contact';
    case 'SearchChat':
      return 'Search Chat';
  }
};

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const colors = useSelector((state: any) => state.colorReducer.colors);

  React.useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  }, [navigation, route]);

  return (
    <Tab.Navigator
      initialRouteName="ChatList"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: colors.purple_1 }}>
      <Tab.Screen
        name="ChatList"
        component={ChatList}
        options={{
          tabBarLabel: 'Chat List',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="forum" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profile',
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-box"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AddContact"
        component={AddContact}
        options={{
          tabBarLabel: 'Add Contact',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="plus-box" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="SearchChat"
        component={ChatList}
        options={{
          tabBarLabel: 'Search Chat',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
