import React from "react";
import Style from "../css/TodoApp.module.css";

const ColorPicker = ({ colors, handleColorChange }) => {
    return (
        <div className={Style.color_buttons}>
            {colors.map((color) => (
                <button
                    key={color}
                    className={Style.color_button}
                    style={{
                        backgroundColor: color
                    }}
                    onClick={() => handleColorChange(color)}
                ></button>
            ))}
        </div>
    );
};

export default ColorPicker;
