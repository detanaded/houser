import React from 'react'
import '../../CSS/header.css'
import img from './houser_logo.png'


//======Stateless Component===========


function Header() {
  return(
    <div className="navheader">
      <div className='logohead'>
        <img src={img} alt="logo"/>    
        <h1>Houser</h1>
      </div>
    </div>
  )
}
export default Header 