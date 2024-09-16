import React, {useEffect} from 'react';
import './Contact.css';
import Lottie from 'lottie-react';
import instagramAnimationLogo from '../../assets/instagram.json';
import whatsappAnimationLogo from '../../assets/Animation - 1726300373456.json'; 
import emailAnimationLogo from '../../assets/gmail.json';
import  { useRef } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';  


 

const Contact = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
      offset: 300,
    });
    AOS.refresh(); 
}, []);

const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_t0hnis5', 'template_bir475p', form.current, 'B-vvFL3fc2YtmvmhG')
  
  .then(
    () => {
      toast.success('Your message has been sent successfully!', {
        position: "top-right",
        autoClose: 5000,  
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
      });
      e.target.reset(); 
    },
    (error) => {
      toast.error('Failed to send the message.Try again later.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
      });
    }
  );
};


  return (
    <section id='contact'>
      <h5>Get In Touch With me</h5>
      <h2>Contact me</h2>
      <div className="container contact__container">
        <div className="contact__options" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
         
         <article className="contact__option">
         <div className='contact__option-icon'>
              <Lottie className='animated-icons' animationData={emailAnimationLogo} loop={true} />
            </div>
          <h4>Email</h4>
          <h5>syedmaazsaeed@gmail.com</h5>
          <a href="mailto:syedmaazsaeed@gmail.com" target="_blank" rel="noreferrer" >Reach Me by Email</a>
          
         </article>
         <article className="contact__option">
         <div className='contact__option-icon'>
              <Lottie className='animated-icons' animationData={instagramAnimationLogo} loop={true} />
            </div>
          <h4>Instagram</h4>
          <h5>syedmaazsaeed</h5>
          <a href="https://www.instagram.com/syedmaazsaeed/" target="_blank" rel="noreferrer" >Engage on Instagram</a>
          
         </article>
         <article className="contact__option">
         <div className='contact__option-icon'>
              <Lottie className='animated-icons' animationData={whatsappAnimationLogo} loop={true} />
            </div>

          <h4>Whatsapp</h4> 
          <h5>+92-310-690200-2</h5>
          <a href="https://api.whatsapp.com/send?phone=923106902002" target="_blank" rel="noreferrer" >Chat with Me</a>
          
         </article>
        </div>
        {/* Contact Section Ended */}
        <form ref={form} onSubmit={sendEmail} data-aos="fade-left" data-aos-offset="500" data-aos-duration="500">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary btn-swing'>Send Message</button>
        </form>
      </div>
      <ToastContainer />
    </section>
  )
}

export default Contact

