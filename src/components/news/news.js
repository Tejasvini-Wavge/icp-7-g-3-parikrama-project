import React from 'react';
import newsData from './newsData';
import './news.css';

function News() {
  return (
    <div className='news-container'>
      {newsData.map((element) => (
        <div key={element.id} className='news-card'>
          <img alt='blog' className='blog-img' src={element.blogImg} />
          <div className='news-card-content'>
            <h3>{element.title}</h3>
            <p>{element.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default News;
