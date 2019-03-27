import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';

function SearchBar() {
    return (
        <div className="searchbar-container">
            <div className="search-bar_logo">
                <i class="fab fa-instagram search"></i>
                <h1 className="instagram-text">Instaclone</h1>
            </div>
            <input src="" className="search-input" placeholder="Search"></input>
            <div className="search-icons">
                <i class="far fa-compass"></i>
                <i class="far fa-heart"></i>
                <i class="far fa-user"></i>
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