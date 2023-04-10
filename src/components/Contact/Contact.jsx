import { useRef } from 'react';
import emailjs from '@emailjs/browser'
import ContactImage from './Bg-image/ContactImage';
import './contact.scss'

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className='contact--container'>
      <div className='text-container'>
        <h1 className='contact-title'>Contact Me</h1>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" placeholder='Name' required />
          <label>Email</label>
          <input type="email" name="user_email" placeholder='Email' required />
          <label>Message</label>
          <textarea name="message" rows='5' placeholder='Write here...' required />
          <input className='button' type="submit" value="Send" />
        </form>
      </div>
      <ContactImage />
    </div>
  )
}

export default Contact