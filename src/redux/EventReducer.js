const featuredEvent = {
	"beefcarrot": {
		id: "beefcarrot",
		title: "Music Matters - A$AP Ferg",
		date: Date(),
		location: "Hill Auditorium",
		people: ["Neil Austin, Trevor Patel, Denzel Drake"]
	}
};

const mockEvents  = {
	"sdfsdf": {
		id: "sdfsdf",
		title: "Rick's Karaoke Night",
		date: Date(),
		location: "Rick's American Cafe",
		people: ["Alex Johnson, Bill Smith, Alice Goodman"]
	},
	"12345": {
		id: "12345",
		title: "Skeeps Dart Tournament",
		date: Date(),
		location: "Scorekeepers",
		people: ["Tay Keith, Steven Spangler, Sarah Spellman"]
	}
};

const defaultState = {
	featuredEvent,
	events: mockEvents
};

export default function eventReducer(state = defaultState, action) {
	switch (action.type) {
		default:
			return state;
	}
}