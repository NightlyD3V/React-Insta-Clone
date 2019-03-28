import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

const PostComponent = (props) => {
    console.log("PostPage component rendered");
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
        </div>
    )
}

export default PostComponent 