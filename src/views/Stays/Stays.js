import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import SearchCard from '../../components/searchCard/searchCard';
import News from '../../components/news/news';
import './Stays.css';
import OfferCard from '../../components/travelOfferCards/offerCard';
import NewsData from '../../components/news/newsData';
import Benefits from '../../components/benefitsCard/benefits';
import Reviews from '../../components/review/review';
import Newsletter from '../../components/newsletter/newsletter';

function Stays() {
  return (
    <>
      <Navbar className="navbar" />
      <div className='background-stay'>
        <SearchCard />
      </div>
      <div className='offer-card-container'>
        <OfferCard />
      </div>
      <div className='benefits-container'>
        <p className='news-heading'>
          Why choose Us?
        </p>
<Benefits/>

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
      <div className='review-container'>
        <p className='news-heading'>What people Say?</p>
      <Reviews/>
      </div>
      <div>
<Newsletter/>
      </div>
      <Footer className="footer" />
    </>
  );
}

export default Stays;
