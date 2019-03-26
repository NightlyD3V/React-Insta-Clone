import React from 'react';
import PropTypes from 'prop-types';
import './Comments.css';

function Comments(props) {
    //console.log(props.comment)
    return (
        <div>
            {props.comment.data.map((comment) => (
                <div key={comment.id}>
                    <div className="comment">
                        <p className="user-name">{comment.username}</p>
                        <p className="comment-text">{comment.text}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

Comments.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        ImageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string,
            username: PropTypes.string,
            text: PropTypes.string,
        })),
    })),
}

export default Comments;