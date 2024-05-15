import React, { useEffect, useState } from "react";
import Color from "./Color";
import Input from "./Input";
import List from "./List";
import Search from "./Search";
import Select from "./Select";
import Style from "../css/TodoApp.module.css";
import { v4 as uuidv4 } from "uuid";

export default function TodoApp() {
  const colors = [
    "#ffb4bf",
    "#FBD5B0",
    "#FFFFB5",
    "#E1E7E7",
    "#D1EAF5",
    "#789CCE",
    "#A374DB",
  ];
  const [text, setText] = useState("");
  const [selectedColor, setSelectedColor] = useState("#FFFFFF");
  const [text_list, setText_list] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredTextList, setFilteredTextList] = useState([]);
  const [isAllChecked, setisAllChecked] = useState(false);
  const [isChecked, setisChecked] = useState(false);

  useEffect(() => {
    const storedTextList = JSON.parse(localStorage.getItem("text_list"));
    if (storedTextList) {
      setText_list(storedTextList);
    }
  }, [])                        ;

  useEffect(() => {
    localStorage.setItem("text_list", JSON.stringify(text_list));
  }, [text_list]);

  const handleSearchTextChange = (e) => {
    const searchText = e.target.value;
    setSearchText(searchText);
    filterTextList(searchText);
  };

   const filterTextList = (searchText) => {
    const filteredList = text_list.filter((item) =>
      item.text.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredTextList(filteredList);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleListColorChange = (id, color) => {
    const updatedList = text_list.map((item) => {
      if (item.id === id) {
        return { ...item, color: color };
      }
      return item;
    });
    setText_list(updatedList);
  };
  

  const handleDeleteItem = (id) => {
    const newList = text_list.filter((item) => item.id !== id);
    setText_list(newList);
  };

  const handleUpdateItem = (id, newText) => {
    const updatedList = text_list.map((item) => {
      if (item.id === id) {
        return { ...item, text: newText };
      }
      return item;
    });
    setText_list(updatedList);
  };

  const handleInputButtonClick = () => {
    if (text === "") {
      alert("내용을 입력해주세요");
    } else {
      const newItem = { id: uuidv4(), text: text, color: selectedColor, isChecked: isChecked};
      setText_list([...text_list, newItem]);
      setText("");
      setSelectedColor("#FFFFFF");
    }
  };

  const handleTextChange = (e) => {
    const inputText = e.target.value;
    setText(inputText);
  };

  const activeEnter = (e) => {
    if (e.key === "Enter") {
      handleInputButtonClick();
    }
  };

  const handleisAllChecked = () => {
    setisAllChecked(prevState => !prevState);
  }

  return (
    <div className={Style.parent}>
      <Input
        text={text}
        setText={setText}
        handleInputButtonClick={handleInputButtonClick}
        handleTextChange={handleTextChange}
        activeEnter={activeEnter}
        selectedColor={selectedColor}
      />
      <Search handleSearchTextChange={handleSearchTextChange} />
      <Color colors={colors} handleColorChange={handleColorChange} />
      {/* <Select handleisAllChecked={handleisAllChecked}/> */}
      <div className={Style.all_list}>
        {searchText !== ""
          ? filteredTextList.map((item, index) => (
              <List
                key={item.id}
                id={item.id}
                text={item.text}
                color={item.color}
                onDelete={handleDeleteItem}
                onUpdate={handleUpdateItem}
                onColor={handleListColorChange}
                isAllChecked={isAllChecked} 
                isChecked={item.isChecked}
                setisChecked={setisChecked}
              />
            ))
          : text_list.map((item, index) => (
              <List
                key={item.id}
                id={item.id}
                text={item.text}
                color={item.color}
                onDelete={handleDeleteItem}
                onUpdate={handleUpdateItem}
                onColor={handleListColorChange}
                isAllChecked={isAllChecked}
                isChecked={item.isChecked}
                setisChecked={setisChecked}
              />
            ))}
      </div>
    </div>
  );
}
