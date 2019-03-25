import React from 'react';
import './Comment.css';

function Comments(props) {
    //console.log(props.comment)
    return (
        <div>
            {props.comment.data.map((comment) => (
                <div key={comment.id}>
                    <div className="comment">
                        <p className="user-name">{comment.username}</p>
                        <p>{comment.text}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Comments;