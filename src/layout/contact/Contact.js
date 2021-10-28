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
          <form onSubmit={handleSubmit}>
            <fieldset>
              {/* <div className='name-container'> */}
                <legend htmlFor='email'>Email</legend>
                <input type='text' id='email'></input>
                <label htmlFor='email'>Email</label>

              {/* </div> */}
            </fieldset>
          </form>
        </div>
      </div >
    </div >
  );
}