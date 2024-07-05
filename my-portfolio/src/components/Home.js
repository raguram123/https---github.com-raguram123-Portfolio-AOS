import React from 'react'
import "./Home.css"
import { Link } from 'react-scroll'
import {FaGithub, FaGoogle, FaLinkedin } from "react-icons/fa"
import {   UndrawBackInTheDay  } from 'react-undraw-illustrations';
import Type from './Type.js'

function Home() {
  return (
    <div className='home' id='home'>
        <div className='home-left' data-aos="fade-right" data-aos-duration="1000"  data-aos-delay="50">
           <h1 className='h1'>
            Hello , everyone<br></br>
            I'm <span className='with-1'>
             Raguraman B </span><br></br>
            <p className='p'>
          I'm a Full Stack Developer , proficient in coding and maintaining  websites to ensure functionalities and responsiveness
         </p>
         <Type />
           </h1>
           <p className='image-home'data-aos="fade-left"   data-aos-delay="100"><UndrawBackInTheDay  primaryColor = "crimson" height = "600px " skinColor = "crimson" accentColor = "crimson" /></p>
        </div>
       <p className='feel' data-aos="fade-right" data-aos-duration="1000"  data-aos-delay="50">Feel free to <span className='con '>
       <Link to='contact' spy={true} smooth={true} offset={-150} duration={500}>Connect</Link>
        </span> with me</p>
       <p className='feel-1'>
        <span className='fa'><a href='https://github.com/raguram123'> <FaGithub  className='google' data-aos="fade-right"/></a></span>
        <span className='fa'><a href='mailto:raguraman120601@gmail.com'> <FaGoogle className='google' data-aos="fade-right"/></a></span>
        <span className='fa' ><a href='https://www.linkedin.com/in/raguraman-b-053814220/'><FaLinkedin  className='google' data-aos="fade-right"/></a></span>
         <span><a href='https://drive.google.com/file/d/1vXewzIN2jP1eAm9TN3QmH_Blppgn6pWa/view?usp=sharing'><button className='cv'>Download Resume</button></a></span>
        </p>
    </div>
  )
}

export default Home