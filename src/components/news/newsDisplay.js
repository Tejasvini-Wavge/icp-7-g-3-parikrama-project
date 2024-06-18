import React from 'react';
import { useParams } from 'react-router-dom';
import NewsData from './newsData';
import './blogDisplay.css'; // Import your CSS file for NewsDisplay styling

function NewsDisplay() {
    const { id } = useParams();
    const selectedBlog = NewsData.find((blog) => blog.id === id);

    if (!selectedBlog) {
        return <div>Blog not found!</div>;
    }

    return (
        <div className="selected-blog">
            <h1>{selectedBlog.title}</h1>
            <div className='data'>
                <span className='cate'>{selectedBlog.category}</span>|
                <span className='date'>{selectedBlog.date}</span>
            </div>
            <img src={selectedBlog.blogImg} alt='blog' className='blog-image'></img>
            <p className='content'>{selectedBlog.about}</p>
        </div>
    );
}

export default NewsDisplay;
