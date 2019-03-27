import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';
import dummyData from '../../dummy-data';

const PostComponent = (props) => {
    console.log("Post component rendered");
    return (
        <div>
            <SearchBar 
            handleChanges={props.handleChanges} 
            post={props.search}
            />
            <PostContainer 
            data={props.data} 
            comment={props.comment} 
            addNewComment={props.addNewComment} 
            liked={props.onHeartClick} 
            />
            <h1>Works</h1>
        </div>
    )
}

export default PostComponent 