import React from 'react'
import {menu} from './menu'

import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src='https://cdn.svgporn.com/logos/stately-icon.svg' alt='' height='35'/>
      </div>
      <div className="wrapper">
        <ul className="menu">
          {menu.map((item, ind) => (
            <li key={`menu item ${ind}`}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        <div className="buttons">
          <button className="login-button">Login</button>
          <button className="sign-up-button">Sign up</button>
        </div>
      </div>
    </div>
  )
}

export default Header
