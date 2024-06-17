import React from 'react'
import "./FlightOfferCard.css"

function FlightOfferCard({logo,title, discount, date }) {
  return(<>
  <div className='flight-offer-card'>
    <img src={logo} className='offer-logo'/>
    <h1 className='text'>{discount}</h1>
    <p className='text'>{title}</p>
    <h2 className='text'>{date}</h2>
  </div>
  </>
    
  )
}

export default FlightOfferCard