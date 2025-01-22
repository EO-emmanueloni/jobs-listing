import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  
  return (
    <>
        <nav>
            <div> React Jobs </div>
            
            <div className="nav-links">
                <NavLink rel="stylesheet" to="/" className='nav-link-home' >Home</NavLink>
                <NavLink to='/jobs'>Jobs</NavLink>
                <NavLink to='/add-job'>Add jobs</NavLink>
            </div>
        </nav>
    </>
  )
}

export default Navbar