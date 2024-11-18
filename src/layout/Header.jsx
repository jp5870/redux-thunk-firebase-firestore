import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/view">View</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Header
