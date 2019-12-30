import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';


const initialState = {};

const middleware = [thunk];

// takes in 1. root reducer, 2. initial state, and then 3. any enhancers
const store = createStore(rootReducer, initialState, 
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )); //spread operator, so takes in all array value of middleware

export default store;