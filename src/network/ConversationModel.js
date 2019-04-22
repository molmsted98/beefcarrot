// @flow
import { Component } from 'react';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';
import { ADD_CONVERSATION } from "../redux/ConversationReducer";

const collectionName = 'conversations';

type Props = {
	conversationId: String,
	addConversation: (Document) => {}
};

class ConversationModel extends Component<Props> {
	constructor(props) {
		super(props);

		const { conversationId } = this.props;
		this.ref = firebase.firestore().collection(collectionName).doc(conversationId);
		this.unsubscribe = null;
	}

	componentDidMount() {
		this.unsubscribe = this.ref.onSnapshot(this.onDocumentUpdate)
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	onDocumentUpdate = (documentSnapshot) => {
		if (documentSnapshot.exists) {
			console.log(`Receive document ${documentSnapshot}`);
			this.props.addConversation(documentSnapshot)
		} else {
			// TODO: Log error
		}
	};

	render() {
		return null
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addConversation: (document) => dispatch({
			type: ADD_CONVERSATION,
			conversation: document
		})
	}
};

export default connect(null, mapDispatchToProps)(ConversationModel);