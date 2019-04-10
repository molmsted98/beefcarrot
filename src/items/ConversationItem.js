// @flow
import React, { PureComponent } from 'react';
import {
	Text, TouchableNativeFeedback, View
} from 'react-native';
import { Screens, navigate } from "../helpers/Navigation";

type Props = {
	id: string,
	title: string
};

export default class ConversationItem extends PureComponent<Props> {
	onPress = (id) => {
		navigate(Screens.Conversation, { conversationId: id })
	};

	render() {
		return (
			<TouchableNativeFeedback onPress={() => this.onPress(this.props.id)}>
				<View style={{ padding: 24, alignContent: "center" }}>
					<Text>{this.props.title}</Text>
				</View>
			</TouchableNativeFeedback>
		)
	}
}