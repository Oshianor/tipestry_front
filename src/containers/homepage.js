import React, { Component } from 'react';
import Header from '../components/header/header';
import Post from '../components/post/post';

class Homepage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Post />
      </div>
    )
  }
}
export default Homepage;