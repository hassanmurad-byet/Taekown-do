
import React from 'react';
// import img2 from './img/kondoimg.jpg';
import img3 from './img/newgirl.jpg';
import './admi.css';
import { NavLink } from 'react-router-dom';



const Admission = () => {


  return (
    <div className="admisstion">

      <h2 className="Adhead">ADMISSION </h2>
      <p className="adtxt">we are offering better opportunities to learn Taekwondo for women. make your dream start with the taekwondo of our Academi. </p>
      <div className="lines"></div>
       
      <div className="Adcard">
        {/* <img src={img2} alt="AdCard Image" className='AdCardimg'/> */}
        <img src={img3} alt="AdCard Image" className='newgirlimg'/>

        <div className="overlay">
          <div className="cost">
            <h4>Admission Fee: 2000 Tk</h4>
            <h4>Monthly Fee: 1000 Tk</h4>
            <h4>Uniform Cost: 3500 Tk</h4>
            <NavLink  to='/plan' className='plnbtn'>Choose Your Plan</NavLink>
          </div>
        <p className="txts"> <span className='bold'>Training spot info:</span> In Germany, not only the young, but also the elderly or middle-aged take self-defense training. Because, women of different ages are victims of various embarrassing situations alone on the street or in the car parking place. Elderly people have more life experience about sudden attacks so they can understand the attacks in advance. And they quickly informed the police. </p>
        </div>
       </div>

  
        

       



  


    </div>
  );
}



export default Admission;