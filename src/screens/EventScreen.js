import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View
} from 'react-native';
import GlobalStyles from '../constants/GlobalStyles';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu',
});

export default class EventScreen extends Component {
  render() {
    return (
        <View style={GlobalStyles.container}>
          <Text style={styles.welcome}>Welcome to React Testing!</Text>
          <Text style={styles.instructions}>To get started, edit App.js</Text>
          <Text style={styles.instructions}>{instructions}</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
