import React from 'react'
import "./DestinationCard.css"

function DestinationCard({ img, location, detailedInfo }) {

    return (<>
        <div className='dest-card'>
            <img src={img} className='destination-img' />
            <p className='destination'>{detailedInfo}</p>
            <h2 className='destination'>{location}</h2>
            <button type='button' className='btn'>Explore More</button>
        </div>
    </>)
}

export default DestinationCard