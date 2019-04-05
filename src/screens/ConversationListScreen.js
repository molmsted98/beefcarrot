import React, { Component } from 'react';
import {
	View
} from 'react-native';
import ConversationList from '../containers/ConversationList';

export default class ConversationListScreen extends Component {
	conversationMockData = [
		{ id: "1", title: "Test" },
		{ id: "2", title: "Test2" }
	];

	render() {
		return (
			<View>
				<ConversationList data={this.conversationMockData} />
			</View>
		);
	}
}
