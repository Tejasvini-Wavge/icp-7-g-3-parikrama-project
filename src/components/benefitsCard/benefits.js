import React from 'react';
import BenefitsData from './benefitData';
import './benefits.css';

function Benefits() {
  return (
    <div className='benefits-container'>
      {BenefitsData.map((item) => (
        <div key={item.id} className='benefit-card'>
          <img alt='benefit icon' className='icon' src={item.icon} />
          <div className='benefit-content'>
            <h3>{item.title}</h3>
            <p>{item.about}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Benefits;
