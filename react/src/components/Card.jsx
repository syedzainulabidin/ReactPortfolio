import React from 'react'
import BtnPrimary from './BtnPrimary'

const Card = (props) => {
  return (
    <div className='w-70 bg-gray-800 p-3 rounded'>
      <img className='w-3xl aspect-square rounded' src={props.picture} alt="" />
      <h1 className='text-2xl font-bold'>{props.name}, {props.age}</h1>
      <p className='text-1xl'>{props.city}</p>
      <p>{props.description}</p>
      <BtnPrimary value={`Request ${props.name}`}/>
    </div>
  )
}

export default Card
