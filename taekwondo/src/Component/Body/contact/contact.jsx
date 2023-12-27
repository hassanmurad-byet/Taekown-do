import React,{useRef} from 'react'
import './contact.css';

import FacebookIcon from './img/facebook-icon.png';
import TwitterIcon from './img/twitter.png';
import YoutubeIcon from './img/youtube.png';
import InstagramIcon from './img/instagram.png';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_wst0d05', 'template_g20f6mq', form.current, 'wDRKGm3lJm8mbzGTX').then((result) => {
            console.log(result.text);
            e.target.reset();
            alert('Email Sent !');
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <section id="contactpage">
        
            <div id="contact">
                <h1 className="contactpagetitle">Contact Us</h1>
                <span className="contactdesc">Please fill out the form below to discuss any work opportunities.</span>
                <form className="contactform" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your Name'name='your_name' />
                    <input type="email" className="email" placeholder='Your Email'name='your_email' />
                    <textarea name="message" rows="5" placeholder='Your Message' className="msg"></textarea>
                    <button  className="submitbtn" type='submit' value='Send' >Submit</button>
                 

                    <div className="links">
                        <img src={FacebookIcon} alt="Facebook" className="link"  />  
                        <img src={TwitterIcon} alt="twitter" className="link" />
                        <img src={YoutubeIcon} alt="Youtube" className="link" />
                        <img src={InstagramIcon} alt="Instagram" className="link" />
                    </div>


                </form>

            </div>
        </section>
    )
}

export default Contact;