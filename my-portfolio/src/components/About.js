import React from 'react'
import { FaArrowDown } from "react-icons/fa6";
import "./About.css"

function About() {
  return (
    <div className='main' id='about'>
      <div className='display'>
      <h1 className='here' data-aos="fade-left">Here's who I am </h1>
      <p className='first-p'  data-aos="fade-left">Hi , there ! I'm Raguraman , a Full Stack Web Developer from , Coimbatore . Developing Innovative and Responsive Full Stack Projects using  Html , Css , Javascript , ReactJS , NodeJS , MongoDB </p>
    <div>
        <h3 className='education'  data-aos="fade-left">Education</h3>
        <p className='second-p'  data-aos="fade-left">
        <span className='with-1'>➹</span>  I have completed my  bachelor's degree in <span>Bsc Physics </span> from Goverment Arts and Science College ,Coimbatore<br></br>
        <span className='with-1'>➹</span>  Currently I have completed my Full Stack Web development course in GUVI , Chennai
        </p>
      </div>
      <div>
        <h3 className='education'  data-aos="fade-left">Here's what I do</h3>
        <p className='third-p'   data-aos="fade-left"   ><span className='with-1'>➹</span> Building responsive Frontend website  using ReactJS </p>
        <p className='third-p'   data-aos="fade-left"   ><span className='with-1'>➹</span> Backend development using NodeJS, ExpressJS</p>
        <p className='third-p'   data-aos="fade-left"   ><span className='with-1'>➹</span> Creating database using MongoDb</p>
      </div>
      <div className='int'   data-aos="fade-left">
      <p className='int-1' > Below , you can take a look around about me in detail<span className='int-2'> <FaArrowDown  className='down'/></span></p>
      </div>
      </div>
    </div>
  )
}

export default About