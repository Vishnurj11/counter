import React from 'react'
import { useState } from 'react'

const Display = () => {
    const [display, setDisplay]=useState('');
  
   const react =()=>{setDisplay(("react"));};
   const vue =()=>{setDisplay(("vue"));};
   const angular =()=>{setDisplay("angular");};
  return (
    <div>
        <h1>Display</h1>
        <button style={{margin:'20px',backgroundColor: 'green'}}  onClick={react}>React</button>
        <button style={{margin:'20px',backgroundColor: 'red'}}onClick={vue}>vue</button>
        <button style={{margin:'20px',backgroundColor: 'black'}} onClick={angular}>angular</button>
        <h2>{display}</h2>


    </div>
  )
}

export default Display