// @flow

import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';

type Props = {
	title: String
}

export default class ChatItem extends PureComponent<Props> {
	render() {
		return (
			<View style={{ padding: 24, alignContent: "center" }}>
				<Text>{this.props.title}</Text>
			</View>
		)
	}
}