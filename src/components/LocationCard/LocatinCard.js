import React from 'react'
import './LocationCard.css'

function LocationCard({ img, location, tripdays, from }) {
    return (<>
        <div className='location-card'>
        <img src= {img} className='location-image'/>
        <h2 className='location'>{location}</h2>
        <span className='location'>{tripdays}</span>
        <h2 className='from'>from: {from}</h2>
        </div>
        </>)
      
}

export default LocationCard