// @flow
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import ConversationList from '../containers/ConversationList';
import { Conversation, conversationList } from '../models/Conversation';
import Colors from '../constants/Colors';

type Props = {
	conversations: [Conversation]
}

class ConversationListScreen extends Component<Props> {
	render() {
		return (
			<View style={styles.container}>
				<ConversationList data={this.props.conversations} />
			</View>
		);
	}
}

const mapStateToProps = (state) => {
	const conversations = conversationList(state);
	return {
		conversations
	}
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.screen
	}
});

export default connect(mapStateToProps)(ConversationListScreen);