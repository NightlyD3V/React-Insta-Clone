import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';


class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      comment: '',
    }
  }
  
  componentDidMount = () => {
    window.AOS.init();
    this.setState({
      data: dummyData,
    })
  }

  addNewComment = (comment, timestamp) => {
    console.log(this.state.data);
    const commentMatches = this.state.data.slice().filter(data => data.timestamp === timestamp).pop();
    const commentDoesntMatch = this.state.data.slice().filter(data => data.timestamp !== timestamp);
    //console.log(commentMatches && commentDoesntMatch);
    commentMatches.comments.push(comment);
    this.setState({
        comment: '',
    })
  }

  onHeartClick = () => {
    console.log('liked');
  }

  render() {
    return (
      <div className="App">
        <SearchBar/>
        <PostContainer data={this.state.data} comment={this.state.comment} addNewComment={this.addNewComment} liked={this.onHeartClick} />
      </div>
    );
  }
}

export default App;
