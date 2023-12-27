import React, { useState, useEffect } from 'react'
import './select.css';

import { Link } from 'react-router-dom';
import course from './imgs/course.png';
import sec from './imgs/section.png';
import time from './imgs/time.png';
import times from './imgs/time1.png';

const Selectcls = () => {


    return (
        <div className='containers'>
            <div className="cls"> 
            <Link to='/attend' className='clsbtn' >Attend</Link></div>
              


            <div className="selectLogs">

                <div className="inputs">
                    <div className="input">
                        <img src={course} alt="" className="selectimg" />
                        <input type="text" placeholder='Belt Name' name='email'
                            required />
                    </div>
                    <div className="input">
                        <img src={sec} alt="" className="selectimg" />
                        <input type="text" placeholder='Section' name='password'

                            required />
                    </div>
                    <div className="input">
                        <img src={times} alt="" className="selectimg" />
                        <input type="Date" placeholder='Time' name='password'

                            required />
                    </div>

                    <div className="sumit-container">
                        <button className="clssubmit" type="submit" >Conform</button>
                    </div>

                    <div className="forgot-password" style={{
                        marginTop: '-2rem', fontSize: '15px',
                        textAligncen: 'center'
                    }}><p>Security Tips <br />
                            Privacy Policy | Terms of Use</p> </div>
                </div>

            </div>

        </div>
    )
}

export default Selectcls;