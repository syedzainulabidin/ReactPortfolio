import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext'

const About = () => {
  let user = useContext(DataContext);
  return (
    <div>
      <h1>ABOUT {user.city}</h1>
    </div>
  )
}

export default About
