// @flow
import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import EventList from "../containers/EventList";
import type { Event } from "../models/Event";
import { eventList } from "../models/Event";
import Colors from '../constants/Colors';
import GlobalStyles from '../constants/GlobalStyles';
import Divider from '../components/Divider';

type Props = {
	events: [Event]
}

class EventListScreen extends Component<Props> {
	render() {
		const divider = Divider.list();

		return (
			<ScrollView style={styles.container}>
				<Text style={[GlobalStyles.header, { marginTop: 24, marginLeft: 16, marginBottom: 2 }]}>Featured Event:</Text>
				{divider}
				<EventList data={this.props.events} />
				<Text style={[GlobalStyles.header, { marginTop: 24, marginLeft: 16, marginBottom: 2 }]}>Today:</Text>
				{divider}
				<EventList data={this.props.events} />
				<Text style={[GlobalStyles.header, { marginTop: 24, marginLeft: 16, marginBottom: 2 }]}>Tomorrow:</Text>
				{divider}
				<EventList data={this.props.events} />
			</ScrollView>
		);
	}
}

const mapStateToProps = (state) => {
	const events = eventList(state);
	return {
		events
	}
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.screen
	}
});

export default connect(mapStateToProps)(EventListScreen);