import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <div id='container'>
            <div><NavLink className={({isActive})=> (isActive ? 'active-class' : 'notactive-class')}to='/'>Home</NavLink></div>
            <div><NavLink className={({isActive})=> (isActive ? 'active-class' : 'notactive-class')} to='/students'>Students</NavLink></div>
            <div><NavLink className={({isActive})=> (isActive ? 'active-class' : 'notactive-class')} to='/contact'>Contact Us</NavLink></div>
        </div>  
    </div>
  )
}

export default NavBar