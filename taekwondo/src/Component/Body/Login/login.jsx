import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './login.css';
import user from './Assets/person.png';
import email from './Assets/email.png';
import pass from './Assets/password.png';
import img2 from './Assets/img2.png';


const Login = () => {

  const [action, setAction] = useState("Login");



  return (
    <div className="loginall">



      <div className="nav">
        <div className="back">
          <Link to='/' className='backbtn' >Go Home</Link>
          <Link to='/Admin' className='backbtn' >Admin Login</Link>
        </div>
      </div>


      <div className="alllogs">

        <div className='Logs'>
          <div className="Loginhd">
            <div className="Logtxt">{action}</div>
            <div className="underline"></div>
          </div>

          <div className="inputs">

            {action === "Login" ? <div></div> : <div className="input">
              <img src={user} alt="" className="loginimg" />
              <input type="text" placeholder='name' />
            </div>}


            <div className="input">
              <img src={email} alt="" className="loginimg" />
              <input type="emial" placeholder='mail' />
            </div>
            <div className="input">
              <img src={pass} alt="" className="loginimg" />
              <input type="password" placeholder='password' required />
            </div>

            {action === "Sign Up" ? <div></div> : <div className="forgot-password">Lost Password? <span>Click Here</span> </div>}
            <div className="sumit-container">

              <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}  >Sign Up</div>
              <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }} >Login</div>
            </div>
          </div>
        </div>

        <div className="Logs">
   
          <img src={img2} alt="" className="logimg2" /> 
          <p className="myinfo" style={{ fontSize: '10px', color: 'black' , textAlign: 'left', marginTop:'-2rem'}}> © 2023 Developed by Hassan Murad <br /> mail: hassanmurad1501@gmail.com | Contact: +88 01533694189</p>
          
        </div>
      </div>


{/* <div className='desadmin'>
  <p className="admintxt" style={{ fontSize: '13px', color: 'gray', textAlign: 'left' }}>
    <span className="bold" style={{ fontWeight: '600', textAlign: 'left', }}> Attention:  </span >
    When you are finished using all of your authenticated applications, please log out of this software and exit your browser to ensure you do not leave any of your applications (such as your e-mail) open to other users of this machine.
  </p>

 <p className="admintxt2" style={{ fontSize: '13px', color: 'gray', textAlign: 'left' , marginTop:'2rem'}}>
                  <span className="bold"  style={{ fontWeight: '600', textAlign: 'left' }}> Terms of Use: </span>
                  This software is the property of the 'Hassan Incorporetion IT' Any user of this software must comply with all Hassan Incorporetion IT. and Board of Regents policies, including the Acceptable Use Policy, Cyber Security Policy and Data Privacy Policy (). Users should have no expectation of privacy, as any and all files on this software may be intercepted, monitored, recorded, copied, inspected, and/or disclosed to authorized personnel in order to meet Hassan Incorporetion IT. obligations. By using this software, I acknowledge and consent to these terms.
              </p>

<p className="myinfo" style={{ fontSize: '10px', color: 'gray', textAlign: 'left', marginTop: '3.5rem', marginTop: '18rem' }} >© 2023 Developed by Hassan Murad <br /> mail: hassanmurad1501@gmail.com | Contact: +88 01533694189</p>
</div>
     */}
         
          



     






    </div>
  )
}

export default Login;