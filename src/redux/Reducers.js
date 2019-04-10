import { combineReducers } from 'redux';
import conversationReducer from './ConversationReducer';

const reducers = combineReducers({
	conversationModel: conversationReducer
});

export default reducers;
