import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import './PostContainer.css';

class PostContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            liked: false,
        }
    }
    
    componentDidMount = () => {
        window.AOS.init();
        this.setState({
          data: this.props.data,
          filteredData: this.props.data,
        })
      }

    //console.log(props);
    render() {
        console.log("PostContainer rendered");
        return (
            <div className="post-container">
                {this.props.data.map((user) => (
                    <div key={user.id} className="post-container_user" data-aos="zoom-in"
                        data-aos-duration="500">
                        <div className="post-user_header">
                            <img src={user.thumbnailUrl} className="user-thumbnail" alt="User"/>
                            <h3>{user.username}</h3>
                        </div>
                        <img src={user.imageUrl} className="post-image" alt="Post"/>
                        <div className="post-icons">
                            <div onClick={() => this.setState({liked: !this.state.liked})}><i className='far fa-heart like'></i></div>
                            <div><i className="far fa-comment"></i></div>
                        </div>
                        <p className="post-likes">{this.state.liked === false ? user.likes : user.likes + 1} likes</p>
                        <div className="post-comment_container">
                            <CommentSection 
                                data={user.comments} 
                                addNewComment={this.props.addNewComment} 
                                id={user.id}
                            />
                            <h5 className="timestamp-text">{user.timestamp}</h5>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
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