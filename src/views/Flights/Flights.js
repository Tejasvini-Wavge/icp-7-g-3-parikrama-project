import React from 'react'
import './Flights.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import SearchCard from '../../components/searchCard/searchCard'


function Flights() {
  return (
    <>
    <Navbar/>
    
    <div className='background-image'>
    <SearchCard/>
    </div>
    
    <Footer/>
    </>
  )
}

export default Flights