import { combineReducers } from 'redux';
import conversationReducer from './ConversationReducer';
import eventReducer from './EventReducer';

const reducers = combineReducers({
	conversationModel: conversationReducer,
	eventModel: eventReducer
});

export default reducers;
