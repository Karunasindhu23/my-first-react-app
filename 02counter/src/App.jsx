import { useState } from 'react'

import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  // let counter = 15
  const addValue = () => {
    // console.log("clicked", counter)
    if(counter === 30) {
      counter = 15
      return
    }
    setCounter(counter + 1)
  }

  const removeValue = () => {
    if(counter === 0) {
      counter = 15
      return
    }
    setCounter(counter - 1)
  }

  return (
    <div>
      <h1>Karunasindhu Adak</h1>
      <h3>Couter value: {counter}</h3>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>Value: {counter}</p>
    </div>
  )
}

export default App
