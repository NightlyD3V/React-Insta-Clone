import React from 'react';
import Comments from '../Comments/Comments';

function CommentSection(props) {
    //console.log(props);
    return (
        <div>
            <Comments comment={props}/>
            <input className="comment-input"></input>
        </div>
    )
}

export default CommentSection;