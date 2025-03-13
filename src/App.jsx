import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import ToDoList from './components/ToDoList'

function App() {

  return (
    <div className='container'>
    <Header />
    <ToDoList />
  </div>
  )
}

export default App
