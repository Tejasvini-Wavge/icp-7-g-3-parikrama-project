import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import SearchCard from '../../components/searchCard/searchCard'

import "./Hotels.css"


import image1 from './img/dorsett singapore.jpg';
import image2 from './img/hotel-calmo.jpg';
import image3 from './img/mercure singapore.jpg';


import citilinkLogo from './img/flt-3.webp';
import goibiboLogo from './img/goibibo.webp';
import airIndiaLogo from './img/flt-2.webp';
import malaysiaAirlinesLogo from './img/flt-1.webp';


import city1 from './img/newyork.jpg';
import city2 from './img/New2.jpg';
import city3 from './img/New3.jpg';
import city4 from './img/new4.jpg';




function hotels() {
  const properties = [
    {
      type: 'Free Cancellation Till 10 Aug 23',
      image: image1,
      title: 'Dorsett Singapore',
      features: 
      {
        beds: 4,
        baths: 3,
        sqft: 2100,
        store: 1,
      },
      price: 500,
      rating: 2.8,
      reviews: 150,
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
         beds: 2,
        baths: 2,
        sqft: 2100,
        store: 1,
      },
      price: 450,
      rating: 4.6,
      reviews: 145,
    },
  


 
  ];
  return (

    <>
    <Navbar className="navbar" /> 

    <div  className='background-img'>
    <SearchCard />
  
      
    </div>

    <div className="container">
      <div className="card">
        <div className="card-image">
          <img src={citilinkLogo} alt="Citilink Logo" />
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
          <img src={goibiboLogo} alt="Goibibo Logo" />
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
          <img src={airIndiaLogo} alt="Air India Logo" />
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
          <img src={malaysiaAirlinesLogo} alt="Malaysia Airlines Logo" />
        </div>
        <div className="card-content">
          <h3>Flat</h3>
          <h2>$899 off</h2>
          <p>On Domestic Flights</p>
          <button className="button">LOG125F</button>
        </div>
      </div>
    </div>

   

    <div className="app">
      <h1>Explore Top Hotels Resorts</h1>
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


<h1>Explore Top  Destination </h1>

    <div className="container">
      <div className="card-city">
        <img src={city2} alt="Destination" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">PARIS</h5>
          <p className="card-text">10 Destination |5 Hotels</p>
          <a href="#" className="btn ">Read More</a>
        </div>
      </div>
      <div className="card-city">
        <img src={city3} alt="Journey" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">NEW-YORK</h5>
          <p className="card-text">10 Destination |5 Hotels</p>
          <a href="#" className="btn ">Read More</a>
        </div>
      </div>
      <div className="card-city">
        <img src={city1} alt="Business" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">DUBAI</h5>
          <p className="card-text">10 Destination |5 Hotels</p>
          <a href="#" className="btn ">Read More</a>
        </div>
      </div>
      <div className="card-city">
        <img src={city4} alt="Business" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">San Jose</h5>
          <p className="card-text">10 Destination |5 Hotels</p>
          <a href="#" className="btn ">Read More</a>
        </div>
      </div>
    </div>


   
    <hr></hr>
    <div className="container-contact">
      <div className="content">
        <h1 className="title">Subscribe & Get</h1>
        <h2 className="subtitle">Special Discount with Parikrama.com</h2>
        <div className="form">
          <input type="text" placeholder="Enter Your Mail!" />
          <button className="submit">Submit</button>
        </div>
      </div>
    </div>



    <div className="reviews-container">
      <h1>Loving Reviews By Our Customers</h1>
      <div className="reviews-grid">
        <div className="review-card">
          <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Aman Diwakar" className="review-avatar" />
          <div className="review-info">
            <h2>Aman Diwakar</h2>
            <p>United States</p>
            <div className="review-rating">
              <span className="star">★★★★★</span>
            </div>
            <p className="review-text">excellent </p>
          </div>
        </div>
        <div className="review-card">
          <img src="https://randomuser.me/api/portraits/men/76.jpg" alt="Kunal M. Thakur" className="review-avatar" />
          <div className="review-info">
            <h2>Kunal M. Thakur</h2>
            <p>United States</p>
            <div className="review-rating">
              <span className="star">★★★★★</span>
            </div>
            <p className="review-text">excellent </p>
          </div>
        </div>
        <div className="review-card">
          <img src="https://randomuser.me/api/portraits/women/75.jpg" alt="Divya Talwar" className="review-avatar" />
          <div className="review-info">
            <h2>Divya Talwar</h2>
            <p>United States</p>
            <div className="review-rating">
              <span className="star">★★★★★</span>
            </div>
            <p className="review-text">excellent </p>
          </div>
        </div>
        <div className="review-card">
          <img src="https://randomuser.me/api/portraits/men/77.jpg" alt="Karan Maheshwari" className="review-avatar" />
          <div className="review-info">
            <h2>Karan Maheshwari</h2>
            <p>United States</p>
            <div className="review-rating">
              <span className="star">★★★★★</span>
            </div>
            <p className="review-text">excellent </p>
          </div>
        </div>
        <div className="review-card">
          <img src="https://randomuser.me/api/portraits/women/76.jpg" alt="Ritika Mathur" className="review-avatar" />
          <div className="review-info">
            <h2>Ritika Mathur</h2>
            <p>United States</p>
            <div className="review-rating">
              <span className="star">★★★★★</span>
            </div>
            <p className="review-text">excellent </p>
          </div>
        </div>
      </div>
    </div>

    
    

  
    
    <Footer className="footer"/>

    </>
  )
}

export default hotels