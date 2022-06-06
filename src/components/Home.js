import React,{useState} from 'react'
import {v4 as uuidv4} from 'uuid';

import Todos from './Todos'
import style from './home.module.css'
import NewTodo from './NewTodo'



const Home = () => {

  const [todos, setTodo] = useState([]);

  const addTodoHandeler = (todo) => {
    setTodo((prevTodos) => {
      return[...prevTodos,{ id:uuidv4(), todo}]
    });
  }

  const handleRemoveTodo = (id) => {
    setTodo((prevTodos) => {
      const filterTodo = todos.filter((todo) => todo.id !== id);
      return filterTodo;
    });
  }

  return (
    <div className= {style.container}>
      <h1 style={{color: 'violet'}}>ToDo App</h1>
        <NewTodo onAddTodo = {addTodoHandeler} />
        <Todos todos = {todos} onRemoveTodo = {handleRemoveTodo} />
    </div>
  )
}

export default Home