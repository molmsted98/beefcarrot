import React, { Component } from 'react';
import {
	View
} from 'react-native';
import ChatList from '../containers/ChatList';

export default class ConversationScreen extends Component {
	chatMockData = [
		{ id: "1", title: "Message1" },
		{ id: "2", title: "Message2" }
	];

	render() {
		return (
			<View>
				<ChatList data={this.chatMockData} />
			</View>
		);
	}
}
