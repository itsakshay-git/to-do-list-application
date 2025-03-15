import React from 'react'
import ToDoItem from './ToDoItem'

/**
 * ToDoList Component
 * Renders a list of tasks.
 * @param {Array} list - List of tasks
 * @param {Function} toggleTaskStatus - Function to toggle task completion
 * @param {Function} handleDeleteTask - Function to delete a task
 * @param {Function} handleEditTask - Function to edit a task
 */

const ToDoList = (props) => {
  return (
    <ul>
      {props.list.map(task => (
      <ToDoItem 
        key={task.id}
        todoList={task} 
        toggleTaskStatus={props.toggleTaskStatus} 
        handleDeleteTask={props.handleDeleteTask} 
        handleEditTask={props.handleEditTask} 
      />
      ))}
    </ul>
  )
}

export default ToDoList