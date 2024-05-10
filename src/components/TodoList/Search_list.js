import React from "react";
import Style from "../css/TodoApp.module.css";

const Search_list = ({ text, color }) => {

    const filteredList = text_list.filter((item) =>
        item.text.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return <div className={Style.search_list} style={{ backgroundColor: color }}>{text}</div>;
};

export default Search_list;
