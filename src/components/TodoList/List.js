import React from "react";
import Style from "../css/TodoApp.module.css";
import deleteIcon from './delete.png';
import fixIcon from './fix.png';


const List = ({key, text, color, onDelete }) => {
    return(
        <div className={Style.list} style={{ backgroundColor: color }}>
            <p>{text}</p>
            <img src={fixIcon} className={Style.modify_button} alt="fix"/>
            <img src={deleteIcon} className={Style.delete_button} alt="delete" onClick={onDelete}/>   
            {/* onClick={() => onDelete(key)}는 왜안될까*/}     
               
        </div>
        
    )
};

export default List;