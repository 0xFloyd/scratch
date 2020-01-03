import axios from 'axios';

const STOCK_PRICE = 'STOCK_PRICE';
const NEW_POST = 'NEW_POST';



//this dispatches FETCH_POSTS to the reducer 
// this fetches then dispatches type to the reducer 
// 1. create action function 2. dispact action (in all caps usually)
export function fetchStock() {
    console.log('fetching stock');
    
    return function(dispatch) {
        axios.get('https://cloud.iexapis.com/stable/stock/aapl/quote?token=pk_764a7652cfde425785b349da624c23ac')
        .then(response => {
            console.log('this is axios:', response.data.latestPrice)
        })
        .then(data => dispatch({
            type: STOCK_PRICE,
            payload: data
        }))
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