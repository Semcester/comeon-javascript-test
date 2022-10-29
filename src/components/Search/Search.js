import React, { useState, useEffect, useRef } from "react";
import SearchText from "../../hooks/useSearchTerm";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState();
  const { getText } = SearchText();

  const searchRef = useRef();

  useEffect(() => {
    getText(searchTerm);
  }, [searchTerm]);

  return (
    <div className="four wide column">
      <div className="search ui small icon input ">
        <input
          type="text"
          placeholder="Search Game"
          onChange={(e) => setSearchTerm(e.target.value)}
          ref={searchRef}
        />
        <i className="search icon"></i>
      </div>
    </div>
  );
};

export default Search;
