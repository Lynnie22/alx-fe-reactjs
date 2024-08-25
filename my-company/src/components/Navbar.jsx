import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav style={{ backgroundColor: '#e11584', padding: '1em' }}> 
            <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex', justifyContent: 'space-around' }} >
            <li><Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link></li>
            <li><Link to="/about" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>About</Link></li>
            <li><Link to="/services" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Services</Link></li>
            <li><Link to="/contact" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Contact</Link></li>
      </ul>
        </nav>
      
    </div>
  )
}

export default Navbar
