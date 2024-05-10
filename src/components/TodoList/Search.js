import React from "react";
import Style from "../css/TodoApp.module.css";

const Search = ({ handleSearchTextChange }) => {
  return (
    <div>
      <input
        type="text"
        onChange={handleSearchTextChange}
        className={Style.search_input}
        placeholder="검색해주세요"
      />
    </div>
  );
};

export default Search;
