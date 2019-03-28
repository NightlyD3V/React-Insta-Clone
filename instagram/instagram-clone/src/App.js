import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostPage from './components/PostContainer/PostPage';
import withAuthentication from './components/Authentication/Authentication';
import LoginPage from './components/LoginPage/LoginPage';

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

  //localStorage.length === 0 ? dummyData : JSON.parse(localStorage.getItem('posts')),
  componentDidMount = () => {
    window.AOS.init();
    this.setState({
      data: dummyData,
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
    // const dummyDataCopy = this.state.data.slice();
    // localStorage.setItem('posts', JSON.stringify(dummyDataCopy));
  }

  // Handles changes for SearchBar
  handleChanges = (event) => {
    //console.log(dummyData);
    //console.log('You hit the search bar');  
    const filtered = this.state.filteredData.filter((post) => post.username.includes(this.state.search)); 
    this.setState({
      [event.target.name] : event.target.value,
      data: filtered,
    })
    if(event.target.value === "") {
      this.setState({
        data: dummyData,
      })
    } 
    //console.log(this.state.search);
  }

  render() {
    //console.log(this.state.filteredData);
    //console.log(this.state.data);
    return (
      <div className="App">
        <ComponentFromWithAuthentication
          data={this.state.data}
          comment={this.state.comment}
          filteredData={this.state.filteredData}
          search={this.state.search}
          addNewComment={this.addNewComment}
          handleChanges={this.handleChanges}
        />
      </div>
    );
  }
}

const ComponentFromWithAuthentication = withAuthentication(PostPage)(LoginPage);

export default App;
