import React, { useState } from "react"; // Ensure correct import
import "../index.css"; // Use the correct relative path
import Form from "./form";
import Todolist from "./todolist";


const Home = () => {
  const [todo, setTodo] = useState(""); // Correct useState syntax
  const [todos, setTodos] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents page reload
    console.log("Todo Added:", todo);
    if (todo.trim()) {
      setTodos([...todos, todo]); // Add new todo to the list
      setTodo(""); // Reset input field
    }
  };
  // Function to handle delete of a todo item
  const handledelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index)); // Remove the item at the given index
  };

  return (
    <div className="home">
      
<Form todo={todo} setTodo={setTodo} handleSubmit={handleSubmit}/>
      {/* Corrected the map syntax */}
    <Todolist todos={todos} handledelete={handledelete}/> {/*  passing todos as a prop*/}   
    </div>
  );
};

export default Home;
