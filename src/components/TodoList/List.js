import React, { useState } from "react";
import Style from "../css/TodoApp.module.css";
import deleteIcon from './delete.png';
import fixIcon from './fix.png';
import cancelIcon from './cancel.png';
import confirmIcon from './confirm.png';

const List = ({ id, text, color, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    onUpdate(id, editText);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditText(text);
  };

  const handleInputChange = (e) => {
    setEditText(e.target.value);
  };

  return (
    <div className={Style.list} style={{ backgroundColor: color }}>
      {isEditing ? (
        <div className={Style.editMode}>
          <input
            type="text"
            value={editText}
            onChange={handleInputChange}
            autoFocus
            className={Style.editI}
          />
          <img src={confirmIcon} className={Style.confirm_button} alt="confirm" onClick={handleSave} />
          <img src={cancelIcon} className={Style.cancel_button} alt="cancel" onClick={handleCancel} />
        </div>
      ) : (
        <div className={Style.modernMode}>
          <p>{text}</p>
          <img src={fixIcon} className={Style.modify_button} alt="fix" onClick={handleEdit} />
          <img src={deleteIcon} className={Style.delete_button} alt="delete" onClick={() => onDelete(id)} />
        </div>
      )}      
    </div>
  );
};

export default List;
