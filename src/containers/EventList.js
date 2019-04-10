// @flow

import React, { PureComponent } from 'react';
import { FlatList } from 'react-native';
import moment from 'moment';
import EventItem from '../components/EventItem';
import Divider from '../components/Divider';
import { Event } from '../models/Event';

type Props = {
	data: [Event]
}

const formattedDate = (date) => {
	const day = moment(date).format('MM/DD/YY');
	const time = moment(date).format('hh:mm A');
	return `${day} at ${time}`;
};

export default class EventList extends PureComponent<Props> {
	keyExtractor = (item) => item.id;

	renderItem = ({ item }) => (
		<EventItem
			id={item.id}
			onPress={() => item.onPress()}
			title={item.title}
			date={formattedDate(item.date)}
			location={item.location}
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