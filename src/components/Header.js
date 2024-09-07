import React from 'react'
import logo from "../logo.png"
const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='logo'>
          <img src={logo} alt='Pizza Restaurant Logo' />
        </div>
        <nav>
          <ul className='nav-links'>
            <li>
              <a href='#home'>Home</a>
            </li>
            <li>
              <a href='#menu'>Menu</a>
            </li>
            <li>
              <a href='#about'>About Us</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
