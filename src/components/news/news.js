import React from 'react';
import { Link } from 'react-router-dom';
import './news.css';

function News({ id, blogImg, title, date }) {
  return (
    <Link className='news-link' to={`/newsDisplay/${id}`}>
      <div className='news-card'>
        <img alt='blog' className='blog-img' src={blogImg} />
        <div className='news-card-content'>
          <h3>{title}</h3>
          <p>{date}</p>
        </div>
      </div>
    </Link>
  );
}

export default News;
