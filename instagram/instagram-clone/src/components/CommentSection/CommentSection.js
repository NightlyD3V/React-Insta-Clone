import React from 'react';
import Comments from '../Comments/Comments';
import './CommentSection.css';

function CommentSection(props) {
    //console.log(props);
    return (
        <div>
            <Comments comment={props}/>
            <div className="commentSection-input_container">
                <div className="commentSection-input">
                    <input className="comment-input" placeholder="Add a comment..."></input>
                </div>
                <div className="comment-ellipses">
                    <button className="commentSection-button"><i class="fas fa-ellipsis-h"></i></button>
                </div>
            </div>
        </div>
    )
}

export default CommentSection;