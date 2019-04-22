export const FETCH_CONVERSATIONS = {
	CALL: "conversations/FETCH_CONVERSATIONS",
	SUCCESS: "conversations/FETCH_CONVERSATIONS_SUCCESS",
	FAILURE: "conversations/FETCH_CONVERSATIONS_FAILURE"
};

export const ADD_CONVERSATION = 'conversations/ADD_CONVERSATION';

const mockConversations = {
	"test": {
		id: "test",
		title: "Test Conversation",
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
		title: "Test Conversation 2",
		messages: [
			{ id: "1", text: "Message1", creatorId: "1" },
			{ id: "2", text: "Message2", creatorId: "1" },
			{ id: "3", text: "Message1", creatorId: "1" }
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
		case ADD_CONVERSATION: {
			return addConversations(action.conversation);
		}

		default:
			return state;
	}
}

function addConversations(conversation) {

}