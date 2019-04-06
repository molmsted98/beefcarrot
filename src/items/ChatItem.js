import React, { PureComponent } from 'react';
import {
	Text, View
} from 'react-native';

export default class ChatItem extends PureComponent {
	render() {
		return (
			<View style={{ padding: 24, alignContent: "center" }}>
				<Text>{this.props.title}</Text>
			</View>
		)
	}
}