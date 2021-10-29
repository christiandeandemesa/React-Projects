import React, {useState} from 'react';
import './App.css';
import UserForm from './components/Person'

function App() {
  return (
    <div className = 'App'>
      <div className = 'Align'>
        <UserForm />
      </div>
    </div>
  );
}

export default App;