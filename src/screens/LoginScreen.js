import React, { Component } from 'react';
import {
  Text, Button, View
} from 'react-native';
import { Action } from '../helpers/Navigation';

export default class LoginScreen extends Component {

  validateAndLogin = () => {
    this.props.navigation.dispatch(Action.Login);
  };

  render() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Login</Text>
          <Button
              onPress={() => this.validateAndLogin()}
              title="Login"
          />
        </View>
    );
  }
}
