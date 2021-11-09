import React from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';
import ChatList from './ChatList';
import Profile from './Profile';
import FriendList from './FriendList';

const getHeaderTitle = (route: any) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';

  switch (routeName) {
    case 'Chats':
      return 'Chats';
    case 'Profile':
      return 'Profile';
    case 'Friendships':
      return 'Friendships';
    case 'SearchChat':
      return 'Search Chat';
  }
};

interface TabNavigatorProps {
  navigation: any;
  route: any;
}

const Tab = createMaterialBottomTabNavigator();

const TabNavigator: React.FunctionComponent<TabNavigatorProps> = props => {
  const colors = useSelector((state: any) => state.colorReducer);

  React.useLayoutEffect(() => {
    props.navigation.setOptions({ headerTitle: getHeaderTitle(props.route) });
  }, [props.navigation, props.route]);

  return (
    <Tab.Navigator
      initialRouteName="Chats"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: colors.purple_1 }}>
      <Tab.Screen
        name="Chats"
        component={ChatList}
        options={{
          tabBarLabel: 'Chats',
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
        name="Friendships"
        component={FriendList}
        options={{
          tabBarLabel: 'Friendships',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-group"
              color={color}
              size={26}
            />
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
