// @flow

import React, { Component } from 'react';
import {
	View
} from 'react-native';
import { connect } from 'react-redux';
import ConversationList from '../containers/ConversationList';
import { Conversation, conversationList } from '../models/Conversation';

type Props = {
	conversations: [Conversation]
}

class ConversationListScreen extends Component<Props> {
	render() {
		return (
			<View>
				<ConversationList data={this.props.conversations} />
			</View>
		);
	}
}

const mapStateToProps = (state) => {
	const conversations = conversationList(state);
	console.log(conversations);
	return {
		conversations
	}
};

export default connect(mapStateToProps)(ConversationListScreen);