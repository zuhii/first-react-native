import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Mail, Meet, Settings } from '../screens/TabScreens';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const TabIcon = ({ name, size, color }) => {
  return <MaterialCommunityIcons name={name} size={size} color={color} />;
};

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName='Settings'
      screenOptions={{
        tabBarShowLabel: false,
        tabBarLabelPosition: 'beside-icon',
        tabBarStyle: [
          {
            backgroundColor: '#54b7f9',
            borderTopColor: '#ffffff',
            borderTopWidth: 2,
          },
        ],
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#cfcfcf',
      }}
    >
      <Tab.Screen
        name='Mail'
        component={Mail}
        options={{
          tanBarLabel: 'Inbox',
          tabBarIcon: props =>
            TabIcon({
              ...props,
              name: props.focused ? 'email' : 'email-outline',
            }),
        }}
      />
      <Tab.Screen
        name='Meet'
        component={Meet}
        options={{
          tabBarIcon: props =>
            TabIcon({
              ...props,
              name: props.focused ? 'video' : 'video-outline',
            }),
        }}
      />
      <Tab.Screen
        name='Settings'
        component={Settings}
        options={{
          tabBarIcon: props => TabIcon({ ...props, name: 'settings-helper' }),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
