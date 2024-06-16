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
function Rental() {

  
 
  return (
    <>
    <Navbar className="navbar" /> 
    <div  className='background-rental'></div>

    
   
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
        <h2 className="subtitle">Special Discount with GeoTrip.com</h2>
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

export default Rental
