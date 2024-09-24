import React from 'react'
import './TopicBox.css'

export default function TopicBox(props) {
  return (
    <div>
      <div className="topicBox">
        <span className='text'>My favourite food is {props.food} and price is {props.price}</span>
      </div>
    </div>
  )
}
