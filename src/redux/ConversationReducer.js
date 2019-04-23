export const FETCH_CONVERSATIONS = {
	CALL: "conversations/FETCH_CONVERSATIONS",
	SUCCESS: "conversations/FETCH_CONVERSATIONS_SUCCESS",
	FAILURE: "conversations/FETCH_CONVERSATIONS_FAILURE"
};

export const ADD_MESSAGE = 'conversations/ADD_CONVERSATION';

export function addMessage(message) {
	return {
		type: ADD_MESSAGE,
		message
	}
}

const mockConversations = {
	"test": {
		id: "test",
		title: "Alex Johnson, Bill Smith, Alice Goodman",
		location: "Rick's American Cafe",
		date: Date(),
		messages: [
			{ id: "1", text: "Message1", creatorId: "1" },
			{ id: "2", text: "Message2", creatorId: "1" },
			{ id: "3", text: "Message1", creatorId: "1" },
			{ id: "4", text: "Message1", creatorId: "2" },
			{ id: "5", text: "Message1", creatorId: "2" },
			{ id: "6", text: "Message1", creatorId: "3" },
			{ id: "7", text: "Message1", creatorId: "3" },
			{ id: "8", text: "Message1", creatorId: "3" }
		]
	},
	"test2": {
		id: "test2",
		title: "Bob Sloan, Derek Peters, Brian Mason",
		location: "Pinball Pete's",
		date: Date(),
		messages: [
			{ id: "1", text: "Hey guys, want to do something tonight?", sender: "Bob Sloan" },
			{ id: "2", text: "Want to do Pinball Pete's?", sender: "Derek Peters" },
			{ id: "3", text: "Yeah, I want to play some Galaga.", sender: "Brian Mason" }
		]
	}
};

const defaultState = {
	conversations: mockConversations
};

export default function conversationReducer(state = defaultState, action) {
	switch (action.type) {
		case FETCH_CONVERSATIONS.CALL:
			return { ...state, loading: true };
		case FETCH_CONVERSATIONS.SUCCESS:
			return { ...state, loading: false, repos: action.payload.data };
		case FETCH_CONVERSATIONS.FAILURE:
			return {
				...state,
				loading: false,
				error: 'Error while fetching repositories'
			};
		case ADD_MESSAGE: {
			const id = "test2";
			const updatedConversation = state.conversations[id];
			const newMessage = action.message;

			updatedConversation.messages.push(newMessage);
			const newConversations = state.conversations;
			newConversations[id] = updatedConversation;

			return {
				...state,
				conversations: newConversations
			}
		}

		default:
			return state;
	}
}
