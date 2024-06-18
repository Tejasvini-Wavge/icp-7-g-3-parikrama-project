import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import butterfly from './Rental.css';

import image1 from './images/img-1.jpg';
import image2 from './images/img2.jpg';
import image3 from './images/img-3.jpg';
import image4 from './images/img-5.jpg';
import image5 from './images/img-4.jpg';

import citilinkLogo from './images/flt-3.webp';
import goibiboLogo from './images/goibibo.webp';
import airIndiaLogo from './images/flt-2.webp';
import malaysiaAirlinesLogo from './images/flt-1.webp';

import city1 from './images/c-4.webp';
import city2 from './images/c-6.webp';
import city3 from './images/c-2.webp';
import city4 from './images/c-1.webp';

import icon1 from './images/1.png'
import icon2 from './images/app.png'
import icon3 from './images/apple-logo.png'

import bkImg from './images/contact-bg-image.png'
import icon4 from './images/Untitled design.png';

import { rentalData , HouseData } from '../../data/rentalData'

function Rental() {

const [rentalProperties, setRentalProperties] = useState(rentalData);
const [rentalList, setRentalList] = useState(HouseData);


const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');
const [message, setMessage] = useState('');

const handleSubmit = (event) => {
  event.preventDefault();
  console.log('Form submitted:', { name, email, phone, message });
};

  return (
    <>

<Navbar className="navbar" /> 
<div className="background-banner">
    

     
     
    </div>

    <hr></hr>

    <div className="rental-container">
      <h1 className="rental-title">Available Rental Properties</h1>
      <div className="rental-grid">
        {rentalProperties.map((property) => (
          <div key={property.id} className="rental-card">
            <img src={property.imageUrl} alt={property.title} className="rental-image" />
            <h2 className="rental-title">{property.title}</h2>
            <p className="rental-description">{property.description}</p>
            <div className="rental-details">
              <p className="rental-price">${property.price}/month</p>
              <p className="rental-bedrooms">{property.bedrooms} Bedrooms</p>
              <p className="rental-bathrooms">{property.bathrooms} Bathrooms</p>
            </div>
            <button className="rental-button">View Details</button>
          </div>
        ))}
      </div>
    </div>

  

    <hr></hr>
   
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

    


    <hr></hr>

   
    <div className="rental-container">
      <h1 className="rental-heading">Explore Hot Rental Properties</h1>
      <div className="rental-cards">
        {rentalList.map((rental, index) => (
          <div key={index} className="rental-card">
            <div className="rental-card-image">
              <img src={rental.image} alt={rental.title} />
            </div>
            <div className="rental-card-content">
              <h2 className="rental-card-title">{rental.title}</h2>
              <div className="rental-card-details">
                <p className="rental-card-details-item">
                  {rental.beds} Beds
                </p>
                <p className="rental-card-details-item">
                  {rental.baths} Baths
                </p>
                <p className="rental-card-details-item">
                  {rental.sqft} sqft
                </p>
                <p className="rental-card-details-item">
                  {rental.store} Store
                </p>
              </div>
              <div className="rental-card-price">
                <span className="rental-card-price-off">15% Off</span>
                <p className="rental-card-price-amount">
                  From US${rental.price}
                </p>
              </div>
              <div className="rental-card-rating">
                <span className="rental-card-rating-stars">★★★★★</span>
                <span className="rental-card-rating-count">
                  {rental.rating} ({rental.reviews} Reviews)
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="more-button">More</button>
    </div>


<hr></hr>
<div className="container3">
     
      <h1>Let's schedule a Visit</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
       
        <button type="submit">Request Visit</button>
      </form>
    </div>
   

    <hr></hr>

    <div className="container-feature">
      <h1>Get Our Top Rental Seavices</h1>
      <div className="cards-container-feature">
        <div className="card-feature">
          <div className="card-icon-feature">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="16" y1="12" x2="12" y2="12"></line>
              <line x1="8" y1="12" x2="12" y2="12"></line>
            </svg>
          </div>
          <div className="card-content-feature">
            <h3>Modern Amenities</h3>
            <p>Lorem ipsum dolor elit amet enim consecte.</p>
          </div>
        </div>
        <div className="card-feature">
          <div className="card-icon-feature">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <div className="card-content-feature">
            <h3>Security Systems</h3>
            <p>Lorem ipsum dolor elit amet enim consecte.</p>
          
          </div>
        </div>
        <div className="card-feature">
          <div className="card-icon-feature">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
          </div>
          <div className="card-content-feature">
            <h3>Parking Facilities</h3>
            <p>Lorem ipsum dolor elit amet enim consecte.</p>
          
          </div>
        </div>
        <div className="card-feature">
          <div className="card-icon-feature">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <div className="card-content-feature">
            <h3>Green Spaces</h3>
            <p>Lorem ipsum dolor elit amet enim consecte.</p>
          
          </div>
        </div>
        <div className="card-feature">
          <div className="card-icon-feature">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>
          </div>
          <div className="card-content-feature">
            <h3>Free WiFi</h3>
            <p>Lorem ipsum dolor elit amet enim consecte.</p>
          
          </div>
        </div>
        <div className="card-feature">
          <div className="card-icon-feature">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 10.5V9.5l-3 3 3 3v-1"></path>
            </svg>
            
          </div>
          <div className="card-content-feature">
            <h3>Storage Facilities</h3>
            <p>Lorem ipsum dolor elit amet enim consecte.</p>
          
          </div>
        </div>
        <div className="card-feature">
          <div className="card-icon-feature">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
              <path d="M12 14.5v-2.5"></path>
            </svg>
          </div>
          <div className="card-content-feature">
            <h3>Lounge Areas</h3>
            <p>Lorem ipsum dolor elit amet enim consecte.</p>
          
          </div>
        </div>
        <div className="card-feature">
          <div className="card-icon-feature">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="9" y1="9" x2="9" y2="15"></line>
              <line x1="15" y1="9" x2="15" y2="15"></line>
            </svg>
          </div>
          <div className="card-content-feature">
            <h3>Smart Technology</h3>
            <p>Lorem ipsum dolor elit amet enim consecte.</p>
          
          </div>
        </div>
      </div>
    </div>

<hr></hr>

    <div className="app-container">
      <div className="app-header">
        <img src={icon1} alt="App Icon" className="app-icon" />
        <h1 className="app-title">Download App Now!</h1>
        <p className="app-subtitle">Use Code WELCOME and get FLAT 20% OFF* on your first domestic flight booking</p>
      </div>
      <div className="app-body">
        <div className="app-mobile-number">
          <input type="text" placeholder="+91 - Enter Mobile Number" className="app-mobile-input" />
        </div>
        <div className="app-buttons">
          <button className="app-button-red">Get App Link</button>
          <div className="app-button-group">
            <a href="#" className="app-button-google">
              <img src={icon2} alt="Google Play" className="app-button-icon" />
              <span className="app-button-text">GET IT ON</span>
              <span className="app-button-text-large">Google Play</span>
            </a>
            <a href="#" className="app-button-apple">
              <img src={icon3} alt="App Store" className="app-button-icon" />
              <span className="app-button-text">DOWNLOAD ON THE</span>
              <span className="app-button-text-large">App Store</span>
            </a>
          </div>
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
    
    <hr></hr>

   
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

export default Rental
