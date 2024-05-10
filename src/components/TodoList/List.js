import React from "react";
import Style from "../css/TodoApp.module.css";

const List = ({ text, color }) => {
    return(
        <div className={Style.list} style={{ backgroundColor: color }}>
            <p>{text}</p>
            <button className={Style.modify_button}></button>
            <button className={Style.delete_button}></button>
        </div>
    )
};

export default List;