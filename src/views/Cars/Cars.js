import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './../../views/Cars/Cars.css';

import carImage1 from './../Cars/image/accord.jpg';
import carImage2 from './../Cars/image/BMW.jpg';
import carImage3 from './../Cars/image/tesla.jpg';
import carImage4 from './../Cars/image/audi.jpg';
import carImage5 from './../Cars/image/Toyota Aygo.jpg';
import carImage6 from './../Cars/image/Ford Focus.jpg';

import chicagoimg from './../Cars/image/Chicago.jpg'
import SanDiegoimg from './../../views/Cars/image/SanDiego.jpg'
import Lasvegasimg from './../../views/Cars/image/Lasvegas.jpg'
import NewYorkimg from './../../views/Cars/image/newyork.jpg'
import SanFranciscoimg from './../../views/Cars/image/SanFrancisco.jpg'
import NewOrleansimg  from './../../views/Cars/image/NewOrleans.jpg'
import LosAngelesimg from './../../views/Cars/image/LosAngeles.jpg'
import Londonimg from './../../views/Cars/image/LonDon.jpg'


const carData = [
  { id: 1, model: "Honda Accord", image: carImage1, discount: "60Kms included. After that $1/km", type: "SEDAN | AC | 5 Seats ", price: 59, originalPrice: 79 },
  { id: 2, model: " BMW", image: carImage2, discount: "60Kms included. After that $1/km", type: "Hatchback | AC | 5 Seats", price: 69, originalPrice: 89 },
  { id: 3, model: "Tesla", image: carImage3, discount: "60Kms included. After that $1/km", type: "LUX | AC | 5 Seats", price: 79, originalPrice: 99 },
  { id: 4, model: "Audi", image: carImage4, discount: "60Kms included. After that $1/km", type: "SUV | AC | 5 Seats", price: 89, originalPrice: 109 },
  { id: 5, model: "Toyota Aygo", image: carImage5, discount: "60Kms included. After that $1/km", type: "SEDAN | AC | 5 Seats", price: 49, originalPrice: 69 },
  { id: 6, model: "Ford Focus", image: carImage6, discount: "60Kms included. After that $1/km", type: "LUX | AC | 5 Seats", price: 39, originalPrice: 59 },
];

const destinationData = [
  { image: chicagoimg, city: 'Chicago', details: '10 Destinations | 5 Cars' },
  { image: SanDiegoimg, city: 'San Diego', details: '10 Destinations | 5 Cars' },
  { image: Lasvegasimg, city: 'Las vegas', details: '10 Destinations | 5 Cars' },
  { image: NewYorkimg, city: 'New York', details: '10 Destinations | 5 Cars' },
  { image: SanFranciscoimg, city: 'San Francisco', details: '10 Destinations | 5 Cars' },
  { image: NewOrleansimg, city: 'New Orleans', details: '10 Destinations | 5 Cars' },
  { image: LosAngelesimg, city: 'Los Angeles', details: '10 Destinations | 5 Cars' },
  { image: Londonimg, city: 'London', details: '10 Destinations | 5 Cars' },
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
              <input type='date' placeholder='choose date' />
              <input type="text" placeholder="Select drop Location" />
              <button>Search</button>
            </div>
          </div>
        </header>
        <section className="deals">
          <div className="deal-card">
            <div className="discount">20% Off</div>
            <img src="https://wallpaperaccess.com/full/4248674.jpg" alt="Los Angeles" />
            <div className="deal-info">
              <h2>Los Angeles</h2>
              <p>Round-trip | 3D/4N | 3 Person</p>
              <p>From <span>$849 - $999</span></p>
            </div>
          </div>
          <div className="deal-card">
            <div className="discount">15% Off</div>
            <img src="https://tse2.mm.bing.net/th?id=OIP.30sP-ds4mTbrzBjZhvkIDwHaEK&pid=Api&P=0&h=220" alt="United Kingdom" />
            <div className="deal-info">
              <h2>United Kingdom</h2>
              <p>Round-trip | 3D/4N | 2 Person</p>
              <p>From <span>$399 - $599</span></p>
            </div>
          </div>
          <div className="deal-card">
            <div className="discount">30% Off</div>
            <img src="https://tse2.explicit.bing.net/th?id=OIP.MMMUIn6dKIaFhdmtskNK-gHaEK&pid=Api&P=0&h=220" alt="France" />
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
                  <div className="cancellation">Free Cancellation Till 18 sep 2024</div>
                  <div className="tags">
                    <span>Manual</span>
                    <span>1 Large bag</span>
                    <span>1 Small bag</span>
                    <span>Diesel</span>
                  </div>
                  <div className="price">
                    <span>15% Off</span>
                    <span className="price-value">US${car.price} <s>US${car.originalPrice}</s></span>
                  </div>
                  <div className="rating">
                    <span className="star">★★★★★ 3,014 reviews</span>
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
  );
}

export default Cars;
