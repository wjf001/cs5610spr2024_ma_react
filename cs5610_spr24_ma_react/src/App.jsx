import { useState } from 'react'
import './App.css'
import SingleBox from './SingleBox'
import React from 'react'

function App() {
  
  let initialClickCount = 0;
  let [clickCount, setClickCount] = useState(initialClickCount);

  function handleChange(boxStatus) {
    if (boxStatus){
      setClickCount(clickCount + 1);
    } else{
      setClickCount(clickCount - 1);
    }
   
  }


  return (
    <>
      <h1>Count: {clickCount}</h1>
      <div className="container">
        <SingleBox toChange={handleChange} />
        <SingleBox toChange={handleChange} />
        <SingleBox toChange={handleChange} />
        <SingleBox toChange={handleChange} />
      </div>
    </>
  )
}

export default App
