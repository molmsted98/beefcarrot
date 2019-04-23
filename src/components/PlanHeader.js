// @flow
import React, { PureComponent } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import moment from "moment";
import Colors from '../constants/Colors';

type Props = {
	location: String,
	date: Date
}

const formattedDate = (date) => {
	return moment(date).format('h:mm A');
};

export default class PlanHeader extends PureComponent<Props> {
	render() {
		const locationText = `Going To:  ${this.props.location}`;
		const dateText = `Going At:   ${formattedDate(this.props.date)}`;

		return (
			<View style={styles.container}>
				<Text style={{ paddingBottom: 8 }}>{locationText}</Text>
				<Text>{dateText}</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		padding: 16,
		alignContent: "flex-start",
		backgroundColor: Colors.infoColor,
		borderBottomColor: Colors.border,
		borderBottomWidth: 1
	}
});
