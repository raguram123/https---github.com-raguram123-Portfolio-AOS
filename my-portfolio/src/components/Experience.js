import React from 'react';
import "./Experience.css"

function Experience() {
  return (
    <div className='main' id='experience'>
  
    <h1 className='h1-exp' data-aos="fade-left" >
    Work <span className='tron'>Experience</span>
    </h1>
    <div className='exp-container' data-aos="fade-left"  >
        <div className='exp-card'>
          <img src='https://entrackr.com/storage/2023/03/Bajaj-Finance.jpg' alt='' className='image-bajaj'></img>
          <h2 className='h2-exp'>Collection Executive</h2>
          <p className='time'>Worked as a <span className='worked'>Collection Executive</span> in Bajaj Finance private limited </p>
          <p className='time'>
            August 2021 - November 2022
          </p>
        </div>
        <div className='exp-card'>
          <img src='https://images.deccanherald.com/deccanherald/2023-12/89670f59-cc40-41ae-86a4-e8d2827f8d37/Clipboard___2023_11_28T135835_640.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true' alt='' className='image-bajaj'></img>
          <h2 className='h2-exp'>Sales Executive</h2>
          <p className='time'>Worked as a <span className='worked'>Sales Executive</span> in BharatPe private limited</p>
          <p className='time' >
            January 2023 - May 2023
          </p>
        </div>
        <div className='exp-card'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfCxmZKfxz_10XNMiq_MuH0y_3Ipz2lsn9IiwWqiISe5iVRf3H91Uvs1AK4G-Kkh8aJio&usqp=CAU' alt='' className='image-bajaj'></img>
          <h2 className='h2-exp'>Completed <h6 className='when'>Full Stack Developer - MERN</h6></h2>
          <p className='time'>I successfully completed Guvi's <span className='worked'>MERN Stack Developer </span> course, gaining expertise in HTML, CSS, JavaScript, React.js, Node.js, and MongoDB.</p>
          <p className='time' >
            June 2023 - December 2023
          </p>
        </div>
    </div>
    
</div>
  )
}

export default Experience