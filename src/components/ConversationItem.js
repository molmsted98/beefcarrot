// @flow
import React, { PureComponent } from 'react';
import { Text, TouchableNativeFeedback, View, StyleSheet } from 'react-native';
import { Screens, navigate } from "../helpers/Navigation";
import GlobalStyles from '../constants/GlobalStyles';

type Props = {
	id: String,
	title: String,
	location: String,
	date: String
};

export default class ConversationItem extends PureComponent<Props> {
	onPress = (id) => {
		navigate(Screens.Conversation, { conversationId: id })
	};

	render() {
		const locationText = `Going To:  ${this.props.location}`;
		const dateText = `Going At:   ${this.props.date}`;

		return (
			<TouchableNativeFeedback onPress={() => this.onPress(this.props.id)}>
				<View style={styles.item}>
					<Text style={[GlobalStyles.header, { marginBottom: 16 }]}>{this.props.title}</Text>
					<Text style={[GlobalStyles.body, { marginBottom: 4 }]}>{locationText}</Text>
					<Text style={GlobalStyles.body}>{dateText}</Text>
				</View>
			</TouchableNativeFeedback>
		)
	}
}

const styles = StyleSheet.create({
	item: {
		padding: 24,
		alignContent: "center",
		backgroundColor: "white"
	}
});