import { FETCH_POSTS, NEW_POST } from './types';


//this dispatches FETCH_POSTS to the reducer 
// this fetches then dispatches type to the reducer 
export function fetchPosts() {
    console.log('fetching posts');
    
    return function(dispatch) {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        }));
    }
} 

// since this is post request, postData gets passed into function
export const createPost = postData => dispatch =>{
    console.log('create post fetch');
    
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },

        body: JSON.stringify(postData)
    })
    .then(res => res.json())
    .then(post => dispatch({
        type: NEW_POST,
        payload: post
    }));
} 