import React from 'react';
import { useParams } from 'react-router-dom';
import NewsData from './newsData';
import './blogDisplay.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

function NewsDisplay() {
  const { id } = useParams();
  const selectedBlog = NewsData.find((news) => news.id === id);

  if (!selectedBlog) {
    return <div>Blog not found!</div>;
  }

  return (<>
<Navbar/>
    <div className="selected-blog">
      <h1>{selectedBlog.title}</h1>
      <div className='data'>
        <span className='cate'>{selectedBlog.category}</span>|
        <span className='date'>{selectedBlog.date}</span>
      </div>
      <img src={selectedBlog.blogImg} alt={selectedBlog.title} className='blog-image' />
      <p className='content'>{selectedBlog.about}</p>

    </div>
    <Footer/>
    </>
  );
}

export default NewsDisplay;
