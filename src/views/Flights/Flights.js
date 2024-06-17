import React from 'react'
import './Flights.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import SearchCard from '../../components/searchCard/searchCard'
import { FlightData } from '../../data/FlightData'
import FlightOfferCard from '../../components/FlightOfferCard/FlightOfferCard'


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

      <Footer />
    </>
  )
}

export default Flights