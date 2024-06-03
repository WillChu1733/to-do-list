import React, { useState } from 'react'
import { TodoForm } from './TodoForm'
import { v4 as uuidv4 } from 'uuid'
import { Todo } from './Todo'

export const ToDoWrapper = () => {
  const [todos, setTodos] = useState([])

  // callback function to pass data from child to parent (TodoForm to ToDoWrapper)
  // addTodo function is passed as a prop to the TodoForm component
  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ])
    console.log('Updated Todos:', todos)
  }

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }
  return (
    <div className="TodoWrapper">
      <h1>Get Things Done!</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) => (
        <Todo task={todo} key={todo.id} toggleComplete={toggleComplete} />
      ))}
    </div>
  )
}
