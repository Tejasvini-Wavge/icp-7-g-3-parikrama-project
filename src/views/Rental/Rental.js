import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import butterfly from './Rental.css';

import image1 from './images/img-1.jpg';
import image2 from './images/img2.jpg';
import image3 from './images/img-3.jpg';


  

function Rental() {
  const properties = [
    {
      type: 'House',
      image: image1,
      title: 'Apogee Property Advisors',
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
      type: 'Villa',
      image: image2,
      title: 'Haven Group Real Estate',
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
      type: 'Apartment',
      image: image3,
      title: 'Larkspur Partners Realty',
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

    <div  className='background-rental'>
      
    </div>

    <div className="app">
      <h1>Explore Hot Rental Properties</h1>
      <div className="properties">
        {properties.map((property, index) => (
          <div className="property" key={index}>
            <img src={property.image} alt={property.title} />
            <div className="property-info">
              <div className="type">{property.type}</div>
              <h2>{property.title}</h2>
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

    
    <div className="container">
      <div className="card">
        <div className="card-image">
          <img src="citilink-logo.png" alt="Citilink Logo" />
        </div>
        <div className="card-content">
          <h3>Flat</h3>
          <h2>$899 off</h2>
          <p>On Domestic Flights</p>
          <button className="button">LOG125F</button>
        </div>
      </div>
      <div className="card">
        <div className="card-image">
          <img src="goibibo-logo.png" alt="Goibibo Logo" />
        </div>
        <div className="card-content">
          <h3>Flat</h3>
          <h2>$899 off</h2>
          <p>On Domestic Flights</p>
          <button className="button">INT285</button>
        </div>
      </div>
      <div className="card">
        <div className="card-image">
          <img src="" alt="Air India Logo" />
        </div>
        <div className="card-content">
          <h3>Flat</h3>
          <h2>$899 off</h2>
          <p>On Domestic Flights</p>
          <button className="button">LOG125F</button>
        </div>
      </div>
      <div className="card">
        <div className="card-image">
          <img src="malaysia-airlines-logo.png" alt="Malaysia Airlines Logo" />
        </div>
        <div className="card-content">
          <h3>Flat</h3>
          <h2>$899 off</h2>
          <p>On Domestic Flights</p>
          <button className="button">LOG125F</button>
        </div>
      </div>
    </div>

  
    
    <Footer className="footer"/>

    </>
  )
}

export default Rental
