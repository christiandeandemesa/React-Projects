import React from 'react';
// import logo from './logo.svg';
import './App.css';
import PersonCard from './components/person-card-component.js';

function App(){
    return(
      <div className="App">
        <PersonCard firstName = 'Bianca' lastName = 'Demesa' age = {25} hairColor = 'Brown' />
        <PersonCard firstName = 'James' lastName = 'Demesa' age = {6} hairColor = 'Brown' />
        <PersonCard firstName = 'Mateo' lastName = 'Demesa' age = {2} hairColor = 'Black'/>
        <PersonCard firstName = 'Elizabeth' lastName = 'Demesa' age = {0} hairColor = 'Brown'/>
      </div>
    );
}

export default App;
