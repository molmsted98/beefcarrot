// @flow

import React, { PureComponent } from 'react';
import { FlatList } from 'react-native';
import moment from 'moment';
import EventItem from '../components/EventItem';
import { Event } from '../models/Event';

type Props = {
	data: [Event]
}

const formattedDate = (date) => {
	return moment(date).format('h:mm A');
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
			people={item.people}
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