import React from 'react'
import './Flights.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import SearchCard from '../../components/searchCard/searchCard'
import { FlightData, LocationData } from '../../data/FlightData'
import FlightOfferCard from '../../components/FlightOfferCard/FlightOfferCard'
import LocationCard from '../../components/LocationCard/LocatinCard'


function Flights() {
  return (
    <>
      <Navbar />

      <div className='background-image'>
        <SearchCard />
      </div>

      <div className='offer-card'>
        {
          FlightData.map((dataObject, i) => {
            const {
              logo,
              title,
              discount,
              date
            } =
              dataObject
            return (<FlightOfferCard logo={logo} title={title} discount={discount} date={date} />)
          })
        }
      </div>

      <h1>Explore Top Domestic Routes</h1>

      <div className='location-card-container'>
        {
          LocationData.map((locationObject, i) => {
            const {
              img,
              location,
              tripdays,
              from
            } = locationObject
            return (<LocationCard img={img} location={location} tripdays={tripdays} from={from} />)

          })
        }
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
      <Footer />
    </>
  )
}

export default Flights