import React, { useState } from 'react';

import './navigationBar.css';

export default function NavigationBar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const navbarToggle = (mm) => {
    if (mm === false) {
      setMobileMenu(true);
    } else {
      setMobileMenu(false);
    }
  }

  return (
    <div className='navbar'>
      <div className='navbar__container'>
        <a href='/' id='navbar__logo'>Dakota J. Edwards</a>
        <button onClick={() => navbarToggle(mobileMenu)} className='btn btn-link mobile-menu'>
          <i className='bi bi-list' style={{ fontSize: '2rem', color: 'black' }}></i>
        </button>
        {mobileMenu === false ?
          <ul className='navbar__menu'>
            <li className='navbar__item'>
              <a href="/" className='navbar__links'>
                <i className='bi bi-house-door-fill'></i>
                Home
              </a>
            </li>
            <li className='navbar__item'>
              <a href='/about' className='navbar__links'>
                <i className='bi bi-file-person'></i>
                About
              </a>
            </li>
            <li className='navbar__item'>
              <a href='/projects' className='navbar__links'>
                <i className='bi bi-camera-reels-fill'></i>
                Projects
              </a>
            </li>
            <li className='navbar__item'>
              <a href='/contact' className='navbar__links'>
                <i className='bi bi-telephone-fill'></i>
                Contact
                </a>
            </li>
          </ul>
          : <ul className='navbar__menu active'>
            <li className='navbar__item'>
              <a href="/" className='navbar__links'>Home</a>
            </li>
            <li className='navbar__item'>
              <a href='/about' className='navbar__links'>About</a>
            </li>
            <li className='navbar__item'>
              <a href='/projects' className='navbar__links'>Projects</a>
            </li>
            <li className='navbar__item'>
              <a href='/contact' className='navbar__links'>Contact</a>
            </li>
          </ul>}
      </div>
    </div>
  );
}