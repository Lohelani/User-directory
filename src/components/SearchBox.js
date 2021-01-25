import React from "react";

function SearchBox(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleSearchChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search For a User"
          id="search"
        />
        <br />
        <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBox;