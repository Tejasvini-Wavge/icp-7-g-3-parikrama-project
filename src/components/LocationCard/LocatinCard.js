import React from 'react'
import './LocationCard.css'

function LocationCard({ img, location, tripdays, rs }) {
    return (<>
        <div className='location-card'>
        <img src= {img} className='location-image'/>
        <h2 className='location'>{location}</h2>
        </div>
        </>)
        
        
}

export default LocationCard