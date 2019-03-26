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
                    <CommentSection data={user.comments}/>
                </div>
            ))}
        </div>
    )
}

PostContainer.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
    })),
};

export default PostContainer;