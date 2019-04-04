import React, { Component } from 'react';
import {
	Button, View, TouchableWithoutFeedback, Keyboard
} from 'react-native';
import { TextField } from 'react-native-materialui-textfield';
import { Action } from '../helpers/Navigation';

export default class LoginScreen extends Component {
	componentDidMount() {
		this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
	}

	componentWillUnmount() {
		this.keyboardDidHideListener.remove();
	}

	keyboardDidHide = () => {
		if (this.usernameInput.focused) {
			this.usernameInput.blur();
		}
		if (this.passwordInput.focused) {
			this.passwordInput.blur();
		}
	};

	validateInputs = (text) => {
		if (text.contains(" ") || text.length === 0) {
			return
		}
		return '';
	};

	validateAndLogin = () => {
		this.props.navigation.dispatch(Action.Login);
	};

	render() {
		return (
			<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
				<View style={{ flex: 1, justifyContent: 'center', padding: 24 }}>
					<TextField
						ref={(component) => {
							this.usernameInput = component
						}}
						label="Username"
						returnKeyType="next"
						autocorrect="false"
						onSubmitEditing={() => {
							this.passwordInput.focus();
						}}
						onChangeText={text => this.setState({ usernameText: text })}
					/>
					<TextField
						ref={(component) => {
							this.passwordInput = component
						}}
						label="Password"
						autocorrect="false"
						onChangeText={text => this.setState({ passwordText: text })}
					/>

					<View style={{ marginTop: 32 }}>
						<Button
							onPress={() => this.validateAndLogin()}
							title="Login"
						/>
					</View>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}
