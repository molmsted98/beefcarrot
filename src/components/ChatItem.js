// @flow
import React, { PureComponent } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Colors from "../constants/Colors";
import GlobalStyles from '../constants/GlobalStyles';

type Props = {
	sender: String,
	text: String
}

export default class ChatItem extends PureComponent<Props> {
	render() {
		return (
			<View>
				<Text style={[GlobalStyles.body, styles.sender]}>{this.props.sender}</Text>
				<View style={styles.message}>
					<Text>{this.props.text}</Text>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	sender: {
		marginLeft: 20,
		marginTop: 24
	},
	message: {
		padding: 10,
		flex: 1,
		flexDirection: "row",
		alignSelf: "flex-start",
		borderColor: Colors.border,
		borderWidth: 1,
		marginLeft: 16,
		marginRight: 16,
		borderRadius: 4
	}
});