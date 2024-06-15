import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './../../views/Cars/Cars.css'




const Cars = () => {
    return (
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
            <div className="deals">
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
            </div>
        </div>
    );
}

export default Cars;
