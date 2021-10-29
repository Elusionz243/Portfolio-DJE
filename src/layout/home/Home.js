import React, { useState, useEffect } from 'react';

import portrait from '../../imgs/PortraitCropped.jpg';
import backgroundImage from '../../imgs/BackgroundImage.jpg';

import './home.css'

export default function Home() {

  const [fade, setFade] = useState({fade: ''});
  useEffect(() => {
    setInterval(() => {
      if(fade.fade === '') setFade({fade: 'fade-in'});
    }, 300);

    return () => {

    }
  })


  return (
    <div className={`home-bg ${fade.fade}`}>
      <div className='intro-card'>
        <div className='card card-background intro'>
          <div className='img-container'>
            <img src={portrait} alt='Dakota J. Edwards' className='portrait' />
          </div>
          <div className='introduction-text'>
            <p>
              Back in 2018, I thought I would end up as a pilot.
              Next thing I know, I have a camera in my hand and I'm spending my weekends shooting Music Videos,
              Ads, and Weddings. My goal is to scale my business, Hungry & Humble, from a solo operation into a
              full production company aimed at helping musicians create great content to grow their brands and share
              their messages with the world.
            </p>
            <p>
              I've had the privilege of producing, directing, shooting, and editing several projects within the
              Provo/SLC Music Scene over the last two years, and I'm looking forward with excitement towards the
              many projects to come this year!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}