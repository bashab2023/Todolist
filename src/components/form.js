import React from "react";
import "./form.css";


import { useState } from "react";
const Form=({todo,setTodo,handleSubmit})=>{
    return(
        <div className="form">
        <form onSubmit={handleSubmit} >
            <div className="inputcontainer">
        <input 
        className="moderninput"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          type="text"
          placeholder="Enter a task"
        />
        <button type="submit" className="modernbutton">Add</button>
        </div>
      </form>
      </div>
    );
}
export default Form;