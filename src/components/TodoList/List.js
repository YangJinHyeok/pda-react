import React from "react";
import Style from "../css/TodoApp.module.css";

const List = ({ text, color }) => {
    return <div className={Style.list} style={{ backgroundColor: color }}>{text}</div>;
};

export default List;
