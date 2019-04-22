import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EventListScreen from '../screens/EventListScreen';
import ConversationListScreen from "../screens/ConversationListScreen";

const TabContainer = createBottomTabNavigator({
	Events: {
		screen: EventListScreen,
		navigationOptions: {
			tabBarIcon: ({ tintColor }) => (
				<Icon name="calendar" size={30} color={tintColor} />
			)
		}
	},
	Conversations: {
		screen: ConversationListScreen,
		navigationOptions: {
			tabBarIcon: ({ tintColor }) => (
				<Icon name="chat" size={30} color={tintColor} />
			)
		}
	},
	Settings: {
		screen: ConversationListScreen,
		navigationOptions: {
			tabBarIcon: ({ tintColor }) => (
				<Icon name="settings" size={30} color={tintColor} />
			)
		}
	}
}, {
	tabBarOptions: {
		activeTintColor: 'blue',
		inactiveTintColor: 'gray',
		showLabel: false
	}
});

export default TabContainer;
