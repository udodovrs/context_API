import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { todosReducer } from './redusers/todos-reducer';
import { assistReducer } from './redusers/assist-reducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({
	todosState: todosReducer,
	assitState: assistReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));






