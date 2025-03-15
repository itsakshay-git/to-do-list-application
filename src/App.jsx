import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import ToDoList from './components/ToDoList'
  
function App() {
  const [ list, setList ] = useState([]);
  const [task, setTask] = useState("");

  function handleChange(event){
    event.preventDefault();
    setTask(event.target.value)
  }


  //Adds a new task to the list.
  function handleClick() {
    if(task.trim() !== ""){
      setList([...list, {id: Date.now(), newTask: task, completed: false}]);
      setTask("");
    }
  }


    /**
   * Toggles the completion status of a task.
   * @param {number} id - Task ID
   */

  function toggleTaskStatus(id){
    setList(list.map(task => task.id === id ? {...task, completed: !task.completed } : task))
  }


    /**
   * Deletes a task from the list.
   * @param {number} id - Task ID
   */
  
  function handleDeleteTask(id){
    setList(list.filter(task =>task.id !== id));
  }
  

    /**
   * Edits the text of an existing task.
   * @param {number} id - Task ID
   * @param {string} newText - Updated task text
   */

  function handleEditTask(id, new_task){
    console.log(id, new_task)
    setList(list.map(task => task.id === id ? {...task, newTask: new_task} : task))
  }

  return (
    <div className='container'>
    <Header 
    task={task} 
    handleChange={handleChange} 
    handleClick={handleClick}
    />
    
    <ToDoList 
    list={list} 
    toggleTaskStatus={toggleTaskStatus} 
    handleDeleteTask={handleDeleteTask} 
    handleEditTask={handleEditTask}
    />
  </div>
  )
}

export default App
