// @flow
import React, { PureComponent } from 'react';
import { Text, View, TouchableNativeFeedback, StyleSheet } from 'react-native';
import GlobalStyles from '../constants/GlobalStyles';

type Props = {
	id: String,
	title: String,
	date: Date,
	location: String,
	people: [String]
}

export default class EventItem extends PureComponent<Props> {
	onPress = (id) => {
		// TODO: Implement action
	};

	render() {
		const peopleText = `Going: ${this.props.people.join(", ")}`;

		return (
			<TouchableNativeFeedback style={styles.highlight} onPress={() => this.onPress(this.props.id)}>
				<View style={styles.item}>
					<Text style={[GlobalStyles.header, { marginBottom: 8 }]}>{this.props.title}</Text>
					<Text style={GlobalStyles.subHeader}>{this.props.location}</Text>
					<Text style={[GlobalStyles.subHeader, { marginTop: 4, marginBottom: 16 }]}>{this.props.date}</Text>
					<Text style={GlobalStyles.body}>{peopleText}</Text>
				</View>
			</TouchableNativeFeedback>
		)
	}
}

const styles = StyleSheet.create({
	highlight: {
		borderRadius: 8
	},
	item: {
		backgroundColor: "white",
		borderRadius: 8,
		paddingLeft: 20,
		paddingRight: 20,
		paddingTop: 20,
		paddingBottom: 24,
		alignContent: "center",
		marginLeft: 16,
		marginRight: 16,
		marginTop: 12
	}
});
