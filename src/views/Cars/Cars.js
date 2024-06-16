import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './../../views/Cars/Cars.css';

import carImage1 from './../../img/hotel-.webp';
import carImage2 from './../../img/hotel-.webp';
import carImage3 from './../../img/hotel-.webp';
import carImage4 from './../../img/hotel-.webp';
import carImage5 from './../../img/hotel-.webp';
import carImage6 from './../../img/hotel-.webp';

const carData = [
  { id: 1, model: "Carmy Accord", image: carImage1, discount: "600Kms included. After that $1/km", type: "SEDAN | AC | 5 Seats" },
  { id: 2, model: "Audi, BMW", image: carImage2, discount: "600Kms included. After that $1/km", type: "Hatchback | AC | 5 Seats" },
  { id: 3, model: "Ertiga, Xylo", image: carImage3, discount: "600Kms included. After that $1/km", type: "LUX | AC | 5 Seats" },
  { id: 4, model: "Suv, Innova Crysta", image: carImage4, discount: "600Kms included. After that $1/km", type: "SUV | AC | 5 Seats" },
  { id: 5, model: "Toyota Aygo", image: carImage5, discount: "600Kms included. After that $1/km", type: "SEDAN | AC | 5 Seats" },
  { id: 6, model: "Ford Focus", image: carImage6, discount: "600Kms included. After that $1/km", type: "LUX | AC | 5 Seats" },
];

const destinationData = [
  {
    image: '',
    city: 'Chicago',
    details: '10 Destinations | 5 Cars'
  },
  {
    image: './../../img/san-diego.jpg',
    city: 'San Diego',
    details: '10 Destinations | 5 Cars'
  },
  {
    image: './../../img/san-jose.jpg',
    city: 'San Jose',
    details: '10 Destinations | 5 Cars'
  },
  {
    image: './../../img/new-york.jpg',
    city: 'New York',
    details: '10 Destinations | 5 Cars'
  },
  {
    image: './../../img/san-francisco.jpg',
    city: 'San Francisco',
    details: '10 Destinations | 5 Cars'
  },
  {
    image: './../../img/new-orleans.jpg',
    city: 'New Orleans',
    details: '10 Destinations | 5 Cars'
  },
  {
    image: './../../img/los-angeles.jpg',
    city: 'Los Angeles',
    details: '10 Destinations | 5 Cars'
  },
  {
    image: './../../img/long-beach.jpg',
    city: 'Long Beach',
    details: '10 Destinations | 5 Cars'
  }
];

const Cars = () => {
  return (
    <>
      <Navbar className="navbar" /> 
      <div className="cars-container">
        <header className="header">
          <div className="header-content">
            <h1>Starts Your Trip with GeoTrip</h1>
            <p>Take a little break from the work stress of everyday. Discover plan trip and explore beautiful destinations.</p>
            
            <div className="search-box">
              <input type="text" placeholder="Select Pickup Location" />
              <input type="text" placeholder="" />
              <button>Search</button>
            </div>
          </div>
        </header>
        <section className="deals">
          <div className="deal-card">
            <div className="discount">20% Off</div>
            <img src="los-angeles.jpg" alt="Los Angeles" />
            <div className="deal-info">
              <h2>Los Angeles</h2>
              <p>Round-trip | 3D/4N | 3 Person</p>
              <p>From <span>$849 - $999</span></p>
            </div>
          </div>
          <div className="deal-card">
            <div className="discount">15% Off</div>
            <img src="united-kingdom.jpg" alt="United Kingdom" />
            <div className="deal-info">
              <h2>United Kingdom</h2>
              <p>Round-trip | 3D/4N | 2 Person</p>
              <p>From <span>$399 - $599</span></p>
            </div>
          </div>
          <div className="deal-card">
            <div className="discount">30% Off</div>
            <img src="france.jpg" alt="France" />
            <div className="deal-info">
              <h2>France</h2>
              <p>Round-trip | 3D/4N | 3 Person</p>
              <p>From <span>$569 - $799</span></p>
            </div>
          </div>
        </section>
        <section className="vehicles">
          <h2>Our Awesome Vehicles</h2>
          <p>Cicero famously orated against his political opponent Lucius Sergius Catilina.</p>
          <div className="vehicles-row">
            {carData.map(car => (
              <div className="vehicle-card" key={car.id}>
                <div className="vehicle-discount">{car.discount}</div>
                <img src={car.image} alt={car.model} />
                <h3>{car.model}</h3>
                <p>{car.type}</p>
                <div className="vehicle-info">
                  <div className="cancellation">Free Cancellation Till 10 Aug '23</div>
                  <div className="tags">
                    <span>Manual</span>
                    <span>1 Large bag</span>
                    <span>1 Small bag</span>
                    <span>Diesel</span>
                  </div>
                  <div className="price">
                    <span>15% Off</span>
                    <span className="price-value">US$59 <s>US$79</s></span>
                  </div>
                  <div className="rating">
                    <span>Exceptional</span>
                    <span>3,014 reviews</span>
                    <span className="rating-value">4.8</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="explore-more">Explore More</button>
        </section>
        <section className="trending-destinations">
          <h2>Trending Destinations For Stay</h2>
          <p>Cicero famously orated against his political opponent Lucius Sergius Catilina.</p>
          <div className="destinations-container">
            {destinationData.map((destination, index) => (
              <div key={index} className="destination-card">
                <img src={destination.image} alt={destination.city} />
                <h3>{destination.city}</h3>
                <p>{destination.details}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer className="footer"/>
    </>
  );
}

export default Cars;
