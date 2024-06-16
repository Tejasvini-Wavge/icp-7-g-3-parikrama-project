import React from 'react'
import './Flights.css'
import HeaderImg from './images/header-flight-img.jpg'
import Navbar from '../../components/Navbar/Navbar'

function Flights() {
  return (
    <>
    <Navbar/>
    <img src={HeaderImg} alt={HeaderImg} className="header-img" />
    </>
  )
}

export default Flights