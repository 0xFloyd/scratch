https://www.youtube.com/watch?v=93p3LxR9xfM&t=532s

create-react-app 

create "components" folder in src folder. for react components 

install ES7 React/Redux/GraphQL/React-Native snippets  VSCode extension 

rcc <tab> --> creates class component react 
rfc <tab> --> react functional component 

create Posts react component 

when component mounts, we want to make request to API to fetch our posts. we'll put this into lifecycle method called "componentDidMount". This runs right away when component mounts 

we then fetch from random internet API:
fetch(fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => console.log(json)))

we then want to put this information into our components state. but we havent implemented redux yet, so we cant put it into app state. so we create constructor in app component to temporarily hold state until we implement redux  

then, add setState to componentDidMount. add these psots to state. now we need to add this to our render.

create variable postItems in render method 
map through the posts array. each div needs "key" or react will complain

Now we create a Postform component. value of form elements is state. and each form element needs an onChange event so they can handle input (typing doesnt work without this)

Now we have to bind the onChange event to the constructor 
 this.onChange = this.onChange.bind(this);

then create onChange event function 

onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }
this sets the name of the target (where user is typing) to the value thats typed 

Go to devtools in firefox. click the >> and select components. here you can see the state, which changes as you type

now we need to handle formsubmit 
add onsubmit to form 

bind on submit event 

create post object, grabbing current state, then send post request (with headers so it knows what type of data its getting). then stringify the the data we're sending 

 fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },

            body: JSON.stringify(post)
        })
        .then(res => res.json())
        .then(data => console.log(data));
    }

# Now we implement REDUX. 23:19
We need redux because we want our post we add to be added to the "posts" component, which is a completely seperate compoenent.
We also want to fetch our posts from a post "action" file

actions: submit psot form, fetch posts on page, 
then we have reducers,

reducers: define our state thats sent back based on action

remmber, redux has nothing to do with react. we use react-redux library. we also want redux-thunk which is middleware that allows us to access dispact method so we can make asynchronous calls for our actions 

we need to bring in a "provider", which is basically the glue for react and redux 
import { Provider } from 'react-redux';

then we need to wrap everything in main app in provider component. it goe sin return method 

provider takes the store. the store holds the state of the app 
 <Provider store={store}>

First, we create store with createStore function
we create a spereate store.js file in src folder (theres a million ways to do react/ redux things, this is one way)
import { createStore, applyMiddleware } from 'redux';

// takes in 1. root reducer, 2. initial state, and then 3. any enhancers
const store = createStore(rootReducer, initialState,  applyMiddleware(...middleware)); //spread operator, so takes in all array value of middleware

now we create folder for our reducers in src 
rootReducer goes in index.js file in reducers folder 

# this is alot of boilerplate. but dont let this bother you. 

create postReducer in reducers folder 
// evaluates any actions such as fetching psots, creates new posts

Actions are plain JavaScript objects.
for actions we create "types" 
Actions must have a type property that indicates the type of action being performed. 

const ADD_TODO = 'ADD_TODO'
{
  type: ADD_TODO,
  text: 'Build my first Redux app'
}

create "actions" folder in src
then create file called "types.js" in actions folder

after this (in postREducer file) our reducer is ready to take in some types.

now let's create our actions (postActions.js in actions folder)

each action creator is going to be a function we export 
we pass in dispatch. dispatch is kind of like a promise. this is where we create our fetch

Now, head to posts component. we can take our componentDidMount and constructor, because w're now using redux to get state and FETCH. instead of this.setState, we want to dispatch the data to the reducer.

So, we create a new case FETCH_POSTS (in postReducer.js), which takes in action data. now we need to pass this to react component 

import { connect } from 'react-redux';
this connects react components to redux store
we also need to import the fetchPosts action in Posts.js react component 
import { fetchPosts } from '../actions/postActions';

Now, in order to connect, we cant just export react component, we need to connect. 

once fetch completes, we now need to get the new items from the state and put them in the component. 



You should be adding props to prop type in react

add redux devtools to firefox. however, we need to implement this into our application for it to work. we bring it into store.js file as enhancer as 'compose'

import { createStore, applyMiddleware, compose } from 'redux';

const store = createStore(rootReducer, initialState, 
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )); //spread operator, so takes in all array value of middleware
