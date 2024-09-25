import React from 'react'
import TopicBox from '../Components/TopicBox'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap';

export default function Home() {

  const Navigate=useNavigate();
  
  return (
    <div>
      <h1>This is Home Page</h1>

      <TopicBox food="Rice" price='150'>
        <span>I Love Rice</span>
      </TopicBox>

      <TopicBox food="Parata" price='20'>
        <button>Click here</button>
      </TopicBox>

      <TopicBox food="Kottu" price='100'/>

      {/* <button>
      <Link to="/About">Go to AboutPage</Link>
      </button>

      <button>
      <Link to="/Contact">Go to ContactPage</Link>
      </button>

      <button>
      <Link to="/EventHandler">Go to EventHandler Page</Link>
      </button> */}

      <Button onClick={()=>Navigate("/About")}>About Page</Button>
      <Button onClick={()=>Navigate("/Contact")}>Contact Page</Button>
      <Button onClick={()=>Navigate("/EventHandler")}>EventHandler Page</Button>
      
      
    </div>
  )
}
