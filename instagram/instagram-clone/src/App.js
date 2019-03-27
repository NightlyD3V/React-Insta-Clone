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
      filteredData: Arrayfrom(data),
    }
  }
  
  componentDidMount = () => {
    window.AOS.init();
    this.setState({
      data: dummyData,
    })
  }

  addNewComment = (comment, id) => {
    console.log(this.state.data);
    const commentMatches = this.state.data.slice().filter(data => data.id === id).pop();
    console.log(commentMatches);
    //commentMatches.comments.push(comment);
    this.setState({
        comment: '',
    })
  }

  componentDidUpdate(prevProps, PrevState) {

  }
  onHeartClick = () => {
    console.log('liked');
    let likes = this.state.data.likes + 1;
    this.setState({
      data: likes,
    })
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
