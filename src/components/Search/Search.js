import React from "react";
import "./Search.scss";

const Search = ({ handleChange, placeholder }) => {
  return (
    <div className="searchbar">
      <input
        type="search"
        className="search"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
