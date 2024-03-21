import React, { useState } from "react";
import "./style.css";

// function generateId() {
//   return Math.floor(Math.random() * 10);
// }

function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    setTodos((todos) =>
      todos.concat({
        text: input,
        id: Math.floor(Math.random() * 10),
      })
    );
    setInput("");
  };

  const removeTodo = (id) => setTodos((todos) => todos.filter((t) => t.id !== id));

  return (
    <>
    <div className="container">
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Add tasks here" />
      <button onClick={handleSubmit}>+</button>
      <ul className="todos-list">
        {todos.map(({text, id}) =>(
          <li key={{id}} className="todo">
            <span>{text}</span>
            <button className="close" onClick={() => removeTodo(id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default Todo;