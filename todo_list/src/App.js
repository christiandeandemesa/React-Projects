import React, {useState} from 'react';
import TodoForm from './components/TodoForm';
import TodoDisplay from './components/TodoDisplay';
import './App.css';

function App() {

  const [todo, setTodo] = useState([{status: true, text: 'Finish Todo List assignment.'}, {status: false, text: 'Go to the gym.'}]);

  const addTodo = newTodo => {
    setTodo([...todo, newTodo]);
  }
  
  
  return (
    <div className="App">
      <TodoForm newTodo = {addTodo} />
      <TodoDisplay newTodo = {todo} setTodo = {setTodo} />
    </div>
  );

}

export default App;