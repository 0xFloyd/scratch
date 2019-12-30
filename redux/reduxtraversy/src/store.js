import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

// takes in 1. root reducer, 2. initial state, and then 3. any enhancers
const store = createStore(rootReducer, initialState, applyMiddleware(...middleware)); //spread operator, so takes in all array value of middleware

export default store;