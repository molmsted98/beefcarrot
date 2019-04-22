// @flow

export type Conversation = {
	id: String,
	title: String,
	location: String,
	date: Date,
	messages: [Message]
}

export type Message = {
	id: String,
	text: String,
	creatorId: String,
	createdAt: Date
}

export const conversationList = (state) => {
	return Object.values(state.conversationModel.conversations);
};

export const conversationForId = (state, conversationId) => {
	return state.conversationModel.conversations[conversationId];
};

