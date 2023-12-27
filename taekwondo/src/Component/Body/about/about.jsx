import React from 'react'
import './about.css';
import img1 from './img/im1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpeg';
const About = () => {
  return (
    <div className="about">
      <h2 className="header">ABOUT</h2>
      <div className="line"></div>
      <p className="des">We are working on women's safety through self-defence training.</p>
        

    <div className="allcard"> 

      <div className="card">
        <img src={img1} alt="Card Image" className='Cardimg'/>
        <div className="overlay">
        <p className="txts">In Germany, not only the young, but also the elderly or middle-aged take self-defense training. Because, women of different ages are victims of various embarrassing situations alone on the street or in the car parking place. Elderly people have more life experience about sudden attacks so they can understand the attacks in advance. And they quickly informed the police. </p>
        </div>
    </div><div className="card">
        <img src={img2} alt="Card Image" className='Cardimg'/>
        <div className="overlay">
         
            <p className='txts'> Kicking is one of the most important techniques in Taekwon-Do, used in promotion tests and matches. From patterns to spars and even breaking, foot techniques are used in almost every aspect of the sport.</p>
        </div>
    </div>
      <div className="card">
        <img src={img3} alt="Card Image" className='Cardimg'/>
        <div className="overlay">
          
        <p className="txts">
            I shall observed the tenats of taekwon-do,I shall respect the instructors and seniors, I shall never miss use of taekwon-do, I shall be a champion of freedom and justice, I shall build a more peaceful world. </p>
        </div>
    </div>

    </div>


      <div className="service">
        <p className="sertxt"> we are working with women. To protect their life and safety. Nowadays women feel safety is the most important of their daily life.so, We work with those women who feel they are insecure in society.  We train those women they are face problems in public transport and also other places. They are interested to learn Taekwondo. </p>
      </div>



    </div>
  )
}

export default About;