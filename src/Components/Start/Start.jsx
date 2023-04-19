import React from 'react'
import './Start.css';
import logo from '../../images/Image\ \(24\).jpg'; 
import Photo from '../../images/img.jpg';

function Start() {
  return (
    <div className='startWrapper'>
      <div className='wrapper'>
        <img src={logo} alt="Logo" className='Photo'/>
        <div className='start'>
            <span className='startSpan'>Welcome to my first react project</span>  
        </div>
      </div> 
        <button className='button'><a href ="/start" className='startA'>START</a></button>
    </div>
  )
}

export default Start;