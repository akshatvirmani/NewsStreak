import React from 'react';
import Navbar from './Navbar';
function Header() {
  return (
    <div id='main'>
        <Navbar/>
        <div className='name'>
            <h1><span>Newstreak</span> News</h1>
            <p className='details'>lorem</p>
            <a href='#' className='cv-btn'>Download</a>
        </div>
    </div>
  )
}

export default Header