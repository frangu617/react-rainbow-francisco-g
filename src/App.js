// import './App.css';
import React, { useState } from 'react'
import ColorBlock from './ColorBlocks.js';
import ColorForm from './ColorForm.js';





function App() {
  let [colors, setColors] = useState([])

  let colorMap = colors.map((color, i) => {
    return (
      <ColorBlock key={i} color={color} />
    )
  })



  let addColor = (newColor) => {
    setColors([...colors, newColor])
  }

  let addRainbow = () => {
    let rainbow = ['violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red']
    
    setColors(colors.concat(rainbow))
  }
  return (
    <div className="App">
      <>
        {colorMap}
      </>
      <div className='ColorForm'>
      <ColorForm addColor={addColor} />
      <button onClick={addRainbow}>Or Add the Rainbow</button>
      <p className='refresh'>***Refresh the page to start over***</p>
      </div>
    </div>
  )
}


export default App;
