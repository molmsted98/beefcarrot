// @flow

export type Event = {
	id: String,
	title: String,
	date: Date,
	location: String
}

export const eventList = (state) => {
	return Object.values(state.eventModel.events);
};