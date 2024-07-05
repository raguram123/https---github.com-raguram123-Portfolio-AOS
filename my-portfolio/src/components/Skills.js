import React from 'react'
import { SiRender , SiTailwindcss ,SiMongodb ,SiNetlify, SiMui,SiExpress } from "react-icons/si";
import{ FaAws, FaBootstrap, FaCss3, FaGit, FaGithub, FaHtml5, FaJs,   FaNodeJs,  FaReact} from "react-icons/fa"
import "./Skills.css"

function Skills() {
  return (
   <div className='main' id='skills'>
        <h1 className='h1-skill' data-aos="fade-right" > Skillsets - <span className='which'>What I Know</span>  </h1>
        <div className='container-skills'   data-aos="fade-right">
          <div className='skill-card'>
            <FaHtml5 className='icon' />
            <h1>HTML</h1>
          </div>
          <div className='skill-card'>
            <FaCss3  className='icon'/>
            <h1>CSS</h1>
          </div>
          <div className='skill-card'>
            <FaJs  className='icon'/>
            <h1>JAVASCRIPT</h1>
          </div>
          <div className='skill-card'>
             <FaBootstrap className='icon' />
            <h1>BOOTSTRAP</h1>
          </div>
          <div className='skill-card'>
          <SiMui className='icon'/>
            <h1>MATERIAL UI</h1>
          </div>
        </div>
        <div className='container-skills'   data-aos="fade-right">
          <div className='skill-card'>
          <SiTailwindcss className = "icon" />
            <h1>TAILWIND CSS</h1>
          </div>
          <div className='skill-card'>
            <FaReact className='icon' />
            <h1>REACT JS</h1>
          </div>
          <div className='skill-card'>
            <FaNodeJs className='icon' />
            <h1>NODE JS </h1>
          </div>
          <div className='skill-card'>
          <SiExpress className='icon' />
            <h1>EXPRESS JS</h1>
          </div>
          <div className='skill-card'>
          <SiMongodb className='icon'/>
            <h1>MONGODB</h1>
          </div>
        </div>
        <div className='container-skills'   data-aos="fade-rigt">
          <div className='skill-card'>
           <FaGit  className='icon'/>
            <h1>GIT </h1>
          </div>
          <div className='skill-card'>
            <FaGithub className='icon'/>
            <h1>GITHUB</h1>
          </div>
          <div className='skill-card'>
      <FaAws className='icon'/>
            <h1>AWS</h1>
          </div>
          <div className='skill-card'>
          <SiNetlify className ="icon"/>
            <h1>NETLIFY</h1>
          </div>
          <div className='skill-card'>
          <SiRender className='icon'/>
            <h1>RENDER</h1>
          </div>
        </div>
       
   </div>
 
  )
}

export default Skills