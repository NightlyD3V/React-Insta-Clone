import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';

function SearchBar(props) {
    return (
        <div className="searchbar-container">
            <div className="search-bar_logo">
                <i className="fab fa-instagram search"></i>
                <h1 className="instagram-text">Instaclone</h1>
            </div>
            <form>
                <input 
                    type="text"
                    name="search" 
                    className="search-input" 
                    placeholder="Search"
                    onChange={props.handleChanges}
                    value={props.post}
                    >
                </input>
            </form>
            <div className="search-icons">
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user"></i>
            </div>
        </div>
    )
} 

SearchBar.propTypes = {
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

export default SearchBar;