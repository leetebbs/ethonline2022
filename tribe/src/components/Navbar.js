import React from 'react'
import image from '../images/home.png'
import send from '../images/send.png'
function Navbar() {
  return (
    <div className="nav">
        <h1 className="logo">Tribe</h1>
        <img src={image}/>
        <img className="send" src={send}/>
    </div>
    
  )
}

export default Navbar