import React, { useState } from 'react'
import Pluse from "../assets/Plus Math.png"


/**
 * ToDoList Component
 * Displays the application title.
 * Renders a list of tasks.
 * @param {Array} task - List of tasks.
 * @param {Function} handleChange - Adds the value to the task state.
 * @param {Function} handleClick - Adds a new task to the list.
 */
const Header = (props) => {

  return (
    <div className='header'>
      <div>
        <h1 className='todo-title'>TO-DO LIST</h1>
      </div>
      <div className='task-container'>
      <input className='input-field' type="text" placeholder='Add Task' value={props.task} onChange={(event) => props.handleChange(event)}/>
      <button className='add-btn' onClick={props.handleClick}>
        <img src={Pluse} alt="add" height={15} width={15} />
      </button>
      </div>
    </div>
  )
}

export default Header