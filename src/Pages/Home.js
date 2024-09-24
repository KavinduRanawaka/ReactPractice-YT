import React from 'react'
import TopicBox from '../Components/TopicBox'
import Content from '../Components/Content'

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>

      <TopicBox food="Rice" price='150'>
        <span>I Love Rice</span>
      </TopicBox>

      <TopicBox food="Parata" price='20'>
        <button>Click here</button>
      </TopicBox>

      <TopicBox food="Kottu" price='100'/>
      
    </div>
  )
}
