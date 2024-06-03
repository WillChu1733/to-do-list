import React, { useState } from 'react'

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task) // current state, Function = useState(initial state)

  const handleSubmit = (e) => {
    e.preventDefault() // prevent for submission from reloading page

    editTodo(value, task.id)

    setValue('')
  }
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="Update Task"
        onChange={(e) => setValue(e.target.value)} // updates the state with the value of input
      />
      <button type="submit" className="todo-btn">
        Update Task
      </button>
    </form>
  )
}
