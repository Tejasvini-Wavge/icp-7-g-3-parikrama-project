import React from 'react'
import './LocationCard.css'

function LocationCard({ img, location, tripdays, rs }) {
    return (<>
        <div className='location-card'>
        <img src= {img} className='location-img'/>
        </div>
        </>)
        
        
}

export default LocationCard