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
          LocationData.map((locationObject, i)=>{
            const {
              img,
              location,
              tripdays,
              rs
            } = locationObject
            return (<LocationCard img={img} location={location} tripdays={tripdays} rs={rs} />)

          })
        }
      </div>

      <Footer />
    </>
  )
}

export default Flights