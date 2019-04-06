import React, { PureComponent } from 'react';
import { FlatList } from 'react-native';
import ChatItem from '../items/ChatItem';

export default class ChatList extends PureComponent {
	keyExtractor = (item) => item.id;

	renderItem = ({ item }) => (
		<ChatItem
			id={item.id}
			title={item.title}
		/>
	);

	render() {
		return (
			<FlatList
				data={this.props.data}
				extraData={this.state}
				keyExtractor={this.keyExtractor}
				renderItem={this.renderItem}
			/>
		);
	}
}
