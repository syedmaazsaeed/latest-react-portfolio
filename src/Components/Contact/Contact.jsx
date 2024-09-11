import React from 'react';
import './Contact.css';
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";
import { SiBuymeacoffee } from "react-icons/si";



const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch With me</h5>
      <h2>Contact me</h2>
      <div className="container contact__container">
        <div className="contact__options">
         
         <article className="contact__option">
         <MdOutlineMarkEmailUnread />
          <h4>Email</h4>
          <h5>syedmaazsaeed@gmail.com</h5>
          <a href="mailto:syedmaazsaeed@gmail.com" target="_blank" >Drop a message</a>
          
         </article>
         <article className="contact__option">
         <GrLinkedin />
          <h4>Linkedin</h4>
          <h5>syedmaazsaeed</h5>
          <a href="https://www.linkedin.com/in/syed-maaz-saeed-908718204/" target="_blank" >Drop a message</a>
          
         </article>
         <article className="contact__option">
         <FaXTwitter />
          <h4>Twitter</h4>
          <h5>SyedMaazSaeed</h5>
          <a href="https://twitter.com/SyedMaazSaeed" target="_blank">Drop a message</a>
          
         </article>
         <article className="contact__option">
         <FaInstagram />
          <h4>Instagram</h4>
          <h5>syedmaazsaeed</h5>
          <a href="https://www.instagram.com/syedmaazsaeed/" target="_blank" >Drop a message</a>
          
         </article>
         <article className="contact__option">
         <SiBuymeacoffee />
          <h4>buymeacoffee</h4>
          <h5>syedmaazsaeed0</h5>
          <a href="https://buymeacoffee.com/syedmaazsaeed0" target="_blank" >Drop a message</a>
          
         </article>
         <article className="contact__option">
         <BsWhatsapp />
          <h4>Whatsapp</h4>
          <h5>+92-310-690200-2</h5>
          <a href="https://api.whatsapp.com/send?phone=923106902002" target="_blank" >Drop a message</a>
          
         </article>
        </div>
        {/* Contact Section Ended */}
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows='7' placeholder='Your Message' required></textarea>
          <button type='submit'></button>
        </form>
      </div>

    </section>
  )
}

export default Contact

