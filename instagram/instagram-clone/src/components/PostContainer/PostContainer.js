import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import './PostContainer.css';

function PostContainer(props) {
    console.log(props);
    return (
        <div className="post-container">
            <h1>Post Container</h1>
            {props.data.map((user) => (
                <div key={user.id} className="post-container_user">
                    <div className="post-user_header">
                        <img src={user.thumbnailUrl} className="user-thumbnail"/>
                        <h1>{user.username}</h1>
                    </div>
                    <img src={user.imageUrl} className="post-image"/>
                    <p>{user.likes}</p>
                    <CommentSection data={user.comments}/>
                </div>
            ))}
        </div>
    )
}

// PostContainer.proptypes = {
//     data: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.string,
//     })),
// };

export default PostContainer;