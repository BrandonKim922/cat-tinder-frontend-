import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <header className="header-container">
      <nav>
        <ul className="navigation">
          <li>
            <NavLink to="/" className="nav-link-button">
              Home Pageaa
            </NavLink>
          </li>
          <li>
            <NavLink to="/catindex" className="nav-link-button">
              Find the Purr-Fect Mate
            </NavLink>
          </li>
          <li>
            <NavLink to="/catnew" className="nav-link-button">
              Join the Cat-ivities
            </NavLink>
          </li>
          
        </ul>
      </nav>
      <div className="welcome-message">
        <h1>Welcome to Purr-fect Matches! 🐾</h1>
      </div>
    </header>
  )
}
export default Header
