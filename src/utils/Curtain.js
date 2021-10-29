import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './curtain.css';

export default function Curtain() {

  const [fader, setFader] = useState({ fade: '' });

  const history = useHistory();

  useEffect(() => {
    setFader({ fade: 'fade-in' });
  }, [setFader])

  const startFadeOut = (event) => {
    event.preventDefault();

    setInterval(() => {
      if (fader.fade === 'fade-in') {
        setFader({ fade: 'fade-out' });
      }
    }, 500);

    setInterval(() => {
      history.push('/home');
    }, 1000);
  }

  return (
    <div className={`curtain-start-fade ${fader.fade}`}>
      <div className='curtain-container'>
        <div className='curtain-content'>
          <div className='curtain-text'>
            <p>It's about capturing the moment as it is in its raw form and not manipulating it by asking for permission to photograph</p>
            <p className='quote-author'><i className='bi bi-dash'/>Achim Soelter</p>
          </div>
          <button onClick={startFadeOut} className='btn curtain-btn'>
            <strong>
              Continue <i className='bi bi-arrow-right'></i>
            </strong>
          </button>
        </div>
      </div>
    </div>
  );
}