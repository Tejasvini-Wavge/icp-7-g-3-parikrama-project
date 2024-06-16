import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import "./Hotels.css"


import image1 from './img/dorsett singapore.jpg';
import image2 from './img/hotel-calmo.jpg';
import image3 from './img/mercure singapore.jpg';



function hotels() {
  const properties = [
    {
      type: 'Free Cancellation Till 10 Aug 23',
      image: image1,
      title: 'Dorsett Singapore',
      features: 
      {
        beds: 3,
        baths: 2,
        sqft: 2100,
        store: 1,
      },
      price: 492,
      rating: 2.6,
      reviews: 142,
    },
    {
      type: 'Free Cancellation Till 10 Aug 23',
      image: image2,
      title: 'Hotel Clamo Chinatown',
      features: 
      {
        beds: 3,
        baths: 2,
        sqft: 2100,
        store: 1,
      },
      price: 492,
      rating: 4.6,
      reviews: 142,
    },
   
    {
      type: 'Free Cancellation Till 10 Aug 23',
      image: image3,
      title: 'Mercure Singapore Trywhitt',
      features: {
         beds: 3,
        baths: 2,
        sqft: 2100,
        store: 1,
      },
      price: 492,
      rating: 4.6,
      reviews: 142,
    },
  


 
  ];
  return (

    <>
    <Navbar className="navbar" /> 

    <div  className='background-img'>
      
    </div>

   

    <div className="app">
      <h1>Explore  Hotels Properties</h1>
      <div className="properties">
        {properties.map((property, index) => (
          <div className="property" key={index}>
            <img src={property.image} alt={property.title} />
            <div className="property-info">
              <div className="type">{property.type}</div>
              <h2>{property.title}</h2>
              <p>Delhi | 3.5 km from Delhi</p>
              <p>cooling,pet Allow,Free Wifi,Food,Parking,,Spa & message</p>
              <div className="features">
                <div>
                  <span className='border'>{property.features.beds} Beds</span>
                  <span className='border'>{property.features.baths} Baths</span>
                  <span className='border'>{property.features.sqft} sqft</span>
                  <span className='border'>{property.features.store} Store</span>
                </div>
              </div>
              <div className="price">
                <span className="discount">15% Off</span>
                <span>From US${property.price}</span>
              </div>
              <div className="rating">
                <span className="stars">★★★★★</span>
                <span className="review-count">{property.rating} ({property.reviews} Reviews)</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="more">More</button>
    </div>

    
    

  
    
    <Footer className="footer"/>

    </>
  )
}

export default hotels
