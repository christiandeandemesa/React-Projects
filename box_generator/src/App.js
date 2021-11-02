import React, {useState} from 'react';
import BoxForm from './components/BoxForm';
import BoxDisplay from './components/BoxDisplay';
import './App.css';

function App() {

  const [boxes, setBoxes] = useState(["red", "green"]);

  const addBox = b => {
    const copyBoxes = [...boxes];
    copyBoxes.push(b);
    setBoxes(copyBoxes);
  };

  return (
    <div className="App">
      <div className="TopApp">
        <BoxForm onNewBox = {addBox} />
      </div>
      <div className="BotApp">
        <BoxDisplay boxes = {boxes} />
      </div>
    </div>
  );

};

export default App;