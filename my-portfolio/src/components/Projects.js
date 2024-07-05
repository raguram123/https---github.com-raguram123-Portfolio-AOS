import React from 'react';
import "./Projects.css"

function Projects() {
  return (
    <div className='main' id='projects'>
          <h1 className='pro-h1'> Projects <span className='which'> - Which I have done recently</span></h1>
    <div className='project-container'  data-aos="fade-right">
        <div className='project-card'>
             <img src='https://ps.w.org/wedevs-project-manager/assets/icon-256x256.gif?rev=2821310' alt='' className='image-pro'></img>
             <h1>ShoppingCart - Redux </h1>
             <p className='paragraph'>This project is a shopping cart website built with HTML, CSS, React, and Redux. It allows users to browse a list of products, add them to their cart, and manage their cart</p>
             <a href='https://github.com/raguram123/Smart-Shopping'><button className='button-1' >Github</button></a>
            <a href='https://taupe-fenglisu-7b999e.netlify.app/'><button className='button-1' >Live</button></a> 
            
        </div>
        <div className='project-card'>
             <img src='https://cdn.dribbble.com/users/1300804/screenshots/3931460/mavlab.gif' alt='' className='image-pro'></img>
             <h1>Property Management - MERN</h1>
             <p className='paragraph'>This project is the daily oversight of residential, commercial, or industrial real estate Inventories</p>
             <a href='https://github.com/raguram123/https---github.com-raguram123-Property-react'><button className='button-1' >Github Frontend </button></a>
             <a href='https://github.com/raguram123/https---github.com-raguram123-Property-Node'><button className='button-1' >Github Backend</button></a>
            <a href='https://66879e02db1bcc0718aff2b4--famous-arithmetic-ce1441.netlify.app/'><button className='button-1' >Live</button></a> 
            
        </div>
        <div className='project-card'>
             <img src='https://cdn.dribbble.com/users/1840448/screenshots/11458109/media/6c7c0704f36c9d46a7c99fd8037e1486.gif' alt='' className='image-pro'></img>
             <h1>Messenger - MERN</h1>
             <p className='paragraph'>This project is an internet based application that facilitates two or more individuals to communicate privately with one another </p>
             <a href='https://github.com/raguram123/https---github.com-raguram123-Message-react'><button className='button-1' >Github Frontend</button></a>
             <a href='https://github.com/raguram123/https---github.com-raguram123-Message-node'><button className='button-1' >Github Backend</button></a>
            <a href='https://6687a70f4948c20e242e2bc8--lucent-belekoy-3ab7eb.netlify.app/'><button className='button-1' >Live</button></a> 
            
        </div>
        <div className='project-card'>
             <img src='https://cdn.dribbble.com/users/1150114/screenshots/3602163/expensestracker.gif' alt='' className='image-pro'></img>
             <h1> Expense Tracker - MERN</h1>
             <p className='paragraph'>This project is about to track the expenses from our daily life , so that we able to manage the expenses and quite saving Money</p>
             <a href='https://github.com/raguram123/Expense-react'><button className='button-1' >Github Frontend</button></a>
             <a href='https://github.com/raguram123/https---github.com-raguram123-Expense-node'><button className='button-1' >Github Backend</button></a>
            <a href='https://6687a8f961200e0c4c114fc0--funny-kelpie-e2ad70.netlify.app/'><button className='button-1' >Live</button></a> 
            
        </div>
        <div className='project-card'>
             <img src='https://cdn.dribbble.com/users/10549/screenshots/6144912/flag.gif' alt='' className='image-pro'></img>
             <h1>Blogging - MERN</h1>
             <p className='paragraph'>Here is a project about Blogging , which is used to interact with users effectively  </p>
             <a href='https://github.com/raguram123/https---github.com-raguram123-Blog-react'><button className='button-1' >Github Frontend </button></a>
             <a href='https://github.com/raguram123/https---github.com-raguram123-Blog-node'><button className='button-1' >Github Backend</button></a>
            <a href='https://6687cd77b074e93618f6f716--warm-cheesecake-34a8a9.netlify.app/'><button className='button-1' >Live</button></a> 
            
        </div>
    </div>
    </div>

  )
}

export default Projects