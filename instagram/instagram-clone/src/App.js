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
      filteredData: [],
      search: '',
    }
  }
  
  componentDidMount = () => {
    window.AOS.init();
    this.setState({
      data: localStorage.length === 0 ? dummyData : JSON.parse(localStorage.getItem('posts')),
      filteredData: dummyData,
    })
  }
  

  // Adds new comment to post
  addNewComment = (comment, id) => {
    //console.log(this.state.data);
    const commentMatches = this.state.data.slice().filter(data => data.id === id).pop();
    //console.log(commentMatches);
    commentMatches.comments.push(comment);
    this.setState({
        comment: '',
    })
    const dummyDataCopy = this.state.data.slice();
    localStorage.setItem('posts', JSON.stringify(dummyDataCopy));
  }

  // Handles changes for SearchBar
  handleChanges = (event) => {
    //console.log('You hit the search bar');  
    // this.state.search.length === 0 ? return '' : null;
    const filtered = this.state.filteredData.filter((post) => post.username.includes(this.state.search)); 
    this.setState({
      [event.target.name] : event.target.value,
      data: filtered,
    })
    if(event.target.value.length === 0) {
      this.setState({
        data: dummyData,
      })
    }
    console.log(this.state.search);
  }

  render() {
    console.log(this.state.filteredData);
    console.log(this.state.data);
    return (
      <div className="App">
        <SearchBar 
          handleChanges={this.handleChanges} 
          post={this.state.search}
        />
        <PostContainer 
          data={this.state.data} 
          comment={this.state.comment} 
          addNewComment={this.addNewComment} 
          liked={this.onHeartClick} 
        />
      </div>
    );
  }
}

export default App;
