import React from 'react';
import './Contact.css';
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";
import { SiBuymeacoffee } from "react-icons/si";
import  { useRef } from 'react';
import emailjs from 'emailjs-com';


 

const Contact = () => {

const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
      publicKey: 'YOUR_PUBLIC_KEY',
    })
    .then(
      () => {
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
};


  return (
    <section id='contact'>
      <h5>Get In Touch With me</h5>
      <h2>Contact me</h2>
      <div className="container contact__container">
        <div className="contact__options">
         
         <article className="contact__option">
         <MdOutlineMarkEmailUnread className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>syedmaazsaeed@gmail.com</h5>
          <a href="mailto:syedmaazsaeed@gmail.com" target="_blank" >Drop a message</a>
          
         </article>
         <article className="contact__option">
         <FaInstagram className='contact__option-icon'/>
          <h4>Instagram</h4>
          <h5>syedmaazsaeed</h5>
          <a href="https://www.instagram.com/syedmaazsaeed/" target="_blank" >Drop a message</a>
          
         </article>
         <article className="contact__option">
         <SiBuymeacoffee className='contact__option-icon' />
          <h4>buymeacoffee</h4>
          <h5>syedmaazsaeed0</h5>
          <a href="https://buymeacoffee.com/syedmaazsaeed0" target="_blank" >Drop a message</a>
          
         </article>
         <article className="contact__option">
         <BsWhatsapp className='contact__option-icon'/>
          <h4>Whatsapp</h4>
          <h5>+92-310-690200-2</h5>
          <a href="https://api.whatsapp.com/send?phone=923106902002" target="_blank" >Drop a message</a>
          
         </article>
        </div>
        {/* Contact Section Ended */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact

