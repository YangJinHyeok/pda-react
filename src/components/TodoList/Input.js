import React from "react";
import Style from "../css/TodoApp.module.css";

const Input = ({
    text,
    handleInputButtonClick,
    handleTextChange,
    activeEnter,
    selectedColor,
}) => {
    return (
        <div>
            <input
                type="text"
                style={{ backgroundColor: selectedColor}}
                onChange={handleTextChange}
                value={text}
                onKeyDown={(e) => activeEnter(e)}
                className={Style.text_input}
                placeholder="작성해주세요"
            />
            <button onClick={handleInputButtonClick} className={Style.input_button}>입력</button>
        </div>
    );
};

export default Input;
