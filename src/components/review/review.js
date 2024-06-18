import React, { useState } from 'react';
import ReviewData from './reviewData';
import './review.css';

function ReviewSlider() {
    const [current, setCurrent] = useState(0);
    const length = ReviewData.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(ReviewData) || ReviewData.length <= 0) {
        return null;
    }

    return (
        <div className="slider">
            <button className="left-arrow" onClick={prevSlide}>‹</button>
            <button className="right-arrow" onClick={nextSlide}>›</button>
            {ReviewData.map((review, index) => (
                <div className={index === current ? 'slide active' : 'slide'} key={review.id}>
                    {index === current && (
                        <div className="review-card">
                            <img alt="reviewer" className="reviewer-img" src={review.image} />
                            <div className="review-content">
                                <h3>{review.name}</h3>
                                <p>{review.review}</p>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default ReviewSlider;
