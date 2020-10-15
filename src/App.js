import React from 'react';
import TodoElement from "./TodoItem";
import './style.css'

function App() {
  return (
    <div  className="todo-list">
      <TodoElement />
      <TodoElement />
      <TodoElement />
      <TodoElement />
    </div>
  )
}

export default App