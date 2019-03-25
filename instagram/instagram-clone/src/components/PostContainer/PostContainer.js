import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

function PostContainer(props) {
    console.log(props);
    return (
        <div>
            <h1>Post Container</h1>
            {props.data.map((user) => (
                <div key={user.id}>
                    <img src={user.thumbnailUrl}/>
                    <h1>{user.username}</h1>
                    <img src={user.imageUrl}/>
                    <CommentSection data={props}/>
                </div>
            ))}
        </div>
    )
}

export default PostContainer;