import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EventScreen from '../screens/EventScreen';
import SettingsScreen from '../screens/SettingsScreen';

const TabContainer = createBottomTabNavigator({
  Events: {
    screen: EventScreen,
    navigationOptions: {
      tabBarLabel: 'Events',
      tabBarIcon: ({ tintColor }) => (
          <Icon name="calendar" size={30} color={tintColor} />
      )
    }
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({ tintColor }) => (
          <Icon name="settings" size={30} color={tintColor} />
      )
    }
  },
}, {
  tabBarOptions: {
    activeTintColor: 'blue',
    inactiveTintColor: 'gray'
  }
});

export default TabContainer;
