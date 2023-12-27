import React, { useState } from 'react'
import './adtten.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useLocation } from 'react-router';
const Attendance = () => {




  const [students, setStudents] = useState([
    { serial: 1, name: 'Hassan', id: '2010', present: false },
    { serial: 2, name: 'Fariha', id: '2011', present: false },
    { serial: 3, name: 'Antora', id: '2012', present: false },
    { serial: 4, name: 'Sraboni', id: '2013', present: false },
    { serial: 5, name: 'Abir', id: '2014', present: false },
    { serial: 6, name: 'Murad', id: '2015', present: false },
    { serial: 7, name: 'Mim', id: '2016', present: false },
    { serial: 8, name: 'Sanjida', id: '2017', present: false },
    { serial: 9, name: 'Juhura', id: '2018', present: false },
    { serial: 10, name: 'Mitu', id: '2020', present: false },

    // Add more students as needed
  ]);

  const handleAttendanceChange = (index) => {
    const updatedStudents = [...students];
    updatedStudents[index].present = !updatedStudents[index].present;
    setStudents(updatedStudents);
  };

  const getSummary = () => {
    const presentCount = students.filter((student) => student.present).length;
    const absentCount = students.length - presentCount;
    return { presentCount, absentCount };
  };

  const handleSubmit = () => {
    const { presentCount, absentCount } = getSummary();
    alert(`Submitted! Present: ${presentCount}, Absent: ${absentCount}`);
    // You can send the attendance data to the server or perform other actions here
  };


  return (
    <div className='bodys'>

      <h1 className='heads'>Attendance Sheet</h1>


      <table className='tables' >
        <thead className='theads' >
          <tr >
            <th>Serial</th>
            <th >Student Name</th>
            <th>Student ID</th>
            <th>Present</th>
          </tr>
        </thead>
        <tbody className='tbodys'>
          {students.map((student, index) => (
            <tr key={index} >
              <td>{student.serial}</td>
              <td> {student.name}</td>
              <td>{student.id}</td>
              <td>
                <input
                  type="checkbox" className='checkboxs'
                  checked={student.present}
                  onChange={() => handleAttendanceChange(index)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className='summery'>
        <p className='sumtit'> Summary:</p>
        <p className='ps'>Present: {getSummary().presentCount}</p>
        <p className='ps'>Absent: {getSummary().absentCount}</p>
      </div>

      <button onClick={handleSubmit} className='buttons' >Submit</button>
    </div>
  );
};

export default Attendance;