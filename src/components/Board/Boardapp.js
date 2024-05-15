import React, { useEffect, useState } from "react";
import Style from "../css/Board.module.css";

export default function Boardapp() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setList(json));
  }, []);

  return (
    <div className={Style.background}>
      {list.map((item, index) => (
        // <List/>
        <li key={index} className={Style.card}>
          <div className={Style.title}>{item.title}</div>
        </li>
        
      ))}
    </div>
  );
}
