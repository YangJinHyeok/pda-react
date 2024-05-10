import React, { useState, useMemo } from "react";
import InputBox from "./ColorButton";
import PaletteButton from "./palette";
import TodoItem from "./Todo-item";

export default function Todo() {
    const [inputColor, setInputColor] = useState("#FFFFF");
    const [todoInfo, setTodoInfo] = useState([
        {
            text: "",
            color: "",
        },
    ]);

    const [todoList, addTodoItem] = useState([]);

    const handleLink = () => {
        const newItem = { ...todoInfo };
        console.log(newItem);
        addTodoItem([...todoList, newItem]);
    };

    //여기부터 학습
    const colors = ["#FFFFFF", "#0000FF", "#FF0000", "#FFC0CB", "ORANGE"];

    console.log(todoList);

    return (
        <body>
            <h2>Todo App</h2>
            <InputBox
                color={inputColor}
                setTodoInfo={setTodoInfo}
                handleLink={handleLink}
            />
            <div className="Color-ball"></div>
            <PaletteButton colors={colors} setColor={setInputColor} />
            <div className="Todo-items">
                <h3>Todo items</h3>
                <TodoItem todoList={todoList} todoInfo={todoInfo} />
            </div>
        </body>
    );
}
