// @flow

import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import EventList from "../containers/EventList";
import type { Event } from "../models/Event";
import { eventList } from "../models/Event";

type Props = {
	events: [Event]
}

class EventListScreen extends Component<Props> {
	render() {
		return (
			<View>
				<EventList data={this.props.events} />
			</View>
		);
	}
}

const mapStateToProps = (state) => {
	const events = eventList(state);
	return {
		events
	}
};

export default connect(mapStateToProps)(EventListScreen);