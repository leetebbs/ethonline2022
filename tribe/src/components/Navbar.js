import React from 'react'
import image from '../images/home.png'
import send from '../images/send.png'
import add from'../images/add.png'
import compass from '../images/compass.png'
import heart from '../images/heart.png'
import search from '../images/search.png'


function Navbar() {
  return (
    <div className="nav">
        <h1 className="logo">Tribe</h1>
        <div className="search">
            <img className="search-icon" src={search}/>
            search
        </div>
        <div className="icons">
        <img src={image}/>
        <img className="send" src={send}/>
        <img className="add" src={add}/>
        <img className="add" src={compass}/>
        <img className="add" src={heart}/>
        </div>
    </div>
    
  )
}

export default Navbar