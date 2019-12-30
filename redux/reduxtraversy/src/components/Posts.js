import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';


class Posts extends Component {
    
    // action is passed into react props 
    componentDidMount() {
        this.props.fetchPosts();
    }
    
    //runs wehn it receives new prop
    componentWillReceiveProps(nextProps) {
        if (nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost); //unShift adds to beginning of array, not end like push()
        }
    }

    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ));
        
        return (
            <div>
                <h1>Posts</h1>
                { postItems}
            </div>
        )
    }
}


Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
}

//this comes from index.js, which imports from postReducer.js
// we should now have posts in react props 
// state is 'fetchPosts' (which is the all the users posts)
const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item     
})

// fetchPosts just calls fetch API
// two sets of parentheses. first maps state to props, second one is React Component (Posts)
export default connect(mapStateToProps, { fetchPosts })(Posts); 