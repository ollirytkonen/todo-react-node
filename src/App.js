import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./App.css"

function App() {
  const [newTodo, setNewToDo] = useState('')
  const [todos, setTodos] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3001/todos')
      .then(response => {
        setTodos(response.data)
      })
  }, [])
  console.log(todos)

const handleNewTodoChange = (event) => {
    event.preventDefault()
    setNewToDo(event.target.value)
  }
  
const handleNewTodo= (event) => {
    event.preventDefault()
    setTodos([...todos, {id: todos.length + 1, content: newTodo}])
    setNewToDo('')
}
const handleDelete = (id) => {
  setTodos(todos.filter((todo) => todo.id !== id))
}

  return (
    <div className="main">
    <header><h1>To do app</h1></header>
    <section>
        <form className="input"onSubmit={handleNewTodo}>
            Add To Do <br/>
             <div className="nameinput">
             Add:<input value = {newTodo} onChange={handleNewTodoChange} /><br/>
             </div>
            </form>
          <div className ="todos"> To Do List 
            {todos.map(todo => 
              <ul key= {todo.id}> 
              <p>
              {todo.content}
              <button onClick={()=> handleDelete(todo.id)}> X </button></p> 
              </ul>)}  
              </div>
    </section>
    <footer><p>Footer</p></footer>      
  </div>
  )
}

export default App;