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
import city3 from './images/c-7.webp';
import city4 from './images/c-8.webp';
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


   
    
    <Footer className="footer"/>

    </>
  )
}

export default Rental
