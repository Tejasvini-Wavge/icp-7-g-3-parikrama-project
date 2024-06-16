import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import butterfly from './Rental.css';

import image1 from './images/img-1.jpg';
import image2 from './images/img2.jpg';
import image3 from './images/img-3.jpg';
import image4 from './images/img-5.jpg';

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

import vimg1 from './images/vishnu (1).jpg';
import vimg2 from './images/vishnu (2).jpg';
import vimg3 from './images/vishnu (3).jpg';
import vimg4 from './images/vishnu (4).jpg';
function Rental() {

  return (
    <>
    <Navbar className="navbar" /> 

    <div className="container-banner">
      <div className="card-container-banner">
        <div className="card-banner">
          <div className="card-header-banner">Where</div>
          <div className="card-content-banner">
            <input type="text" placeholder="Going To" />
          </div>
        </div>

        <div className="card-banner">
          <div className="card-header-banner">Choose Date</div>
          <div className="card-content-banner">
            <input type="text" placeholder="Check-In & Check-Out" />
          </div>
        </div>

        <div className="card-banner">
          <div className="card-header-banner">Members</div>
          <div className="card-content-banner">
            <p>2 Adults</p>
          </div>
        </div>

        <div className="card-button-banner">
          <button className="search-button-banner">
            <span className="search-text-banner">Search</span>
          </button>
        </div>
      </div>
    </div>

    <hr></hr>

    <div className="container-location">
      <h1 className="heading-location">Explore Apartment By Location</h1>
      <div className="cards-container-location">
        <div className="card-location">
          <img className="location-image" src={vimg1} alt="Apartment in Helsinki" />
          <div className="card-info-location">
            <p className="location-city">Location</p>
            <p className="city-location">Helsinki, Finland</p>
          </div>
        </div>
        <div className="card-location">
          <img className="location-image" src={vimg2} alt="Apartment in Rotterdam" />
          <div className="card-info-location">
            <p className="location-city">Location</p>
            <p className="city-location">Rotterdam, Netherlands</p>
          </div>
        </div>
        <div className="card-location">
          <img className="location-image" src={vimg3} alt="Apartment in Madrid" />
          <div className="card-info-location">
            <p className="location-city">Location</p>
            <p className="city-location">Madrid, Spain</p>
          </div>
        </div>
        <div className="card-location">
          <img className="location-image" src={vimg4} alt="Apartment in Verona" />
          <div className="card-info-location">
            <p className="location-city">Location</p>
            <p className="city-location">Verona, Italy</p>
          </div>
        </div>
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

    <div className="app">
      <div className="container1">
        <h1>Explore Hot Rental Properties</h1>
        <div className="properties">
          <div className="property">
            <div className="image">
              <img src={image1} alt="House" />
            </div>
            <div className="info">
              <h2>House</h2>
              <h3>Apogee Property Advisors</h3>
              <div className="details">
                <div>3 Beds</div>
                <div>2 Baths</div>
                <div>2100 sqft</div>
                <div>1 Store</div>
              </div>
              <div className="price">
                <span className="discount1">15% Off</span>
                <span className="amount">From US$492</span>
              </div>
              <div className="rating">
                <span>★★★★★</span>
                <span>4.6 (142 Reviews)</span>
              </div>
            </div>
          </div>
          <div className="property">
            <div className="image">
              <img src={image2} alt="Villa" />
            </div>
            <div className="info">
              <h2>Villa</h2>
              <h3>Haven Group Real Estate</h3>
              <div className="details">
                <div>3 Beds</div>
                <div>2 Baths</div>
                <div>2100 sqft</div>
                <div>1 Store</div>
              </div>
              <div className="price">
                <span className="discount1">15% Off</span>
                <span className="amount">From US$492</span>
              </div>
              <div className="rating">
                <span>★★★★★</span>
                <span>4.6 (142 Reviews)</span>
              </div>
            </div>
          </div>
          <div className="property">
            <div className="image">
              <img src={image3} alt="Apartment" />
            </div>
            <div className="info">
              <h2>Apartment</h2>
              <h3>Larkspur Partners Realty</h3>
              <div className="details">
                <div>3 Beds</div>
                <div>2 Baths</div>
                <div>2100 sqft</div>
                <div>1 Store</div>
              </div>
              <div className="price">
                <span className="discount1">15% Off</span>
                <span className="amount">From US$492</span>
              </div>
              <div className="rating">
                <span>★★★★★</span>
                <span>4.6 (142 Reviews)</span>
              </div>
            </div>
          </div>

          <div className="property">
            <div className="image">
              <img src={image4} alt="Apartment" />
            </div>
            <div className="info">
              <h2>Apartment</h2>
              <h3>Larkspur Partners Realty</h3>
              <div className="details">
                <div>3 Beds</div>
                <div>2 Baths</div>
                <div>2100 sqft</div>
                <div>1 Store</div>
              </div>
              <div className="price">
                <span className="discount1">15% Off</span>
                <span className="amount">From US$492</span>
              </div>
              <div className="rating">
                <span>★★★★★</span>
                <span>4.6 (142 Reviews)</span>
              </div>
            </div>
          </div>

         

          
        </div>
        <button className="more">More</button>
      </div>
    </div>



<hr></hr>

    <div className="container">
      <div className="card-city">
        <img src={city2} alt="Destination" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">PARIS</h5>
          <p className="card-text">Make Your Next Journey Delhi To Paris in Comfirtable And Best Price</p>
          <a href="#" className="btn ">Read More</a>
        </div>
      </div>
      <div className="card-city">
        <img src={city3} alt="Journey" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">NEW-YORK</h5>
          <p className="card-text">Make Your Next Journey Delhi To Paris in Comfirtable And Best Price</p>
          <a href="#" className="btn ">Read More</a>
        </div>
      </div>
      <div className="card-city">
        <img src={city1} alt="Business" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">DUBAI</h5>
          <p className="card-text">Make Your Next Journey Delhi To Paris in Comfirtable And Best Price</p>
          <a href="#" className="btn ">Read More</a>
        </div>
      </div>
      <div className="card-city">
        <img src={city4} alt="Business" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">San Jose</h5>
          <p className="card-text">Make Your Next Journey Delhi To Paris in Comfirtable And Best Price</p>
          <a href="#" className="btn ">Read More</a>
        </div>
      </div>
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
