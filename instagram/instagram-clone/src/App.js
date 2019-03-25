import React, { Component } from 'react';
import './App.css';
import DummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import CommentContainer from './components/CommentSection/CommentSection';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: DummyData,
    }
  }
  render() {
    return (
      <div className="App">
        <SearchBar/>
        <PostContainer data={this.state.data}/>
        <CommentContainer />
      </div>
    );
  }
}

export default App;
