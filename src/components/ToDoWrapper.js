import React, { useState } from 'react'
import { TodoForm } from './TodoForm'
import { v4 as uuidv4 } from 'uuid'
import { Todo } from './Todo'
uuidv4()

export const ToDoWrapper = () => {
  const [todos, setTodos] = useState([])

  // callback function to pass data from child to parent (TodoForm to ToDoWrapper)
  // addTodo function is passed as a prop to the TodoForm component
  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ])
    console.log(todos)
  }
  return (
    <div className="TodoWrapper">
      <TodoForm addTodo={addTodo} />
      <Todo />
    </div>
  )
}
