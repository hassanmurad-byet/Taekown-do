import React from 'react'
import Homeall from './Homeall';
import Login from './Body/Login/login';
import Admin from './Body/Login/admin';
import Attendance from './Body/addendance/attendance';
import Selectcls from './Body/addendance/selectcls';
import {Route, Routes} from 'react-router-dom'
import ChoosePlan from './Body/Admission/Chooseplan';

const Bodycomponent = () => {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Homeall/> } />
        <Route path="/login" element ={<Login/>} />
        <Route  path="/Admin" element={<Admin/>}/>
        <Route path="/attend" element ={<Attendance/>} />
        <Route path="/selectcls" element={<Selectcls/>} />
        <Route path="/plan" element={<ChoosePlan/>} />

      </Routes>

    
      


    </div>
  )
}

export default Bodycomponent;