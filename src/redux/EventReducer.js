const mockEvents  = {
	"sdfsdf": {
		id: "sdfsdf",
		title: "Rick's Karaoke Night",
		date: Date(),
		location: "Rick's American Cafe"
	},
	"12345": {
		id: "12345",
		title: "Skeeps Dart Tournament",
		date: Date(),
		location: "Scorekeepers"
	}
};

const defaultState = {
	events: mockEvents
};

export default function eventReducer(state = defaultState, action) {
	switch (action.type) {
		default:
			return state;
	}
}