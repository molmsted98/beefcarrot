// @flow

import React, { PureComponent } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ChatItem from '../components/ChatItem';
import { Message } from '../models/Conversation';

type Props = {
	data: [Message]
}

export default class ChatList extends PureComponent<Props> {
	keyExtractor = (item) => item.id;

	renderItem = ({ item }) => (
		<ChatItem
			id={item.id}
			title={item.text}
		/>
	);

	render() {
		return (
			<FlatList
				style={styles.container}
				data={this.props.data}
				extraData={this.state}
				keyExtractor={this.keyExtractor}
				renderItem={this.renderItem}
			/>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column"
	}
});
