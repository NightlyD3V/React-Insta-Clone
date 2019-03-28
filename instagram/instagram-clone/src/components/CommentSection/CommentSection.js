import React from 'react';
import Comments from '../Comments/Comments';
import PropTypes from 'prop-types';
import './CommentSection.css';
import dummyData from '../../dummy-data';
import { Button } from 'reactstrap';


class CommentSection extends React.Component {
    constructor() {
        super();
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
            username: "Tyler",
            text: this.state.comment,
            id: Date.now().toString(),
        };
        let id = this.props.id;
        this.props.addNewComment(newComment, id);
    }

    render() {
        console.log("CommentSection rendered");
        console.log(JSON.parse(localStorage.getItem('UserData')));
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
                        <Button outline className="commentSection-button"><i className="fas fa-ellipsis-h"></i></Button>
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