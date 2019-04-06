import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EventListScreen from '../screens/EventListScreen';
import GroupsScreen from '../screens/GroupsScreen';
import ConversationListScreen from "../screens/ConversationListScreen";

const TabContainer = createBottomTabNavigator({
	Events: {
		screen: EventListScreen,
		navigationOptions: {
			tabBarLabel: 'Events',
			tabBarIcon: ({ tintColor }) => (
				<Icon name="calendar" size={30} color={tintColor} />
			)
		}
	},
	Groups: {
		screen: GroupsScreen,
		navigationOptions: {
			tabBarLabel: 'Groups',
			tabBarIcon: ({ tintColor }) => (
				<Icon name="group" size={30} color={tintColor} />
			)
		}
	},
	Conversations: {
		screen: ConversationListScreen,
		navigationOptions: {
			tabBarLabel: 'Conversations',
			tabBarIcon: ({ tintColor }) => (
				<Icon name="chat" size={30} color={tintColor} />
			)
		}
	}
}, {
	tabBarOptions: {
		activeTintColor: 'blue',
		inactiveTintColor: 'gray'
	}
});

export default TabContainer;
