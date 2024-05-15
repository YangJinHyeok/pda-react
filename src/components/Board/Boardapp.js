import React, { useEffect, useState } from "react";
import Style from "../css/Board.module.css";

export default function Boardapp() {
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setList(json));
  }, []);

  const handleDelete = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditTitle(list[index].title);
  };

  const handleSave = (index) => {
    const updatedList = [...list];
    updatedList[index].title = editTitle;
    setList(updatedList);
    setEditIndex(null);
    setEditTitle("");
  };

  const handleCancel = () => {
    setEditIndex(null);
    setEditTitle("");
  };

  return (
    <div className={Style.background}>
      <ul>
        {list.map((item, index) => (
          <li key={index} className={Style.card}>
            {editIndex === index ? (
              <div className={Style.edit_input}>
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className={Style.input}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/img/confirm.png`}
                  className={Style.saveButton}
                  alt="confirm"
                  onClick={() => handleSave(index)}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/img/cancel.png`}
                  className={Style.cancelButton}
                  alt="cancel"
                  onClick={handleCancel}
                />
              </div>
            ) : (
              <div className={Style.modern_input}>
                <div className={Style.title}>{item.title}</div>
                <img
                  src={`${process.env.PUBLIC_URL}/img/edit.png`}
                  className={Style.editButton}
                  alt="edit"
                  onClick={() => handleEdit(index)}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/img/delete.png`}
                  className={Style.deleteButton}
                  alt="delete"
                  onClick={() => handleDelete(index)}
                />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
