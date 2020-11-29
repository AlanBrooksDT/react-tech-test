import React, { useState } from 'react';
import '../styles/Search.css'
import getImages from '../requests/getImages'

const Search = ({ setSearchResults }) => {

    const [ value, setValue ] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault() //stops app re-rendering at submit
        setSearchResults (await getImages(value));
    };

    return (
        <>
        <form className="search-form" onSubmit={handleSubmit}>
            <input className="search-input" type="text" onChange={(event) => setValue(event.target.value)}  />
            <button className="submit" type="submit">Search</button>
        </form>
        </>
    );
};

export default Search;