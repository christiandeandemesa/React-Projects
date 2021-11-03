import React, { useState } from 'react';
import './App.css';

function App() {

  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();

    if (newTodo.length === 0) {
      return;
    }

    const todoItem = {
      text: newTodo,
      complete: false 
    }

    setTodos([...todos, todoItem]);
    setNewTodo("");
  }

  const handleDelete = delIdx => {
    const filteredTodos = todos.filter((elem, idx) => { 
      return idx !== delIdx; 
    });

    setTodos(filteredTodos);
  }

  const handleToggle = idx => {
    const updatedTodos = todos.map((todo, i) => {
      if (idx === i) {
        todo.complete = !todo.complete;
      }
      return todo;
    });

    setTodos(updatedTodos);
  }


  return (
    <div style={{ textAlign: "center" }}>
      <form onSubmit={handleSubmit} >
        <input onChange={e => {
          setNewTodo(e.target.value);
        }} 
        type="text"
        value={newTodo}/>
        <div>
          <button>Add</button>
        </div>
      </form>

      <hr />

      {todos.map((todo, idx) => {
        const todoClasses = ['bold', 'italic']; 
        if (todo.complete) {
          todoClasses.push("line-through");
        }
        return (
          <div key={idx} >
            <input onChange={() => {
              handleToggle(idx)
            }} checked={todo.complete} type="checkbox" />
            <span className={todoClasses.join(" ")} > {todo.text} </span> 
            <button onClick={() => {
              handleDelete(idx);
            }}>Delete</button>
          </div>
        )
      })}
    </div>
  );

}

export default App;