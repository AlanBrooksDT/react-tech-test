import React from 'react';
import "../styles/SearchResults.css";

const SearchResults = ({ results }) => {
    if (!results.length) {
        return <p>No Results</p>
    } else {
    return (
    <>
    <p className="search-results-text">Search Results</p>
        {results.map((image) => (
            <img 
            className="search-image" 
            src={image}
            alt="result"
            />
        ))}
    </>
    );
    };
};

export default SearchResults;