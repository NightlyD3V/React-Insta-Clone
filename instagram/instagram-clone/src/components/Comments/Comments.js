import React from 'react';

function Comments(props) {
    //console.log(props.comment)
    return (
        <div>
            {props.comment.data.map((comment) => (
                <div key={comment.id}>
                    <p>{comment.username}{comment.text}</p>
                </div>
            ))}
        </div>
    )
}

export default Comments;