import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import Colors from '../constants/Colors';

export default class ChatInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: ""
		};
	}

	sendMessage = (text) => {
		console.log(text)
	};

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.textWrapper}>
					<TextInput
						style={styles.textInput}
						placeholder="Send a message..."
						onChangeText={(text) => this.setState({ text })}
						value={this.state.text}
					/>
				</View>
				<IconButton
					icon="send"
					color={Colors.colorPrimary}
					size={20}
					onPress={() => this.sendMessage(this.state.text)}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		width: "100%",
		paddingLeft: 20,
		paddingRight: 28,
		paddingTop: 12,
		paddingBottom: 12,
		borderColor: Colors.border,
		alignItems: "center",
		elevation: 8,
		backgroundColor: "white"
	},
	textWrapper: {
		borderColor: Colors.divider,
		borderWidth: 1,
		borderRadius: 8,
		width: "90%",
		height: 40,
		marginEnd: 8
	},
	textInput: {
		marginHorizontal: 8
	}
});