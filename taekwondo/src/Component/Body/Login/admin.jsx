import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import mail from './Assets/email.png';
import pass from './Assets/password.png';
import img2 from './Assets/img2.png';
import axios from 'axios';


const Admin = () => {

    // const [values, setValues] = useState({
    //     email: '',
    //     password: ''
    // })

    // const navigate = useNavigate()



    // axios.defaults.withCredentials =true;
    // const handleSumbit =(e) =>{
    //     e.preventDefault();
    //     axios.post('http://localhost:8081/login',  values)
    //     .then(res => {
    //         if(res.data.Status === "Success"){
    //             navigate('/selectcls')
            
    //         }else{
    //             alert(res.data.Message)
                 
    //         }
    //     })
    //     .catch(err => console.log(err));

    // }





    return (
        <div className="loginall">

            <div className="nav">
                <div className="back">
                    <Link to='/' className='backbtn' >Go Home</Link>
                    <Link to='/selectcls' className='backbtn' >selectcls</Link>
                </div>
            </div>
            <div className="alllogs">
                <div className='Logs'>
                    <div className="Loginhd">
                        <div className="admintxt" style={{
                            color: 'white',
                            fontSize: '25px', marginTop: '20px'
                        }}>Vatara Taekwon-Do Association</div>

                        <div className="underline" style={{ padding: '0 70px' }}></div>
                    </div>

                    <form className='mainform' >
                        <div className="inputs">
                            <div className="input">
                                <img src={mail} alt="" className="loginimg" />
                                <input type="emial" placeholder='mail' name='email'
                                    // onChange={e => setValues({...values, email:e.target.value})}
                                    required />
                            </div>
                            <div className="input">
                                <img src={pass} alt="" className="loginimg" />
                                <input type="password" placeholder='password' name='password'
                                    //  onChange={e => setValues({...values, password: e.target.value})} 
                                    required />
                            </div>

                            <div className="sumit-container">
                                <button className="submit" type="submit" >Sign In</button>
                            </div>
                         
                            <div className="forgot-password" style={{
                                marginTop: '-2rem', fontSize: '15px',
                                textAligncen: 'center'
                            }}><p>Security Tips <br />
                                    Privacy Policy | Terms of Use</p> </div>
                        </div>
                        </form>
                   
                </div>
                <div className="Logs">

                    <img src={img2} alt="" className="logsimg"  />
                    <p className="myinfo" style={{ fontSize: '10px', color: 'black', textAlign: 'left', marginTop:'-2rem'}}> © 2023 Developed by Hassan Murad <br /> mail: hassanmurad1501@gmail.com | Contact: +88 01533694189</p>
                    </div>
                   
            </div>


        </div>


    )
}

export default Admin;