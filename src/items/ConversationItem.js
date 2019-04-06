import React, { PureComponent } from 'react';
import {
	Text, TouchableNativeFeedback, View
} from 'react-native';
import { Screens, navigate } from "../helpers/Navigation";

export default class ConversationItem extends PureComponent {
	onPress = () => {
		navigate(Screens.Conversation)
	};

	render() {
		return (
			<TouchableNativeFeedback onPress={() => this.onPress()}>
				<View style={{ padding: 24, alignContent: "center" }}>
					<Text>{this.props.title}</Text>
				</View>
			</TouchableNativeFeedback>
		)
	}
}