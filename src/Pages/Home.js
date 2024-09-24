import React from 'react'
import TopicBox from '../Components/TopicBox'
import Content from '../Components/Content'

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <TopicBox food="Rice"/>
      <TopicBox food="Parata"/>
      <TopicBox food="Kottu"/>
      
    </div>
  )
}
