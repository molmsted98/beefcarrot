import React, { PureComponent } from 'react';
import {
	Text, TouchableNativeFeedback, View
} from 'react-native';

export default class ConversationItem extends PureComponent {

	onPress = () => {
		console.log(this.props.id)
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