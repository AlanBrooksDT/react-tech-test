import React, { useState } from "react";
import "../styles/App.css";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js"

function App() {

  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="App">
      <img className="search-image" src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg" alt="nasa-logo"/>
      <Search setSearchResults={setSearchResults} />
      <SearchResults results={searchResults}/>
    </div>
  );
}

export default App;