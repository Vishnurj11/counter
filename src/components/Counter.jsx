import React, { useState } from 'react'

const Counter = () => {
   const[count,setCount]= useState(0) 

    //increment
    const increment =()=>{setCount((count+1));};

    // decrement
    const decrement=()=>{setCount((count-1));};

    // reset
    const reset=()=>{setCount(0);};

  return (
    <div>
        
        <h1>Counter app</h1>
        <button style={{margin:'20px',backgroundColor: 'green'}}  onClick={increment}>increment</button>
        <button style={{margin:'20px',backgroundColor: 'red'}}onClick={decrement}>decrement</button>
        <button style={{margin:'20px',backgroundColor: 'black'}} onClick={reset}>Reset</button>

        <h1>{count}</h1>
    </div>
  )
}

export default Counter