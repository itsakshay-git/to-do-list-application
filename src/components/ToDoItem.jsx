import React, { useState } from "react";
import editIcon from "../assets/Edit.png";
import deleteIcon from "../assets/Delete.png";
import deleteIcon1 from "../assets/Delete1.png";
import saveIcon from "../assets/Save.png"


/**
 * ToDoItem Component
 * Renders an individual task with options to edit, delete, and mark as complete.
 * @param {Object} todoList - Task object containing id, text, and completed status
 * @param {Function} toggleTaskStatus - Function to toggle task completion
 * @param {Function} handleDeleteTask - Function to delete the task
 * @param {Function} handleEditTask - Function to edit the task
 */

const ToDoItem = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTask, setEditTask] = useState(props.todoList.newTask);


  //Handles editing and updating the task text.
  function handleEdit(id) {
    props.handleEditTask(id, editTask);
    setIsEditing(false);
    
  }

  return (
          <li className={`task ${props.todoList.completed ? "completed" : ""}`} key={props.todoList.id}>
            <div>
              <div className="task-title">
                <input
                  type="checkbox"
                  name="toggle"
                  id="toggle"
                  checked={props.todoList.completed}
                  onChange={() => props.toggleTaskStatus(props.todoList.id)}
                />
                {isEditing ? (
                  <input 
                  type="text"
                  className="input-edit"
                  value={editTask}
                  onChange={(e) => setEditTask(e.target.value)}
                  />
                  ) : (
                  <p>{props.todoList.newTask}</p>
                )}
              </div>
              <p className={props.todoList.completed ? "task-msg-completed" : "task-msg"}>
                {props.todoList.completed ? "Task Completed" : "Complete the Task"}
              </p>
            </div>
            <div>
              {isEditing ? (
                <button className="btn" onClick={() => handleEdit(props.todoList.id)}>
                   <img src={saveIcon} alt="edit" height={15} width={15} />
                </button>
              ) : (
                <button
                  className={props.todoList.completed ? "btn-edit" : "btn"}
                  onClick={() => setIsEditing(true)}
                >
                  <img src={editIcon} alt="edit" height={15} width={15} />
                </button>
              )}
              <button
                className={props.todoList.completed ? "btn-delete" : "btn"}
                onClick={() => props.handleDeleteTask(props.todoList.id)}
              >
                {props.todoList.completed ? (
                  <img src={deleteIcon} alt="delete" height={15} width={15} />
                ) : (
                  <img src={deleteIcon1} alt="delete" height={15} width={15} />
                )}
              </button>
            </div>
          </li>
  );
};

export default ToDoItem;
