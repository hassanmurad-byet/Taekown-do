import React from 'react'

import About from '../about/about';
import Admission from '../Admission/admission';
import Contact from '../contact/contact';
import Footer from '../../Footer/footer';
import girl from './imgs/output.png';
import './home.css';

const Home = () => {
  return (
    <div className="page1">
    <div className='home'>
          
        <img src={girl} alt="" className='pics'  />
           {/* <div className="navimg">
         <a href="/" className="imglink"><img src={face} alt="" className='img'/> </a>
          <a href="/" className="imglink"><img src={mail} alt="" className='img'/> </a>
          <a href="/" className="imglink"><img src={ph} alt="" className='img'/> </a>
        </div> */}
       <p className="txt">"I believe in being strong when everything seems to be going wrong" </p>

    </div>
   
    <About/>
    <Admission/>
    <Contact/>
    <Footer/>

    </div>
  )
}

export default Home;