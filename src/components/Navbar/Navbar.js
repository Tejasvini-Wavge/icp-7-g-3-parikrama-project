import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar-container'>
        <p className='title'>
            Parikrama
        </p>
        <div className='nav-item-container'>
         <Link to="/Stays" className='nav-item'>Stays</Link>
         <Link to="/Hotels"  className='nav-item'>Hotels</Link>
         <Link to="/Flights"className='nav-item'>Flights</Link>
         <Link to="/Rental" className='nav-item'>Rental</Link>
         <Link to="/Cars" className='nav-item'>Cars</Link>
       </div>
       <div className='icon-container'>
<Link to='/Register'><button className='register-btn'>Register</button></Link>
       </div>
    </div>
  )
}

export default Navbar