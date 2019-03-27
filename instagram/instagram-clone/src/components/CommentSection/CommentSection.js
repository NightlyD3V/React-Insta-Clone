import React from 'react';
import Comments from '../Comments/Comments';
import PropTypes from 'prop-types';
import './CommentSection.css';
// import PostContainer from '../PostContainer/PostContainer';
import dummyData from '../../dummy-data';


class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           data: dummyData.map(object => object.comments), 
           comment: '',
        }
        //console.log(props.addNewComment);
        //console.log(this.props);
    }
    //console.log(props);

    handleChanges = (event) => {
        this.setState({
            [event.target.name] : event.target.value,
        })
    }

    addComment = (event) => {
        event.preventDefault();
        const newComment = {
            username: 'random',
            text: this.state.comment,
            id: Date.now().toString(),
        };
        let id = this.props.id;
        this.props.addNewComment(newComment, id);
    }

    render() {
        return (
            <div>
                <Comments comment={this.props} />
                <div className="commentSection-input_container">
                    <form onSubmit={this.addComment} className="commentSection-input">
                        <input 
                            type="text" 
                            name="comment" 
                            value={this.state.comment} 
                            onChange={this.handleChanges} 
                            className="comment-input" 
                            placeholder="Add a comment..."
                            >
                        </input>
                    </form>
                    <div className="comment-ellipses">
                        <button className="commentSection-button"><i class="fas fa-ellipsis-h"></i></button>
                    </div>
                </div>
            </div>
        )
    }
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