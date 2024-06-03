import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({ task, toggleComplete }) => {
  console.log('task prop:', task)

  // defensive programming
  if (!task) {
    return null
  }
  return (
    <div className="Todo">
      <p
        onClick={() => toggleComplete(task.id)}
        className={task.completed ? 'completed' : ''}
      >
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} />
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
  )
}
