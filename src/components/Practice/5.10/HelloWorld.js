import React from "react";
import Style from "./css/HelloWorld.module.css";

export default function HelloWorld() {
    return (
        <div className={Style.HelloWorld}>
            <h1>Hello, World!</h1>
            <p>This is My first React Application</p>
        </div>
    );
}
