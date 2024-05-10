import React, { useState } from "react";
import Color from "./Color";
import Input from "./Input";
import List from "./List";
import Search from "./Search";
import Style from "../css/TodoApp.module.css";

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
    const [search_text, setSearch_Text] = useState([]);
    const [search, setSearch] = useState(false);

    const handleColorChange = (color) => {
        setSelectedColor(color);
    };

    const handleInputButtonClick = () => {
        const newItem = { text, color: selectedColor };
        setText_list([...text_list, newItem]);
        setText("");
        setSelectedColor("#FFFFFF");
    };

    const handleTextChange = (e) => {
        const inputText = e.target.value;
        setText(inputText);
    };

    const handleSearchText = (e) => {
        const searchText = e.target.value;
        setSearch_Text(searchText);
    };

    const activeEnter = (e) => {
        if (e.key === "Enter") {
            handleInputButtonClick();
        }
    };

    

    return (
        <div>
            <Input
                text={text}
                setText={setText}
                handleInputButtonClick={handleInputButtonClick}
                handleTextChange={handleTextChange}
                activeEnter={activeEnter}
                selectedColor={selectedColor}
            />
            <Search/>
            <Color
                colors={colors}
                handleColorChange={handleColorChange}
            />
            
            <div>
                {text_list.map((item) => (
                    <List text={item.text} color={item.color} />
                ))}
            </div>
        </div>
    );
}
