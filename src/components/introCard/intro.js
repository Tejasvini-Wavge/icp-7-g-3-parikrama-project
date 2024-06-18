import React from 'react';
import introData from './introData';
import './intro.css';

function Intro() {
  return (
    <div className='intro-container'>
      <div className='background-blur'></div>
      <p className='intro'>"{introData}"</p>
    </div>
  );
}

export default Intro;
