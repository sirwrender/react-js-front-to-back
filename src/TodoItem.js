import React from 'react';
import './style.css'

function TodoItem() {
  return (
    <div className="todo-item">
      <input type="checkbox" />
      <p>Item 1</p>
    </div>
  )
}

export default TodoItem