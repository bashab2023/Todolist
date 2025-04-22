import React from "react";
import "../index.css";
import "./todolist.css";


const Todolist = ({ todos, handledelete }) => {
  // handledelete function to remove an item
  

  return (
    <div className="list">
      <ul className="listname">
        {todos.map((item, index) => (
          <li className="distance" key={index}>
            {item}
            <span className="adjust">
              <button onClick={() => handledelete(index)}>x</button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
