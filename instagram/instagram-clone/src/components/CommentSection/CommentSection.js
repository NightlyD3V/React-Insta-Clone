import React from 'react';
import Comments from '../Comments/Comments';

function CommentSection(props) {
    //console.log(props);
    return (
        <div>
            <i class="far fa-heart"></i>
            <i class="far fa-comment"></i>
            <Comments comment={props}/>
            <input></input>
        </div>
    )
}

export default CommentSection;