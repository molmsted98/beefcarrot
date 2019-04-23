// @flow
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import PlanHeader from '../components/PlanHeader';
import ChatList from '../containers/ChatList';
import ChatInput from '../components/ChatInput';

import { Conversation, conversationForId } from '../models/Conversation';

type Props = {
	conversation: Conversation
}

class ConversationScreen extends Component<Props> {
	render() {
		return (
			<View style={styles.container}>
				<PlanHeader location={this.props.conversation.location} date={this.props.conversation.date} />
				<ChatList data={this.props.conversation.messages} />
				<ChatInput />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "flex-end"
	}
});

const mapStateToProps = (state, ownProps) => {
	const { navigation } = ownProps;
	const conversationId = navigation.getParam('conversationId', 'NO-ID');
	const conversation = conversationForId(state, conversationId);

	return {
		conversationId,
		conversation
	};
};

export default connect(mapStateToProps)(ConversationScreen);
