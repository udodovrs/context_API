import { createStore, combineReducers, applyMiddleware } from 'redux';
import { todosReducer } from './redusers/todos-reducer';
import { assistReducer } from './redusers/assist-reducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({
	todosState: todosReducer,
	assitState: assistReducer,
});

export const store = createStore(reducer, applyMiddleware(thunk));




