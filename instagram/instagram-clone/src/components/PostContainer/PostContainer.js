import React from 'react';

function PostContainer(props) {
    console.log(props);
    return (
        <div>
            <h1>Post Container</h1>
            {props.data.map((user) => (
                <div key={user.id}>
                    <h1>{user.username}</h1>
                    <img src={user.imageUrl}/>
                </div>
            ))}
        </div>
    )
}

export default PostContainer;