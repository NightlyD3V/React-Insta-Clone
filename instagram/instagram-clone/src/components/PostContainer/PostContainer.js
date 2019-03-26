import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import './PostContainer.css';

function PostContainer(props) {
    console.log(props);
    return (
        <div className="post-container">
            {props.data.map((user) => (
                <div key={user.id} className="post-container_user">
                    <div className="post-user_header">
                        <img src={user.thumbnailUrl} className="user-thumbnail"/>
                        <h3>{user.username}</h3>
                    </div>
                    <img src={user.imageUrl} className="post-image"/>
                    <div className="post-icons">
                        <i class="far fa-heart"></i>
                        <i class="far fa-comment"></i>
                    </div>
                    <p className="post-likes">{user.likes} likes</p>
                    <div className="post-comment_container">
                        <CommentSection data={user.comments}/>
                    </div>
                </div>
            ))}
        </div>
    )
}

PostContainer.propTypes = {
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
};

export default PostContainer;