import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import ReactPlayer from 'react-player';

import './projects.css';
import videos from '../../utils/jsons/videos.json';

export default function Projects() {

  const [slideInterval, setSlideInterval] = useState(true);

  const jmfoCarouselVideos = videos.JohnMaximFlippinOff.map(vid => {
    return (
      <Carousel.Item key={vid.url}>
        <div className="video-responsive">
          <ReactPlayer
            className='first-carousel-video'
            url={vid.url}
            width='100%'
            height='100%'
            frameBorder="0"
            allowFullScreen
            onPlay={() => setSlideInterval(false)}
            onPause={() => setSlideInterval(true)}
            controls={true}
          />
        </div>
      </Carousel.Item>
    )
  });

  return (
    <>
      <div className='projects-container'>
        <div className='projects-card'>
          <a
            href='https://www.youtube.com/channel/UCjbPSW4Te7v-CEtkS_-1OWA'
            target='_blank'
            rel='noreferrer'
          >
            <u className='projects-title'>
              <strong>John Maxim Flipping Off (YouTube)</strong>
            </u>
          </a>
          <Carousel
            interval={slideInterval ? 10000 : null} controls={slideInterval}
            nextLabel=""
            prevLabel=""
            touch={true}
          >
            {jmfoCarouselVideos}
          </Carousel>
        </div>
      </div>
    </>
  )
}