import React from 'react'
import {Link} from "react-scroll"
import "./Navbar.css"

function Navbar() {
  return (
    <div className='nav'>
        <div className='nav-left'>
           <h1>Tech<span className='with'>Stack</span></h1>
        <div className='nav-right'>
          <Link to='home' spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
        </div>
        <div className='nav-right'>
          <Link to='about' spy={true} smooth={true} offset={-150} duration={500}>About</Link>
        </div>
        <div className='nav-right'>
          <Link to='skills' spy={true} smooth={true} offset={-150} duration={500}>Skills</Link>
        </div>
        <div className='nav-right'>
          <Link to='certification' spy={true} smooth={true} offset={-150} duration={500}>Certification</Link> 
        </div>
        <div className='nav-right'>
          <Link to='projects' spy={true} smooth={true} offset={-150} duration={500}>Projects</Link>
        </div>
        <div className='nav-right'>
          <Link to='experience' spy={true} smooth={true} offset={-150} duration={500}>Experience</Link>
        </div>
        <div className='nav-right'>
          <Link to='contact' spy={true} smooth={true} offset={-150} duration={500}>Contact</Link>
        </div>
        </div>
    </div>
  )
}

export default Navbar

