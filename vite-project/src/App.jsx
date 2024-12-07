import React from 'react'
import { BoxForm, BoxDisplay } from './components/BoxGenerator'
import './App.css'

function App() {
  const [boxes, setBoxes] = React.useState([]);

  const addBox = (newBox) => {
    setBoxes([...boxes, newBox]);
  };

  const removeBox = (index) => {
    setBoxes(boxes.filter((_, i) => i !== index));
  };

  return (
    <>
      <h1>Box Generator</h1>
      <BoxForm addBox={addBox} />
      <BoxDisplay boxes={boxes} removeBox={removeBox} />
    </>
  )
}

export default App
