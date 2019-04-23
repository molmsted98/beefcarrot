// @flow

import React, { PureComponent } from 'react';
import { FlatList } from 'react-native';
import moment from "moment";
import ConversationItem from '../components/ConversationItem';
import Divider from '../components/Divider';
import { Conversation } from '../models/Conversation';

type Props = {
	data: [Conversation]
}

const formattedDate = (date) => {
	return moment(date).format('h:mm A');
};

export default class ConversationList extends PureComponent<Props> {
	keyExtractor = (item) => item.id;

	renderItem = ({ item }) => (
		<ConversationItem
			id={item.id}
			onPress={() => item.onPress()}
			title={item.title}
			location={item.location}
			date={formattedDate(item.date)}
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
