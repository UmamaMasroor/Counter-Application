import { useState } from 'react'
// import Header from './header'

function App() {
  // let counter =0;

  let [counter , setCounter] = useState(0)

 const addValue = () => {

  counter = counter +1

  setCounter(counter)
  console.log("clicked",counter);

 }
  return (
    <>
    <h1>Counter Application</h1>
    <h2>Counter Value {counter}</h2>
    <button onClick={addValue}>Add Value</button>
    <button onClick={() =>{setCounter(counter - 1)}}>
      Remove Value</button>
    <p>footer : {counter}</p>
    </>
  )
}

export default App;
