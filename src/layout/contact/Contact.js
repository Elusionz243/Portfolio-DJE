import React from 'react';

import './contact.css';

export default function Contact() {

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div className='contact-background'>
      <div className='card contact-card'>
        <div className='contact-form'>
          {/* <form onSubmit={handleSubmit}> */}
            <fieldset>
              <input type='text' id='email' />
            </fieldset>
          {/* </form> */}
        </div>
      </div >
    </div >
  );
}