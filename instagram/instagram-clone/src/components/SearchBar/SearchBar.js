import React from 'react';
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

export default SearchBar;