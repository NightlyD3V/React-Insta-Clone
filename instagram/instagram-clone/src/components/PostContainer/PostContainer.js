import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import './PostContainer.css';

function PostContainer(props) {
    //console.log(props);
    return (
        <div className="post-container">
            {props.data.map((user) => (
                <div key={user.id} className="post-container_user" data-aos="zoom-in"
                    data-aos-duration="500">
                    <div className="post-user_header">
                        <img src={user.thumbnailUrl} className="user-thumbnail"/>
                        <h3>{user.username}</h3>
                    </div>
                    <img src={user.imageUrl} className="post-image"/>
                    <div className="post-icons">
                        <div onClick={props.liked}><i class="far fa-heart"></i></div>
                        <div><i class="far fa-comment"></i></div>
                    </div>
                    <p className="post-likes">{user.likes} likes</p>
                    <div className="post-comment_container">
                        <CommentSection data={user.comments} addNewComment={props.addNewComment} timestamp={user.timestamp}/>
                        <h5 className="timestamp-text">{user.timestamp}</h5>
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