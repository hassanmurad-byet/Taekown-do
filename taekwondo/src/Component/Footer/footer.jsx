import React from 'react'
import './footer.css';
import logo from './imgs/logo.jpg';


const Footer = () => {
  return (
    <div className='footer'>
      <img src={logo} alt="" className="footimg" />
       <h5 className="ftxt">Vatara Taekwon-Do Association  </h5>
       <div className="allfot"> 
       <p className="foot"> <span className="bolded">Phone:</span> 01318-638806</p>
       <p className="foot"> <span className="bolded">Email:</span> vatarataekwon-doassociation@gmail.com</p>
       <p className="foot"> <span className="bolded">Address:</span> Mirpur-10, Dhaka, Bangladesh</p>
       <p className="myin" style={{ fontSize: '10px', color: 'gray', textAlign: 'right'}} >© 2023 Developed by Hassan Murad || mail: hassanmurad1501@gmail.com <br /> Contact: +88 01533694189</p>
       </div>
       

     
    </div>
  )
}

export default Footer;