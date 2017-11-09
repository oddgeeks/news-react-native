import { createStore, combineReducers, applyMiddleware } from 'redux'
import rootReducer from '../reducer'
import thunk from 'redux-thunk'

const middleware =[thunk]

export default function configureStore(initialState) {
	return createStore(
		rootReducer,
		initialState,
		applyMiddleware(...middleware)
	);
}