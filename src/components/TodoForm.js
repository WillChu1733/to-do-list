import React, { useState } from 'react'

export const TodoForm = () => {
  const [value, setValue] = useState('') // current state, Function = useState(initial state)

  const handleSubmit = (e) => {
    e.preventDefault() // prevent for submission from reloading page

    console.log(value)
  }
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="What is the task today?"
        onChange={(e) => setValue(e.target.value)} // updates the state with the value of input
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  )
}
