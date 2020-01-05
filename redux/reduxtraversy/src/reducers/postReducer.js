// evaluates any actions such as fetching posts, creates new posts
import { FETCH_POSTS, NEW_POST } from "../actions/types";

// posts that come in from action. posts, and new single post
const initialState = {
  items: [],
  item: {},
  author: ""
  user: user
};

// action has to have a type. this is what we're evaluating
// action.type represents one of the types imported. they may also have a payload (in this case, posts)
// action.payload is the posts data from the action (postAction.js) which fetched the data
export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      console.log("FETCH POST reducer");
      return {
        ...state,
        items: action.payload
      };

    // fetches new item and pushes it to react posts component props
    case NEW_POST:
      console.log("NEW POST reducer");
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}
