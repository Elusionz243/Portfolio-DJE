import React, { useState, useEffect } from 'react';

import './contact.css';

export default function Contact() {
  const [fade, setFade] = useState({ fade: '' });
  useEffect(() => {
    setFade({ fade: 'fade-in'});
  }, [setFade]);

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div className={`contact-background ${fade.fade}`}>
      <div className='contact-card'>
        <u className='contact-title'><strong>Contact Me</strong></u>
        <form onSubmit={handleSubmit} className='contact-form'>
          <fieldset className='mb-3'>
            <label htmlFor='name' className='form-label'>Name</label>
            <input type='text' id='name' className='form-control' placeholder='John Doe' />
          </fieldset>
          <fieldset className='mb-3'>
            <label htmlFor='email' className='form-label'>Email address</label>
            <input type='text' id='email' className='form-control' placeholder='example@email.com' />
          </fieldset>
          <fieldset className='mb-3'>
            <label htmlFor='message' className='form-label'>Message</label>
            <textarea className='form-control' id='message' rows='6' placeholder={`Enter a message`}></textarea>
          </fieldset>
          <button type='submit' className='btn btn-primary submit-button' disabled>Submit</button>
        </form>
      </div >
    </div >
  );
}