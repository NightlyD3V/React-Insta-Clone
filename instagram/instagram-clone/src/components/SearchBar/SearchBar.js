import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';
import styled from 'styled-components'
//STYLED-COMPONENTS
const Button = styled.button``;

const SearchBarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    z-index: 1;
    background-color: white;
    width: 100%;
    height: 80px;
    border-bottom: 1px solid lightgrey;
`
//END STYLED-COMPONENTS 

function SearchBar(props) {
    return (
        <SearchBarContainer>
            <div className="search-bar_logo">
                <i className="fab fa-instagram search"></i>
                <div className="instagram-text">Instaclone</div>
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
        </SearchBarContainer>
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