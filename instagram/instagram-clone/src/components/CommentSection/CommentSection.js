import React from 'react';
import Comments from '../Comments/Comments';
import PropTypes from 'prop-types';
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

CommentSection.propTypes = {
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

export default CommentSection;