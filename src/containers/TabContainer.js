import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EventListScreen from '../screens/EventListScreen';
import ConversationListScreen from "../screens/ConversationListScreen";
import Colors from '../constants/Colors';

const TabContainer = createBottomTabNavigator({
	Events: {
		screen: EventListScreen,
		navigationOptions: {
			tabBarIcon: ({ tintColor }) => (
				<Icon name="calendar" size={24} color={tintColor} />
			)
		}
	},
	Conversations: {
		screen: ConversationListScreen,
		navigationOptions: {
			tabBarIcon: ({ tintColor }) => (
				<Icon name="chat" size={24} color={tintColor} />
			)
		}
	},
	Settings: {
		screen: ConversationListScreen,
		navigationOptions: {
			tabBarIcon: ({ tintColor }) => (
				<Icon name="settings" size={24} color={tintColor} />
			)
		}
	}
}, {
	tabBarOptions: {
		activeTintColor: Colors.colorLight,
		inactiveTintColor: Colors.bodyColor,
		showLabel: false
	}
});

export default TabContainer;
