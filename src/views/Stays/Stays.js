import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import SearchCard from '../../components/searchCard/searchCard';
import News from '../../components/news/news';
import './Stays.css';
import OfferCard from '../../components/travelOfferCards/offerCard';
import NewsData from '../../components/news/newsData';

function Stays() {
  return (
    <>
      <Navbar className="navbar" />
      <div className='background'>
        <SearchCard />
      </div>
      <div className='offer-card-container'>
        <OfferCard />
      </div>
      <div>
        <p>Why choose us?</p>
        
      </div>
      <div className='news-section'>
        <p className='news-heading'>Latest from our news</p>
        <div className='news-container'>
          {NewsData.map((news, index) => {
            const { id, title, blogImg, date } = news;
            return (
              <News
                key={id}
                id={id}
                title={title}
                blogImg={blogImg}
                date={date}
              />
            );
          })}
        </div>
      </div>
      <Footer className="footer" />
    </>
  );
}

export default Stays;
