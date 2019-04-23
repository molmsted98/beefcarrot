import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import { IconButton } from 'react-native-paper';
import Colors from '../constants/Colors';
import { addMessage } from "../redux/ConversationReducer";

class ChatInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: ""
		};
	}

	sendMessage = (text) => {
		const message = {
			id: "newId",
			text,
			sender: "",
			date: Date()
		};

		this.props.addMessage(message);
		this.textInput.clear();
		this.textInput.blur();
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
						ref={input => this.textInput = input}
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

const mapDispatchToProps = (dispatch) => {
	return {
		addMessage: (message) => {
			dispatch(addMessage(message))
		}
	}
};

export default connect(null, mapDispatchToProps)(ChatInput);

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