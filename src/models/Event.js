// @flow

export type Event = {
	id: String,
	title: String,
	date: Date,
	location: String
}

export const featuredEvent = (state) => {
	return Object.values(state.eventModel.featuredEvent);
}

export const eventList = (state) => {
	return Object.values(state.eventModel.events);
};