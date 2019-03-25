import React from 'react';
import Comments from '../Comments/Comments';
import './CommentSection.css';

function CommentSection(props) {
    //console.log(props);
    return (
        <div>
            <Comments comment={props}/>
            <input className="comment-input" placeholder="Add comment"></input>
        </div>
    )
}

export default CommentSection;