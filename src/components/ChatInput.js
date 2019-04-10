import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { IconButton } from 'react-native-paper';

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
				<TextInput
					style={styles.textInput}
					placeholder="Send a message..."
					onChangeText={(text) => this.setState({ text })}
					value={this.state.text}
				/>
				<IconButton
					icon="send"
					color="blue"
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
		paddingLeft: 24,
		paddingRight: 24,
		paddingTop: 12,
		paddingBottom: 12,
		borderColor: "gray",
		justifyContent: "center",
		borderWidth: 1
	},
	textInput: {
		height: 40,
		width: "90%",
		borderColor: "gray",
		borderWidth: 1,
		marginEnd: 8
	}
});