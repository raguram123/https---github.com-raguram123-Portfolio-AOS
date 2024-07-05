import React from 'react'
import "./Certification.css"
function Certification() {
  return (
    <div className='main' id='certification'>
    <h1 className='pro-h1'>Certification <span className='which'> - Full Stack Web Development MERN</span></h1>
     <div className='card-container'>
     <div className='card' data-aos="fade-left">
      <img src='Ghtml.png' alt='' className='image-card'></img>
      <h3 className='center'  data-aos="fade-left">HTML</h3>
     </div>
     <div className='card'  data-aos="fade-left">
      <img src='Gcss.png' alt='' className='image-card' ></img>
      <h3 className='center'  data-aos="fade-left">CSS</h3>
     </div>
     <div className='card'  data-aos="fade-left">
      <img src='Gjavascript.png' alt='' className='image-card'></img>
      <h3 className='center'  data-aos="fade-left">JAVASCRIPT</h3>
     </div>
     </div>
     <div className='card-container'>
     <div className='card'  data-aos="fade-left">
      <img src='Greact.png' alt='' className='image-card'></img>
      <h3 className='center'  data-aos="fade-left">REACT JS</h3>
     </div>
     <div className='card'  data-aos="fade-left">
      <img src='Gnodejs.png' alt='' className='image-card'></img>
      <h3 className='center'  data-aos="fade-left">NODE JS</h3>
     </div>
     <div className='card' data-aos="fade-left">
      <img src='Gbootstrap.png' alt='' className='image-card'></img>
      <h3 className='center'  data-aos="fade-left">BOOTSTRAP</h3>
     </div>
     </div>
     <div className='card-container'>
     <div className='card'  data-aos="fade-left">
      <img src='Gmysql.png' alt='' className='image-card'></img>
      <h3 className='center'  data-aos="fade-left">MYSQL</h3>
     </div>
     <div className='card'  data-aos="fade-left">
      <img src='GMongodb.png' alt='' className='image-card'></img>
      <h3 className='center' data-aos="fade-left">MONGODB</h3>
     </div>
     <div className='card'  data-aos="fade-left">
      <img src='Goverall.png' alt='' className='image-card'></img>
      <h3 className='center'  data-aos="fade-left">FULL - STACK - MERN </h3>
     </div>
     </div>
</div>
  )
}

export default Certification