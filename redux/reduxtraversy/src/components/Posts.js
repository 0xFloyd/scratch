import React, { Component } from "react";
import PropTypes from "prop-types"; // Runtime type checking for React props and similar objects.
import { connect } from "react-redux";
import { fetchStock } from "../actions/postActions";

class Posts extends Component {
  // action is passed into react props
  componentDidMount() {
    this.props.fetchStock();
  }

  //runs wehn it receives new prop
  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost); //unShift adds to beginning of array, not end like push()
    }
  }

  render() {
    const stockData = this.props.posts.map(post => (
      <div key={post.latestPrice}></div>
    ));

    return (
      <div>
        <h1>Stock</h1>
        {stockData}
      </div>
    );
  }
}

// assign the different props and their types to the component
Posts.propTypes = {
  fetchStock: PropTypes.func.isRequired,
  posts: PropTypes.object.isRequired,
  newPost: PropTypes.object
};

//this comes from index.js, which imports from postReducer.js
// we should now have posts in react props
// state is 'fetchStock' (which is the all the users posts). state is ALWAYS passed into mapStateToProps
/*

As the first argument passed in to connect, mapStateToProps is used 
for selecting the part of the data from the store that the connected component needs. 
It’s frequently referred to as just mapState for short.

*/
const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});

// fetchStock just calls fetch API
// two sets of parentheses. first maps state to props, second one is React Component (Posts)
export default connect(mapStateToProps, { fetchStock })(Posts);
