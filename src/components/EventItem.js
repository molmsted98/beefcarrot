// @flow

import React, { PureComponent } from 'react';
import { Text, View, TouchableNativeFeedback } from 'react-native';

type Props = {
	id: String,
	title: String,
	date: Date,
	location: String
}

export default class EventItem extends PureComponent<Props> {
	onPress = (id) => {
		// TODO: Implement action
	};

	render() {
		return (
			<TouchableNativeFeedback onPress={() => this.onPress(this.props.id)}>
				<View style={{ padding: 24, alignContent: "center" }}>
					<Text>{this.props.title}</Text>
					<Text>{this.props.date}</Text>
					<Text>{this.props.location}</Text>
				</View>
			</TouchableNativeFeedback>
		)
	}
}