import React, { useEffect, useState } from 'react';

import './about.css';

import portrait from '../../imgs/AboutPortrait.jpg';
import directorSet from '../../imgs/DirectorSet.jpg';

export default function About() {

  const [fade, setFade] = useState({ fade: '' });

  useEffect(() => {
    setInterval(() => {
      setFade({ fade: 'fade-in' });

    }, 300);
  }, [setFade])
  return (
    <div className={`about-container ${fade.fade}`}>
      <div className='card about-card'>
        <div className='about-inner-card'>
          <div className='about-section-1'>
            <img src={portrait} alt='Dakota J. Edwards' className='about-portrait' />
            <p className='about-text'>
              Throughout my life, I’ve been exposed to a variety of movies and performances,
              which inspired me to pursue a career in the film industry. My work ethic and
              love for the visual arts motivates me as a student, and pushes me to constantly
              develop my storytelling voice.
            </p>
          </div>
          <div className='about-section-2'>
            <p className='about-text'>
              I’m a curious and innovative film school student, and am currently working on some
              fascinating projects. Get in touch to learn more about my work, or if you’d be interested
              in collaborating together in the future.
            </p>
            <img src={directorSet} alt='Director Set' className='director-set-image' />
          </div>
        </div>
      </div>
    </div>
  );
}