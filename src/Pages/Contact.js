import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap';

export default function Contact() {
  const[count,setCount]=useState(0)
  // let count=0;

  const increment=()=>{
    setCount(count+1);
  }
  const decrement=()=>{
    setCount(count-1);
  }
  const Navigate=useNavigate();

  useEffect(()=>{
    console.log(`count is : ${count}`)//what I want to do as a side effect
  },[count]//dependency array
  )

  return (
    <div>
     
      <span>My Counter</span>
      <p>The Count is {count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <br></br><br></br>
      <Button onClick={()=>Navigate("/")}>Back</Button>
    </div>
  )
}
