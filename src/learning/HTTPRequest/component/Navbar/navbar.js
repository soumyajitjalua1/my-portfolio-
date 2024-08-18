import React from 'react'
import logo from '../../../../assets/logo1.png'
import './navbar.css';

const navbar = ()  => {
  return (
    <nav>
        <div className='nav-logo'>
            <img src={logo} alt='logo'></img>
        </div>
        <div>
        <h2>My Potfolio</h2>
        </div>
        <div className='nav-link'>
            <ul>
                <li>
                    <a href='#'>Home</a>
                </li>
                <li>
                    <a href='#'>About</a>
                </li>
                <li>
                    <a href='#'>Resume</a>
                </li>
                <li>
                    <a href='#'>Projects</a>
                </li>
                <li>
                    <a href='#'>Contuct</a>
                </li>
            </ul>
        </div>

    </nav>
  )
}

export default navbar 