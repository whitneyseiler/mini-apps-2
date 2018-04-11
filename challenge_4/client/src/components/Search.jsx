import React from 'react';

let Search = ({handleSearch}) => {
    return (
        <div id="search">
          <form>
            <input type="text" placeholder="Search.." className="search"/>
            <button type="submit" onClick={(event) => {handleSearch(event)}}><i className="fa fa-search"></i></button>
          </form>
        </div>
    )
};

export default Search;