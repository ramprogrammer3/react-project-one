import React from 'react'
import './card.css'
const Card = ({item}) => {
   
  return (
    <div className='card-container' id = {item.name} >
        <img src= {item.url} alt="" />
    </div>
  )
}

export default Card