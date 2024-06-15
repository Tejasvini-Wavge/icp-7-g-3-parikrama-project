import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './../../views/Cars/Cars.css'

const Header = () => {
  return (
    <header className="header">
      <h1>Start Your Trip with GeoTrip</h1>
      <p>Take a little break from the work stress of everyday. Discover plan trip and explore beautiful destinations!</p>
    </header>
  );
}

const LocationSearch = () => {
  return (
    <div className="location-search">
      <input type="text" placeholder="Select Pickup Location" />
      <input type='date' placeholder='choose date' />
      <input type="text" placeholder="Select Drop Location" />
      <button>Search</button>
    </div>
  );
}

const DestinationCard = ({ city, priceRange, imageUrl }) => {
  return (
    <div className="destination-card">
      <img src={imageUrl} alt={city} />
      <h3>{city}</h3>
      <p>{priceRange}</p>
    </div>
  );
}

const VehicleCard = ({ name, type, seats, price, imageUrl }) => {
  return (
    <div className="vehicle-card">
      <img src={imageUrl} alt={name} />
      <h4>{name}</h4>
      <p>{type} - {seats} Seats</p>
      <p>{price}</p>
    </div>
  );
}

const VehicleList = () => {
  const vehicles = [
    { name: 'Camry Accord', type: 'Sedan', seats: 5, price: '$59', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Eriga, Xylo', type: 'LUV', seats: 5, price: '$59', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'SUV, Innova Crysta', type: 'SUV', seats: 7, price: '$59', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Toyota Aygo', type: 'Hatchback', seats: 4, price: '$59', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Ford Focus', type: 'LUV', seats: 5, price: '$59', imageUrl: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className="vehicle-list">
      {vehicles.map(vehicle => (
        <VehicleCard key={vehicle.name} {...vehicle} />
      ))}
    </div>
  );
}

const TrendingDestinationCard = ({ city, country, imageUrl }) => {
  return (
    <div className="trending-destination-card">
      <img src={imageUrl} alt={`${city}, ${country}`} />
      <h4>{city}</h4>
      <p>{country}</p>
    </div>
  );
}

const TrendingDestinationList = () => {
  const destinations = [
    { city: 'Dubai', country: 'UAE', imageUrl: 'https://via.placeholder.com/150' },
    { city: 'New York', country: 'USA', imageUrl: 'https://via.placeholder.com/150' },
    { city: 'Paris', country: 'France', imageUrl: 'https://via.placeholder.com/150' },
    { city: 'Tokyo', country: 'Japan', imageUrl: 'https://via.placeholder.com/150' },
    { city: 'Kuala Lumpur', country: 'Malaysia', imageUrl: 'https://via.placeholder.com/150' },
    { city: 'Bangkok', country: 'Thailand', imageUrl: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className="trending-destination-list">
      {destinations.map(destination => (
        <TrendingDestinationCard key={destination.city} {...destination} />
      ))}
    </div>
  );
}

const Cars = () => {
  return (
    <div className="App">
      <Header />
      <LocationSearch />
      <div className="destination-list">
        <DestinationCard city="Los Angeles" priceRange="$849 - $999" imageUrl="https://via.placeholder.com/150" />
        <DestinationCard city="United Kingdom" priceRange="$569 - $799" imageUrl="https://via.placeholder.com/150" />
        <DestinationCard city="United States" priceRange="$300 - $999" imageUrl="https://via.placeholder.com/150" />
        <DestinationCard city="Paris, France" priceRange="$800 - $1199" imageUrl="https://via.placeholder.com/150" />
      </div>
      <VehicleList />
      <TrendingDestinationList />
    </div>
  );
}





export default Cars;
