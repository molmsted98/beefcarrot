import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import ChatList from '../containers/ChatList';
import ChatInput from '../components/ChatInput';

export default class ConversationScreen extends Component {
	chatMockData = [
		{ id: "1", title: "Message1" },
		{ id: "2", title: "Message2" },
		{ id: "3", title: "Message1" },
		{ id: "4", title: "Message1" },
		{ id: "5", title: "Message1" },
		{ id: "6", title: "Message1" },
		{ id: "7", title: "Message1" },
		{ id: "8", title: "Message1" },
	];

	render() {
		return (
			<View style={styles.container}>
				<ChatList data={this.chatMockData} />
				<ChatInput />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "flex-end"
	}
});
