import React, { useEffect, useState } from "react";
import Style from "../css/TodoApp.module.css";
import { HexColorPicker } from "react-colorful";

const List = ({ id, text, color, onDelete, onUpdate, onColor, isAllChecked, isChecked, setisChecked}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [checkedList, setcheckedList] = useState([]);

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

  const activeEnter = (e) => {
    if (e.key === "Enter") {
      handleSave();
    }
  };

  const ColorPicker = () => {
    setShowColorPicker((prevState) => !prevState);
  };

  const handleCheck = () => {
    setisChecked((prevState) => !prevState);
  };

  // const handleAddcheckList = () => {
  //   setisChecked((prevState) => !prevState);
  //   setcheckedList((checkedList) => {
  //     if (checkedList.includes(id)) {
  //       return checkedList.filter((item) => item !== id);
  //     } else {
  //       return [...checkedList, id];
  //     }
  //   });
  // };

  useEffect(() => {
    if (isAllChecked === true) {
      console.log(id);
      setisChecked(true);
      // setcheckedList(allIds);
    } else {
      setisChecked(false);
      setcheckedList([]);
    }
  }, [isAllChecked]);

  const generateGradient = (color) => {
    return `linear-gradient(135deg, ${color}, #FFFFFF)`;
  };

  return (
    <div className={Style.list} style={{ backgroundImage: generateGradient(color) }}>
      {isEditing ? (
        <div className={Style.editMode}>
          <input
            type="text"
            value={editText}
            onChange={handleInputChange}
            autoFocus
            className={Style.editInput}
            onKeyDown={(e) => activeEnter(e)}
          />
          <img
            src={`${process.env.PUBLIC_URL}/img/confirm.png`}
            className={Style.confirm_button}
            alt="confirm"
            onClick={handleSave}
          />
          <img
            src={`${process.env.PUBLIC_URL}/img/cancel.png`}
            className={Style.cancel_button}
            alt="cancel"
            onClick={handleCancel}
          />
        </div>
      ) : (
        <li className={Style.modernMode}>
          {/* <input type="checkbox" className={Style.checkbox} checked={isChecked} onChange={handleCheck} /> */}
          <div className={Style.text_input2}>{text}</div>
          <img
            src={`${process.env.PUBLIC_URL}/img/color.png`}
            onClick={ColorPicker}
            className={Style.colorpicker_button}
            alt="color"
          />
          <img
            src={`${process.env.PUBLIC_URL}/img/edit.png`}
            className={Style.edit_button}
            alt="edit"
            onClick={handleEdit}
          />
          <img
            src={`${process.env.PUBLIC_URL}/img/delete.png`}
            className={Style.delete_button}
            alt="delete"
            onClick={() => onDelete(id)}
          />
        </li>
      )}
      {showColorPicker && (
        <div className={Style.colorPicker}>
          <HexColorPicker onChange={(color) => onColor(id, color)} />
        </div>
      )}
    </div>
  );
};

export default List;
