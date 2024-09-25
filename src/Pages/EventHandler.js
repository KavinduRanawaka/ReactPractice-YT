import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap';


function event(){
  alert("Welcome Kavindu")
}

export default function EventHandler() {
    const Navigate=useNavigate();
  return (
    <div>
      <h1>Event Handling</h1>
      <br></br>
      <hr></hr>
      <button onClick={event}>click Here</button>
      <br></br>
      <Button onClick={()=>Navigate("/")}>Back</Button>
    </div>
  )
}
