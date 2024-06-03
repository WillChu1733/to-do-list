import React, { useState } from 'react'

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('') // current state, Function = useState(initial state)

  const handleSubmit = (e) => {
    e.preventDefault() // prevent for submission from reloading page

    addTodo(value)

    setValue('')
  }
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="What is the task today?"
        onChange={(e) => setValue(e.target.value)} // updates the state with the value of input
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  )
}
