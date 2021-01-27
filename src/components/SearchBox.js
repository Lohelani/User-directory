import React from "react";

function SearchBox(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={e => props.handleSearchChange(e)}
          
          name="search"
          type="text"
          className="form-control"
          placeholder="Search For a User"
          id="search"
        />
        <br />
       
      </div>
    </form>
  );
}

export default SearchBox;