// @flow
import React, { PureComponent } from 'react';
import { Text, TouchableNativeFeedback, View, StyleSheet } from 'react-native';
import { Screens, navigate } from "../helpers/Navigation";

type Props = {
	id: String,
	title: String
};

export default class ConversationItem extends PureComponent<Props> {
	onPress = (id) => {
		navigate(Screens.Conversation, { conversationId: id })
	};

	render() {
		return (
			<TouchableNativeFeedback onPress={() => this.onPress(this.props.id)}>
				<View style={styles.item}>
					<Text>{this.props.title}</Text>
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