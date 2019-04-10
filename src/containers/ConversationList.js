// @flow

import React, { PureComponent } from 'react';
import { FlatList } from 'react-native';
import ConversationItem from '../items/ConversationItem';
import Divider from '../components/Divider';
import { Conversation } from "../models/Conversation";

type Props = {
	data: [Conversation]
}

export default class ConversationList extends PureComponent<Props> {
	keyExtractor = (item) => item.id;

	renderItem = ({ item }) => (
		<ConversationItem
			id={item.id}
			onPress={() => item.onPress()}
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
				ItemSeparatorComponent={Divider.list}
			/>
		);
	}
}
