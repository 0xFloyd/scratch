// evaluates any actions such as fetching posts, creates new posts
import { FETCH_POSTS, NEW_POST } from '../actions/types';

// posts that come in from action. posts, and new single post 
const initialState = {
    items: [], 
    item: {}
}

// action has to have a type. this is what we're evaluating 
// action.type represents one of the types imported. they may also have a payload
export default function(state = initialState, action) {
    switch(action.type) {
        default: 
            return state;
    }
}