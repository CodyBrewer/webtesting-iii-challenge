import {createStore, compose} from 'redux'
import rootReducer from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = state => createStore(rootReducer, state, composeEnhancers());

export default store;