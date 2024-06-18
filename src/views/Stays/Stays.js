import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import SearchCard from '../../components/searchCard/searchCard';
import './Stays.css';
import OfferCard from '../../components/travelOfferCards/offerCard';
import Intro from '../../components/introCard/intro';
import News from '../../components/news/news';
import { Link } from 'react-router-dom';

function Stays() {
  return (
    <>
      <Navbar className="navbar" />
      <div className='background'>
        <SearchCard/>
      </div>
      <Intro/>
      <div className='offer-card-container'>
        <OfferCard />
      </div>
      <div className='News'>
        <p className='news-heading'>Latest from our news</p>
      <Link to='/newsDisplay:/id' className='link-News'><News/></Link>
      </div>
      <Footer className="footer" />
    </>
  );
}

export default Stays;
