import React, { useState } from 'react'


export default function Contact() {
  const[count,setCount]=useState(0)
  // let count=0;

  const increment=()=>{
    setCount(count+1);
  }
  const decrement=()=>{
    setCount(count-1);
  }

  return (
    <div>
     
      <span>My Counter</span>
      <p>The Count is {count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>

    </div>
  )
}
