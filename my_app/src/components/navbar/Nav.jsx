import React from 'react'
import './Nav.css'

const Nav = () => {
  return (
    <div className='nav'>
        <div className="logo">
      <div className="name">Finetech</div>
      <div className="circle-logo"></div>
      </div>
      <ul className="list">
        
        <li> <a href="#">Platform</a></li>
        <li> <a href="#">Company</a></li>
        <li> <a href="#">Industries</a></li>
        <li> <a href="#">Resources</a></li>
      </ul>
      <div className="btn">
        <button className='btn1'>SING IN</button>
        <button className='btn2'>SIGN UP</button>
      </div>
    </div>
  )
}

export default Nav
